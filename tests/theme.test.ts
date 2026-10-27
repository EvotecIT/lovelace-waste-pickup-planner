import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const styles = readFileSync(new URL("../src/styles.ts", import.meta.url), "utf8");

test("card surface follows Home Assistant theme variables", () => {
  assert.match(styles, /font-family: var\(--ha-font-family-body/);
  assert.doesNotMatch(styles, /--ha-font-family,/);
  assert.match(styles, /border-radius: var\(--ha-card-border-radius, var\(--ha-border-radius-lg, 12px\)\)/);
});

test("the modal dialog stays opaque on see-through card themes", () => {
  const dialog = styles.slice(styles.indexOf("  dialog {"), styles.indexOf("  dialog::backdrop"));
  assert.match(dialog, /background: var\(--ha-dialog-surface-background/);
  assert.doesNotMatch(dialog, /--ha-card-background/);
});