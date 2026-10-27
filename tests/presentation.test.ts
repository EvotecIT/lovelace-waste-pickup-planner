import assert from "node:assert/strict";
import test from "node:test";
import { dateDetail, dateLabel, relativeDay, rowDateLabel, shortDate } from "../src/dates.ts";
import { iconOn } from "../src/presentation.ts";

const today = "2026-10-27";

test("the line under the big date adds what the big date doesn't say", () => {
  assert.equal(dateLabel("2026-10-28", today, "en"), "Tomorrow");
  assert.equal(dateDetail("2026-10-28", today, "en"), shortDate("2026-10-28", "en"));
  assert.equal(shortDate("2026-10-28", "en-GB"), "Wed 28 Oct");
  assert.match(dateLabel("2026-11-01", today, "en"), /Sunday/);
  assert.equal(dateDetail("2026-11-01", today, "en"), "In 5 days");
  assert.equal(dateDetail("2026-11-01", today, "pl"), "Za 5 dni");
});

test("schedule rows name the weekday and distance beside the day block", () => {
  assert.equal(rowDateLabel("2026-10-27", today, "en"), "Today");
  assert.equal(rowDateLabel("2026-10-28", today, "en"), "Tomorrow");
  assert.equal(rowDateLabel("2026-11-01", today, "en"), "Sunday · in 5 days");
  assert.equal(relativeDay("2026-11-08", today, "en"), "in 12 days");
});

test("the bin icon is dark on light colours and white on dark ones", () => {
  assert.equal(iconOn("#e1b950"), "#1f1f1f");
  assert.equal(iconOn("#fff"), "#1f1f1f");
  assert.equal(iconOn("#74767b"), "#fff");
  assert.equal(iconOn("rgb(87, 155, 200)"), "#fff");
  assert.equal(iconOn("var(--brown)"), "#fff");
});
