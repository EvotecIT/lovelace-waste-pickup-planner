import assert from "node:assert/strict";
import test from "node:test";
import { dateDetail, dateLabel, relativeDay, rowDateLabel, shortDate, spokenRowDate } from "../src/dates.ts";
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

test("screen readers hear the row's calendar date as well as its distance", () => {
  assert.equal(spokenRowDate("2026-11-01", today, "en-GB"), "Sunday 1 November · in 5 days");
  assert.equal(spokenRowDate("2026-10-28", today, "en-GB"), "Tomorrow · Wednesday 28 October");
});

test("strip day numbers follow the locale's calendar and digits", () => {
  const day = new Intl.DateTimeFormat("fa", { day: "numeric", timeZone: "UTC" }).format(new Date("2026-10-28T12:00:00Z"));
  assert.notEqual(day, "28");
  assert.equal(new Intl.DateTimeFormat("en", { day: "numeric", timeZone: "UTC" }).format(new Date("2026-10-28T12:00:00Z")), "28");
});

test("the bin icon takes whichever of dark or white has more contrast", () => {
  assert.equal(iconOn("#e1b950"), "#1f1f1f");
  assert.equal(iconOn("#fff"), "#1f1f1f");
  // Mid-tones where a fixed luminance threshold picked white with poor contrast.
  assert.equal(iconOn("#999999"), "#1f1f1f");
  assert.equal(iconOn("#aaaa00"), "#1f1f1f");
  assert.equal(iconOn("rgb(87, 155, 200)"), "#1f1f1f");
  assert.equal(iconOn("#74767b"), "#fff");
  assert.equal(iconOn("rgb(40, 80, 140)"), "#fff");
  assert.equal(iconOn("var(--brown)"), "#fff");
});
