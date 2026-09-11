import test from "node:test";
import assert from "node:assert/strict";
import { sensorEvents, calendarEvents } from "../src/adapters.ts";
import { validDate, homeDate, addDays, daysBetween, updateLabel } from "../src/dates.ts";
import { validateConfig } from "../src/config.ts";
import { artworkColor, projectEvents, groupEvents } from "../src/schedule.ts";
import { readCalendar } from "../src/calendar-cache.ts";
import { ScheduleController } from "../src/controller.ts";
import type {
  HassEntity,
  HomeAssistant,
  ScheduleSnapshot,
} from "../src/types.ts";
const entity = (
  attributes: Record<string, unknown>,
  state = "ready",
): HassEntity => ({ entity_id: "sensor.waste", state, attributes });
test("generic v2 preserves complete comma-containing names; v3 preserves source metadata", () => {
  const result = sensorEvents(
    entity({
      upcoming: [
        { date: "2026-09-14", type: "Glass, bottles" },
        {
          date: "2026-09-14",
          type: "BIO",
          type_id: "bio",
          color: "#C68C52",
          color_source: "source",
        },
      ],
    }),
  );
  assert.equal(result.events.length, 2);
  assert.equal(result.events[0].label, "Glass, bottles");
  assert.equal(artworkColor(result.events[1]), "#C68C52");
  assert.equal(
    artworkColor({ ...result.events[1], colorSource: "default" }),
    undefined,
  );
});
test("authoritative empty generic list wins over legacy attributes", () => {
  assert.deepEqual(
    sensorEvents(
      entity({
        upcoming: [],
        upcoming_pickups: [{ date: "2026-09-14", type: "BIO" }],
      }),
    ).events,
    [],
  );
  assert.equal(sensorEvents(entity({})).supported, false);
});
test("grouped metadata and historical fork types use explicit records", () => {
  const modern = sensorEvents(
    entity({
      upcoming: [
        {
          date: "2026-09-14",
          collections: [
            { type: "BIO", type_id: "bio" },
            { type: "Mixed", type_id: "residual" },
          ],
        },
      ],
    }),
  );
  assert.equal(modern.events.length, 2);
  assert.equal(modern.events[0].typeId, "bio");
  assert.deepEqual(
    sensorEvents(
      entity({
        upcoming_pickups: [
          { date: "2026-09-14", types: ["Glass, bottles", "BIO"] },
        ],
      }),
    ).events.map((e) => e.label),
    ["Glass, bottles", "BIO"],
  );
});
test("invalid dates and CSS inputs cannot enter presentation", () => {
  for (const date of ["2026-02-29", "2026-13-01", "not-date"])
    assert.equal(validDate(date), false);
  const result = sensorEvents(
    entity({
      upcoming: [
        {
          date: "2026-09-14",
          type: "<script>",
          color: "red; background:url(x)",
          icon: "javascript:evil",
        },
      ],
    }),
  );
  assert.equal(result.events[0].color, undefined);
  assert.equal(result.events[0].icon, undefined);
});
test("home dates and relative distances survive DST and remote viewer timezones", () => {
  assert.equal(
    homeDate(new Date("2026-03-28T23:30:00Z"), "Europe/Warsaw"),
    "2026-03-29",
  );
  assert.equal(
    homeDate(new Date("2026-03-28T23:30:00Z"), "America/Los_Angeles"),
    "2026-03-28",
  );
  assert.equal(daysBetween("2026-03-29", "2026-03-30"), 1);
  assert.equal(addDays("2026-10-25", 1), "2026-10-26");
});
test("calendar all-day dates stay literal and timed dates use HA timezone", () => {
  const result = calendarEvents(
    [
      { summary: "Paper", start: { date: "2026-03-29" } },
      { summary: "BIO", start: { dateTime: "2026-03-28T23:30:00Z" } },
    ],
    "calendar.waste",
    "Europe/Warsaw",
  );
  assert.deepEqual(
    result.map((e) => e.date),
    ["2026-03-29", "2026-03-29"],
  );
});
test("deduplication stays within sources, explicit filters and overrides retain identities", () => {
  const events = sensorEvents(
    entity({ upcoming: [{ date: "2026-09-14", type: "BIO", type_id: "bio" }] }),
  ).events;
  const cfg = validateConfig({
    type: "custom:waste-pickup-planner-card",
    entity: "sensor.waste",
    overrides: [{ type: "bio", name: "Food", color: "#112233" }],
  });
  const projected = projectEvents(
    [...events, ...events, { ...events[0], sourceId: "sensor.second" }],
    cfg,
    "2026-09-01",
    "2026-10-01",
  );
  assert.equal(projected.length, 2);
  assert.equal(projected[0].label, "Food");
  assert.equal(artworkColor(projected[0]), "#112233");
  assert.equal(groupEvents(projected).length, 1);
});
test("config rejects unsafe navigation and invalid bounds", () => {
  assert.throws(() =>
    validateConfig({ type: "x", entity: "sensor.x", days_to_show: 0 }),
  );
  assert.throws(() =>
    validateConfig({
      type: "x",
      entity: "sensor.x",
      tap_action: { action: "navigate", navigation_path: "//example.com" },
    }),
  );
});
test("calendar reads share a connection cache and retry failures", async () => {
  let calls = 0;
  const hass = {
    connection: {},
    states: {},
    callApi: async () => {
      calls++;
      return [];
    },
  } as unknown as HomeAssistant;
  await Promise.all([
    readCalendar(hass, "calendar.x", "2026-09-01", "2026-10-01"),
    readCalendar(hass, "calendar.x", "2026-09-01", "2026-10-01"),
  ]);
  assert.equal(calls, 1);
  hass.connection = {};
  hass.callApi = async () => {
    calls++;
    throw Error("offline");
  };
  await assert.rejects(
    readCalendar(hass, "calendar.x", "2026-09-01", "2026-10-01"),
  );
  await assert.rejects(
    readCalendar(hass, "calendar.x", "2026-09-01", "2026-10-01"),
  );
  assert.equal(calls, 3);
});
test("controller distinguishes empty unknown sensors, stale data, and connection changes", async () => {
  const date = homeDate(new Date(), "Europe/Warsaw"),
    controller = new ScheduleController();
  const hass = {
    connection: {},
    config: { time_zone: "Europe/Warsaw" },
    states: { "sensor.waste": entity({ upcoming: [{ date, type: "BIO" }] }) },
  } as HomeAssistant;
  const cfg = validateConfig({ type: "x", entity: "sensor.waste" });
  let snapshot: ScheduleSnapshot | undefined;
  const publish = (v: ScheduleSnapshot) => {
    snapshot = v;
  };
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot!.status, "ready");
  hass.states["sensor.waste"] = entity({}, "unavailable");
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot!.status, "stale");
  hass.connection = {};
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot!.status, "unavailable");
  hass.states["sensor.waste"] = entity({ upcoming: [] }, "unknown");
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot!.status, "empty");
});
test("obsolete calendar responses cannot publish after removal", async () => {
  let resolve!: (v: unknown) => void;
  const pending = new Promise((r) => {
    resolve = r;
  });
  const hass = {
    connection: {},
    config: { time_zone: "UTC" },
    states: {
      "calendar.waste": {
        entity_id: "calendar.waste",
        state: "off",
        attributes: {},
      },
    },
    callApi: () => pending,
  } as HomeAssistant;
  const controller = new ScheduleController(),
    states: string[] = [];
  const request = controller.update(
    hass,
    validateConfig({ type: "x", entity: "calendar.waste" }),
    (s) => states.push(s.status),
  );
  controller.cancel();
  resolve([]);
  await request;
  assert.deepEqual(states, ["loading"]);
});

test("partial source failures retain an explicit incomplete empty state", async () => {
  const controller = new ScheduleController();
  const hass = {
    connection: {},
    config: { time_zone: "UTC" },
    states: {
      "sensor.waste": entity({ upcoming: [] }),
      "sensor.second": {
        ...entity({}, "unavailable"),
        entity_id: "sensor.second",
      },
    },
  } as HomeAssistant;
  let snapshot: ScheduleSnapshot | undefined;
  await controller.update(
    hass,
    validateConfig({ type: "x", entities: ["sensor.waste", "sensor.second"] }),
    (value) => {
      snapshot = value;
    },
  );
  assert.equal(snapshot!.status, "stale");
  assert.equal(snapshot!.events.length, 0);
  assert.equal(snapshot!.messages.length, 1);
});

test("date ranges exclude the end date and hidden overrides remove only their type", () => {
  const events = sensorEvents(
    entity({
      upcoming: [
        { date: "2026-09-14", type: "BIO" },
        { date: "2026-09-15", type: "Paper" },
      ],
    }),
  ).events;
  const config = validateConfig({
    type: "x",
    entity: "sensor.waste",
    overrides: [{ type: "BIO", hidden: true }],
  });
  assert.deepEqual(
    projectEvents(events, config, "2026-09-14", "2026-09-15"),
    [],
  );
  assert.equal(
    projectEvents(events, config, "2026-09-14", "2026-09-16")[0].label,
    "Paper",
  );
});


test("long labels and type IDs retain exact override and deduplication identity", () => {
  const prefix = "Collection ".repeat(60);
  for (const withId of [false, true]) {
    const rows = ["A", "B"].map(suffix => ({date: "2026-09-14", type: prefix + suffix,
      ...(withId ? {type_id: prefix + suffix} : {})}));
    const events = sensorEvents(entity({upcoming: rows})).events;
    assert.equal(events[0].label, prefix + "A");
    assert.equal(events[0].typeId, withId ? prefix + "A" : undefined);
    const cfg = validateConfig({type: "x", entity: "sensor.waste",
      overrides: [{type: prefix + "B", name: "Second collection"}]});
    const projected = projectEvents(events, cfg, "2026-09-01", "2026-10-01");
    assert.equal(projected.length, 2);
    assert.ok(projected.some(e => e.label === "Second collection"));
  }
  assert.equal(calendarEvents([{summary: prefix + "A", start: {date: "2026-09-14"}}],
    "calendar.waste", "UTC")[0].label, prefix + "A");
});

test("timezone changes discard projected stale dates and fence outstanding reads", async () => {
  const date = addDays(homeDate(new Date(), "UTC"), 2);
  let finish!: (value: unknown) => void;
  const hass = {connection: {}, config: {time_zone: "UTC"}, states: {
    "calendar.waste": {entity_id: "calendar.waste", state: "off", attributes: {}, last_updated: "first"}
  }, callApi: async () => [{summary: "BIO", start: {dateTime: date + "T00:30:00Z"}}]} as unknown as HomeAssistant;
  const controller = new ScheduleController(), cfg = validateConfig({type: "x", entity: "calendar.waste"});
  let snapshot!: ScheduleSnapshot;
  const publish = (v: ScheduleSnapshot) => {snapshot = v;};
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot.events[0].date, date);
  hass.states["calendar.waste"].last_updated = "pending";
  hass.callApi = () => new Promise(resolve => {finish = resolve;});
  const pending = controller.update(hass, cfg, publish);
  hass.config = {time_zone: "America/Los_Angeles"};
  hass.states["calendar.waste"].state = "unavailable";
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot.status, "unavailable");
  assert.deepEqual(snapshot.events, []);
  finish([{summary: "BIO", start: {dateTime: date + "T00:30:00Z"}}]);
  await pending;
  assert.equal(snapshot.status, "unavailable");
  hass.states["calendar.waste"].state = "off";
  await controller.update(hass, cfg, publish);
  assert.equal(snapshot.events[0].date, addDays(date, -1));
});

test("last-known empty schedules stay stale through outages and display edits", async () => {
  const controller = new ScheduleController();
  const hass = {connection: {}, config: {time_zone: "UTC"},
    states: {"sensor.waste": entity({upcoming: []})}} as HomeAssistant;
  let snapshot!: ScheduleSnapshot;
  const publish = (value: ScheduleSnapshot) => {snapshot = value;};
  await controller.update(hass, validateConfig({type: "x", entity: "sensor.waste"}), publish);
  assert.equal(snapshot.status, "empty");
  hass.states["sensor.waste"] = entity({}, "unavailable");
  await controller.update(hass, validateConfig({type: "x", entity: "sensor.waste", title: "New title", layout: "hero"}), publish);
  assert.equal(snapshot.status, "stale");
  assert.deepEqual(snapshot.events, []);
});

test("blank overrides are rejected without changing valid complete labels", () => {
  for (const name of ["", "  ", "\t\n"])
    assert.throws(() => validateConfig({type: "x", entity: "sensor.waste", overrides: [{type: "BIO", name}]}));
  const name = " Food scraps ";
  assert.equal(validateConfig({type: "x", entity: "sensor.waste", overrides: [{type: "BIO", name}]}).overrides![0].name, name);
});

 test("provider update times use the selected locale and home timezone", () => {
  const value = "2026-09-11T23:30:00-07:00";
  assert.equal(updateLabel(value, "en-GB", "Europe/Warsaw"), "12 Sept 2026, 08:30");
  assert.equal(updateLabel(value, "pl", "Europe/Warsaw"), "12 wrz 2026, 08:30");
  assert.equal(sensorEvents(entity({upcoming: [], last_update: "2026-09-11T23:30:00"})).fetchedAt, undefined);
});

test("multiple provider timestamps select the chronologically oldest offset value", async () => {
  const controller = new ScheduleController();
  const older = "2026-09-12T01:00:00+02:00";
  const hass = {connection: {}, config: {time_zone: "UTC"}, states: {
    "sensor.waste": entity({upcoming: [], last_update: "2026-09-11T23:30:00-07:00"}),
    "sensor.second": {...entity({upcoming: [], last_update: older}), entity_id: "sensor.second"}
  }} as HomeAssistant;
  let snapshot!: ScheduleSnapshot;
  await controller.update(hass, validateConfig({type: "x", entities: Object.keys(hass.states)}), value => {snapshot = value;});
  assert.equal(snapshot.fetchedAt, older);
});
