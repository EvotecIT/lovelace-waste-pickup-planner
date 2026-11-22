import type { HomeAssistant } from "./types.ts";

export function canonicalLocale(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  try {
    return Intl.getCanonicalLocales(value.trim().replaceAll("_", "-"))[0];
  } catch {
    return undefined;
  }
}

export function resolveLocale(override?: string, hass?: HomeAssistant): string {
  return canonicalLocale(override) ?? canonicalLocale(hass?.locale?.language) ??
    canonicalLocale(hass?.language) ?? "en";
}

export function localized<T>(locale: string, catalogs: ReadonlyMap<string, T>, fallback: T): T {
  return catalogs.get(locale.split("-")[0].toLowerCase()) ?? fallback;
}
