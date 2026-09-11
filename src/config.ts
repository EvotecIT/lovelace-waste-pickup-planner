import type { CardConfig } from "./types.ts";
export const validColor = (value: unknown): value is string =>
  typeof value === "string" && /^#[\da-f]{6}$/i.test(value);
export const validIcon = (value: unknown): value is string =>
  typeof value === "string" && /^mdi:[a-z0-9-]+$/.test(value);
export function sourceIds(config: CardConfig): string[] {
  return [
    ...new Set(config.entities ?? (config.entity ? [config.entity] : [])),
  ];
}
export function validateConfig(value: CardConfig): CardConfig {
  if (!value || typeof value !== "object")
    throw new Error("Choose a waste sensor or calendar.");
  if (
    value.entities !== undefined &&
    (!Array.isArray(value.entities) ||
      value.entities.some((e) => typeof e !== "string"))
  )
    throw new Error("entities must be an array of entity IDs.");
  if (value.entity && value.entities)
    throw new Error("Use entity or entities, not both.");
  const ids = sourceIds(value);
  if (
    !ids.length ||
    ids.length > 12 ||
    ids.some((id) => !/^(sensor|calendar)\.[a-z0-9_]+$/.test(id))
  )
    throw new Error("Choose 1–12 sensor or calendar entities.");
  if (
    value.layout !== undefined &&
    !["compact", "hero", "schedule"].includes(value.layout)
  )
    throw new Error("Unknown layout.");
  for (const [key, max] of [
    ["days_to_show", 366],
    ["max_groups", 50],
  ] as const) {
    const n = value[key];
    if (n !== undefined && (!Number.isInteger(n) || n < 1 || n > max))
      throw new Error(`${key} must be 1–${max}.`);
  }
  for (const key of ["show_artwork", "show_updated"] as const)
    if (value[key] !== undefined && typeof value[key] !== "boolean")
      throw new Error(`${key} must be true or false.`);
  if (value.title !== undefined && typeof value.title !== "string")
    throw new Error("title must be text.");
  if (value.locale !== undefined) {
    if (typeof value.locale !== "string")
      throw new Error("locale must be a language code.");
    new Intl.DateTimeFormat(value.locale);
  }
  if (value.overrides !== undefined) {
    if (!Array.isArray(value.overrides) || value.overrides.length > 100)
      throw new Error("overrides must contain at most 100 types.");
    for (const item of value.overrides) {
      if (
        !item ||
        typeof item.type !== "string" ||
        !item.type.trim() ||
        (item.name !== undefined && typeof item.name !== "string") ||
        (item.hidden !== undefined && typeof item.hidden !== "boolean") ||
        (item.color !== undefined && !validColor(item.color)) ||
        (item.icon !== undefined && !validIcon(item.icon))
      )
        throw new Error(
          "Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.",
        );
    }
  }
  if (value.tap_action) {
    if (
      !["details", "more-info", "navigate", "none"].includes(
        value.tap_action.action,
      )
    )
      throw new Error("Unsupported tap action.");
    if (
      value.tap_action.action === "navigate" &&
      (typeof value.tap_action.navigation_path !== "string" ||
        !/^\/(?!\/)/.test(value.tap_action.navigation_path) ||
        /[\\\u0000-\u001f]/.test(value.tap_action.navigation_path))
    )
      throw new Error("Navigation requires a local path beginning with /.");
  }
  return {
    ...value,
    entities: value.entities ? [...value.entities] : undefined,
    layout: value.layout ?? "compact",
    days_to_show: value.days_to_show ?? 30,
    max_groups: value.max_groups ?? 5,
  };
}
