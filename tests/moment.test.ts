import assert from "node:assert/strict";
import test from "node:test";
import { collectionMoment, homeHour } from "../src/dates.ts";
import { validateConfig } from "../src/config.ts";

const today = "2026-10-27";

test("tomorrow's bins go out tonight from the evening hour", () => {
  assert.equal(collectionMoment("2026-10-28", today, 17), "upcoming");
  assert.equal(collectionMoment("2026-10-28", today, 18), "tonight");
  assert.equal(collectionMoment("2026-10-28", today, 23), "tonight");
  assert.equal(collectionMoment("2026-10-28", today, 20, 21), "upcoming");
  assert.equal(collectionMoment("2026-10-28", today, 0, 0), "tonight");
});

test("a collection today stays today, and later ones are upcoming", () => {
  assert.equal(collectionMoment(today, today, 7), "today");
  assert.equal(collectionMoment(today, today, 20), "today");
  assert.equal(collectionMoment("2026-10-30", today, 20), "upcoming");
});

test("the hour comes from the home clock, not the browser's", () => {
  const instant = new Date("2026-10-27T17:30:00Z");
  assert.equal(homeHour(instant, "Europe/Warsaw"), 18);
  assert.equal(homeHour(instant, "America/New_York"), 13);
  assert.equal(homeHour(new Date("2026-10-27T23:30:00Z"), "Europe/Warsaw"), 0);
});

test("evening_hour must be a whole hour from 0 to 23", () => {
  const base = { type: "custom:waste-pickup-planner-card", entity: "sensor.waste" };
  assert.equal(validateConfig({ ...base, evening_hour: 19 }).evening_hour, 19);
  for (const evening_hour of [-1, 24, 18.5]) assert.throws(() => validateConfig({ ...base, evening_hour }));
  assert.throws(() => validateConfig({ ...base, show_strip: "yes" as unknown as boolean }));
});
