import test from "node:test";
import assert from "node:assert/strict";
import { availableBins, suggestedSources } from "../src/collections.ts";
import { sensorEvents } from "../src/adapters.ts";
import { validateConfig } from "../src/config.ts";
import { projectEvents } from "../src/schedule.ts";
import type { HomeAssistant } from "../src/types.ts";

const config = { type: "custom:waste-pickup-planner-card", entity: "sensor.waste" };
const rows = [
  { date: "2026-10-12", type: "Small bio", type_id: "organic", color: "#123456", color_source: "source" },
  { date: "2026-10-12", type: "Large bio", type_id: "organic", color: "#FF00FF", color_source: "customize" },
];
const entity = { entity_id: "sensor.waste", state: "ready", attributes: { upcoming: rows } };
const events = sensorEvents(entity).events;
const project = (overrides = config as typeof config & { overrides?: import("../src/types.ts").TypeOverride[] }) =>
  projectEvents([...events, events[0]], overrides, "2026-10-01", "2026-11-01");

test("distinct provider bins in one category survive while repeated records deduplicate", () => {
  assert.deepEqual(project().map(e => [e.label, e.color]), [["Large bio", "#FF00FF"], ["Small bio", "#123456"]]);
});

test("local bin appearance is source-scoped and resetting color restores integration metadata", () => {
  const override = { type: "organic", source: "sensor.waste", label: "Small bio", color: "#ABCDEF", name: "Kitchen" };
  const projected = project({ ...config, overrides: [override] });
  assert.equal(projected.find(e => e.label === "Kitchen")?.color, "#ABCDEF");
  assert.equal(projected.find(e => e.label === "Large bio")?.color, "#FF00FF");
  const other = projectEvents([{ ...events[0], sourceId: "sensor.other" }], { ...config, overrides: [override] }, "2026-10-01", "2026-11-01");
  assert.equal(other[0].label, "Small bio");
  const reset = project({ ...config, overrides: [{ ...override, color: undefined }] });
  assert.equal(reset.find(e => e.label === "Kitchen")?.color, "#123456");
  assert.equal(reset.find(e => e.label === "Kitchen")?.colorSource, "source");
});

test("specific bin fields take precedence while existing category settings still apply", () => {
  const projected = project({ ...config, overrides: [
    { type: "organic", color: "#111111", icon: "mdi:leaf" },
    { type: "organic", source: "sensor.waste", label: "Small bio", color: "#222222" },
  ] });
  assert.equal(projected.find(e => e.label === "Small bio")?.color, "#222222");
  assert.equal(projected.find(e => e.label === "Small bio")?.icon, "mdi:leaf");
  assert.equal(projected.find(e => e.label === "Large bio")?.color, "#111111");
  const duplicate = project({ ...config, overrides: [{ type: "organic", name: "Bio" }, { type: "organic", hidden: true }] });
  assert.equal(duplicate.length, 2);
  assert.ok(duplicate.every(e => e.label === "Bio"));
});

test("editor discovers complete bin names and suggests structured sources without losing saved choices", () => {
  const hass: HomeAssistant = { connection: {}, config: { time_zone: "UTC" }, callApi: async <T>() => [] as T,
    states: {
      "sensor.waste": entity,
      "sensor.empty": { entity_id: "sensor.empty", state: "ready", attributes: { upcoming: [] } },
      "sensor.temperature": { entity_id: "sensor.temperature", state: "20", attributes: {} },
      "calendar.waste": { entity_id: "calendar.waste", state: "off", attributes: {} },
    } };
  assert.deepEqual(availableBins(hass, config).map(e => e.label), ["Large bio", "Small bio"]);
  assert.deepEqual(suggestedSources(hass, config), ["sensor.waste", "sensor.empty", "calendar.waste"]);
  assert.ok(suggestedSources(hass, { ...config, entity: "sensor.temperature" }).includes("sensor.temperature"));
});

test("new override scope and management settings reject invalid configuration", () => {
  assert.throws(() => validateConfig({ ...config, overrides: [{ type: "organic", source: "https://example.com" }] }));
  assert.throws(() => validateConfig({ ...config, overrides: [{ type: "organic", label: " " }] }));
  assert.throws(() => validateConfig({ ...config, show_manage_bins: "true" as unknown as boolean }));
});
