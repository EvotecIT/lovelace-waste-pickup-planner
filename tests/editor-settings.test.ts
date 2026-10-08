import test from "node:test";
import assert from "node:assert/strict";
import { changedSettings, editorData } from "../src/editor-settings.ts";

const config = { type: "custom:waste-pickup-planner-card", entity: "sensor.waste" };
const appearance = ["appearance", "density", "show_artwork", "show_source", "show_manage_bins"];
const source = ["entities", "title", "layout"];
const edit = (current: typeof config, values: Record<string, unknown>, names: string[]) => {
  const data = editorData(current);
  return { ...current, ...changedSettings(data, { ...data, ...values }, names) };
};

test("density and layout edits preserve contextual artwork and source defaults", () => {
  const dense = edit(config, { density: "compact" }, appearance);
  assert.deepEqual(dense, { ...config, density: "compact" });
  const overview = edit(dense, { layout: "overview" }, source);
  assert.equal(editorData(overview).show_artwork, true);
  assert.equal(Object.hasOwn(overview, "show_artwork"), false);
  const multiple = { type: config.type, entities: ["sensor.waste", "sensor.other"] };
  const data = editorData(multiple);
  const modern = { ...multiple, ...changedSettings(data, { ...data, appearance: "modern" }, appearance) };
  const one = { ...modern, ...changedSettings(editorData(modern), { entities: ["sensor.waste"] }, source) };
  assert.equal(editorData(one).show_source, false);
  assert.equal(Object.hasOwn(one, "show_source"), false);
});

test("explicit appearance choices persist while deliberate toggles save", () => {
  const explicit = { ...config, show_artwork: false, show_source: true };
  const overview = edit(explicit, { layout: "overview" }, source);
  assert.equal(editorData(overview).show_artwork, false);
  assert.equal(editorData(overview).show_source, true);
  const toggled = edit(config, { show_artwork: true }, appearance);
  assert.equal(editorData(toggled).show_artwork, true);
  assert.equal(Object.hasOwn(toggled, "show_source"), false);
});

test("only an actual source selection replaces the legacy entity field", () => {
  const data = editorData(config);
  assert.deepEqual(changedSettings(data, { ...data, entities: ["sensor.waste"], title: "Garden" }, source), { title: "Garden" });
  assert.deepEqual(changedSettings(data, { ...data, entities: ["sensor.other"] }, source), { entities: ["sensor.other"], entity: undefined });
  assert.deepEqual(changedSettings(data, { ...data }, source), {});
});

test("advanced clearing and section boundaries do not persist other form values", () => {
  const data = editorData({ ...config, title: "Garden", locale: "pl", days_to_show: 45 });
  assert.deepEqual(changedSettings(data, { ...data, title: undefined, density: "compact" }, source), { title: undefined });
  assert.deepEqual(changedSettings(data, { ...data, locale: undefined, days_to_show: 30 }, ["locale", "days_to_show"]), { locale: undefined, days_to_show: 30 });
  assert.deepEqual(changedSettings(data, {}, source), {});
});
