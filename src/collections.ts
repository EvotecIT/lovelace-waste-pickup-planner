import { sensorEvents } from "./adapters.ts";
import { sourceIds } from "./config.ts";
import type { CardConfig, CollectionEvent, HomeAssistant, TypeOverride } from "./types.ts";

/** The provider's complete name remains part of identity when categories are shared. */
export const binKey = (event: CollectionEvent): string =>
  JSON.stringify([event.sourceId, event.typeId ?? event.originalLabel ?? event.label, event.originalLabel ?? event.label]);

export const matchesCollection = (event: CollectionEvent, override: TypeOverride): boolean =>
  override.type === (event.typeId ?? event.originalLabel ?? event.label) &&
  (override.source === undefined || override.source === event.sourceId) &&
  (override.label === undefined || override.label === (event.originalLabel ?? event.label));

const specificity = (override: TypeOverride) => Number(override.source !== undefined) + Number(override.label !== undefined) * 2;

function mergeOverrides(matches: TypeOverride[]): TypeOverride | undefined {
  // Specific settings win per field; preserve the first matching override at each scope.
  const scopes = new Map<number, TypeOverride>();
  for (const override of matches) {
    if (!scopes.has(specificity(override))) scopes.set(specificity(override), override);
  }
  return matches.length ? [...scopes.entries()]
    .sort(([a], [b]) => a - b)
    .reduce((result, [, o]) => ({ ...result, ...Object.fromEntries(Object.entries(o).filter(([, value]) => value !== undefined)) }), {} as TypeOverride) : undefined;
}

export function collectionOverride(event: CollectionEvent, overrides: TypeOverride[] = []): TypeOverride | undefined {
  return mergeOverrides(overrides.filter(o => matchesCollection(event, o)));
}

/** An editor row inherits only scopes that apply to every collection it matches. */
export function overrideInheritance(override: TypeOverride, overrides: TypeOverride[] = []): TypeOverride | undefined {
  return mergeOverrides(overrides.filter(o => o.type === override.type &&
    specificity(o) < specificity(override) &&
    (o.source === undefined || o.source === override.source) &&
    (o.label === undefined || o.label === override.label)));
}

export function suggestedSources(hass: HomeAssistant, config: CardConfig): string[] {
  return [...new Set([...sourceIds(config), ...Object.values(hass.states)
    .filter(e => e.entity_id.startsWith("calendar.") || (e.entity_id.startsWith("sensor.") && (() => {
      const result = sensorEvents(e);
      return result.supported && !result.invalid;
    })()))
    .map(e => e.entity_id)])];
}

/** Discover bins before overrides; calendar entries come from the shared authenticated controller. */
export function availableBins(hass: HomeAssistant, config: CardConfig, calendarEntries: CollectionEvent[] = []): CollectionEvent[] {
  const bins = new Map<string, CollectionEvent>();
  for (const id of sourceIds(config)) {
    const entity = hass.states[id];
    if (!entity || !id.startsWith("sensor.")) continue;
    for (const event of sensorEvents(entity).events) {
      if (!bins.has(binKey(event))) bins.set(binKey(event), event);
    }
  }
  const selected = new Set(sourceIds(config));
  for (const event of calendarEntries) {
    if (event.sourceId.startsWith("calendar.") && selected.has(event.sourceId) && !bins.has(binKey(event)))
      bins.set(binKey(event), event);
  }
  return [...bins.values()].sort((a, b) => a.label.localeCompare(b.label) || a.sourceId.localeCompare(b.sourceId));
}

/** One next occurrence per source/bin, with display aliases excluded from identity. */
export function nextBins(events: CollectionEvent[]): CollectionEvent[] {
  const next = new Map<string, CollectionEvent>();
  for (const event of events) {
    const previous = next.get(binKey(event));
    if (!previous || event.date < previous.date) next.set(binKey(event), event);
  }
  return [...next.values()].sort((a, b) => a.date.localeCompare(b.date) || a.label.localeCompare(b.label) || a.sourceId.localeCompare(b.sourceId));
}
