import { sensorEvents } from "./adapters.ts";
import { sourceIds } from "./config.ts";
import type { CardConfig, CollectionEvent, HomeAssistant, TypeOverride } from "./types.ts";

/** The provider's complete name remains part of identity when categories are shared. */
export const binKey = (event: CollectionEvent): string =>
  JSON.stringify([event.sourceId, event.typeId ?? event.label, event.label]);

export function collectionOverride(event: CollectionEvent, overrides: TypeOverride[] = []): TypeOverride | undefined {
  const matches = overrides.filter(o => o.type === (event.typeId ?? event.label) &&
    (o.source === undefined || o.source === event.sourceId) &&
    (o.label === undefined || o.label === event.label));
  const specificity = (o: TypeOverride) => Number(o.source !== undefined) + Number(o.label !== undefined) * 2;
  // Specific settings win per field; preserve the first matching override at each scope.
  const scopes = new Map<number, TypeOverride>();
  for (const override of matches) {
    if (!scopes.has(specificity(override))) scopes.set(specificity(override), override);
  }
  return matches.length ? [...scopes.entries()]
    .sort(([a], [b]) => a - b)
    .reduce((result, [, o]) => ({ ...result, ...Object.fromEntries(Object.entries(o).filter(([, value]) => value !== undefined)) }), {} as TypeOverride) : undefined;
}

export function suggestedSources(hass: HomeAssistant, config: CardConfig): string[] {
  return [...new Set([...sourceIds(config), ...Object.values(hass.states)
    .filter(e => e.entity_id.startsWith("calendar.") || (e.entity_id.startsWith("sensor.") && (() => {
      const result = sensorEvents(e);
      return result.supported && !result.invalid;
    })()))
    .map(e => e.entity_id)])];
}

/** Discover editable bins from the selected structured sensors, before display overrides. */
export function availableBins(hass: HomeAssistant, config: CardConfig): CollectionEvent[] {
  const bins = new Map<string, CollectionEvent>();
  for (const id of sourceIds(config)) {
    const entity = hass.states[id];
    if (!entity || !id.startsWith("sensor.")) continue;
    for (const event of sensorEvents(entity).events) {
      if (!bins.has(binKey(event))) bins.set(binKey(event), event);
    }
  }
  return [...bins.values()].sort((a, b) => a.label.localeCompare(b.label) || a.sourceId.localeCompare(b.sourceId));
}
