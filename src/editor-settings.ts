import { sourceIds } from "./config.ts";
import type { CardConfig } from "./types.ts";

/** Show contextual defaults without making them explicit saved preferences. */
export function editorData(config: CardConfig): Record<string, unknown> {
  return { ...config, entities: sourceIds(config), layout: config.layout ?? "compact",
    appearance: config.appearance ?? "native", density: config.density ?? "comfortable",
    show_artwork: config.show_artwork ?? config.layout === "overview",
    show_source: config.show_source ?? sourceIds(config).length > 1 };
}

/** HA forms return their complete values, including untouched display defaults. */
export function changedSettings(data: Record<string, unknown>, values: Record<string, unknown>, names: string[]): Partial<CardConfig> {
  const patch = Object.fromEntries(names
    .filter(name => Object.prototype.hasOwnProperty.call(values, name) && JSON.stringify(data[name]) !== JSON.stringify(values[name]))
    .map(name => [name, values[name]])) as Partial<CardConfig>;
  if (Object.prototype.hasOwnProperty.call(patch, "entities")) patch.entity = undefined;
  return patch;
}
