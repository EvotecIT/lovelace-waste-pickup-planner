import assert from "node:assert/strict";
import test from "node:test";
import { validateConfig } from "../src/config.ts";
import { dateLabel } from "../src/dates.ts";
import { editorStrings } from "../src/editor-strings.ts";
import { resolveLocale } from "../src/locale.ts";
import { sourceMessage, strings } from "../src/strings.ts";

const config = { type: "custom:waste-pickup-planner-card", entity: "sensor.waste" };
const hass = { config: { time_zone: "Europe/Amsterdam" }, states: {}, language: "pl-PL" };

test("Dutch Home Assistant locales use Dutch labels in the card and editor", () => {
  for (const language of ["nl", "nl-NL", "nl-BE"]) {
    const locale = resolveLocale(undefined, { ...hass, locale: { language } });
    assert.equal(strings(locale).next, "Volgende inzameling");
    assert.equal(dateLabel("2026-11-23", "2026-11-22", locale), "Morgen");
    assert.equal(editorStrings(locale).source, "Bron en indeling");
    assert.match(sourceMessage({ source: "sensor.waste", reason: "sourceUnavailable" }, locale), /^sensor\.waste: Bron niet beschikbaar/);
  }
});

test("locale overrides and fallback preserve language and regional formatting", () => {
  const { locale } = validateConfig({ ...config, locale: " NL_be " });
  assert.equal(resolveLocale(locale, hass), "nl-BE");
  assert.equal(resolveLocale(undefined, { ...hass, locale: { language: "bad--tag" } }), "pl-PL");
  assert.equal(strings(resolveLocale(undefined, hass)).next, "Najbliższy odbiór");
  assert.equal(resolveLocale(undefined), "en");
  assert.equal(resolveLocale("fa-IR", hass), "fa-IR");
  assert.equal(strings("fa-IR").next, "Next collection");
  assert.throws(() => validateConfig({ ...config, locale: "nl--NL" }), /locale must be a language code/);
});
