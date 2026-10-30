import { sensorEvents } from "./adapters.ts";
import { sourceIds } from "./config.ts";
import type { CardConfig, CollectionEvent, HomeAssistant, TypeOverride } from "./types.ts";

/** Keep selected sources distinguishable even when their display names coincide. */
export function sourceName(hass: HomeAssistant | undefined, id: string, selected: string[] = [id]): string {
  const label = (source: string) => {
    const name = hass?.states[source]?.attributes.friendly_name;
    return typeof name === "string" && name.trim() ? name.trim() : source;
  };
  const name = label(id);
  return selected.some(other => other !== id && label(other) === name) ? `${name} · ${id}` : name;
}

/** Display ordering is locale-aware; dates and source IDs retain deterministic ties. */
function labelOrder(locale: string): (a: CollectionEvent, b: CollectionEvent) => number {
  let collator: Intl.Collator;
  try { collator = new Intl.Collator(locale); }
  catch { collator = new Intl.Collator("en"); } // The editor can contain an incomplete locale value.
  return (a, b) => collator.compare(a.label, b.label) || (a.sourceId < b.sourceId ? -1 : a.sourceId > b.sourceId ? 1 : 0);
}

export function collectionOrder(locale = "en"): (a: CollectionEvent, b: CollectionEvent) => number {
  const compare = labelOrder(locale);
  return (a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0) || compare(a, b);
}

type BinChoice = Pick<CollectionEvent, "sourceId" | "typeId" | "originalLabel" | "label">;

/** The provider's complete name remains part of identity when categories are shared. */
export const binKey = (event: BinChoice): string =>
  JSON.stringify([event.sourceId, event.typeId ?? event.originalLabel ?? event.label, event.originalLabel ?? event.label]);

/** Distinct choices keep a provider name or type ID when their displayed names collide. */
export function binName(event: BinChoice, choices: BinChoice[]): string {
  const collisions = choices.filter(other => other.sourceId === event.sourceId &&
    other.label === event.label && binKey(other) !== binKey(event));
  if (!collisions.length) return event.label;
  const original = event.originalLabel ?? event.label;
  const sameOriginal = collisions.some(other => (other.originalLabel ?? other.label) === original);
  const suffix = sameOriginal ? event.typeId ?? original : original;
  return suffix === event.label ? event.label : `${event.label} · ${suffix}`;
}

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

/**
 * Calendars carry only a name and date per pickup. Where the calendar's integration device also
 * exposes a structured schedule sensor, offer it in the calendar's place. Waste Collection Schedule
 * keeps sensors on the calendar's device, or with device pages on, on their own devices linked to it.
 */
function belongsTo(hass: HomeAssistant, entityId: string, device: string): boolean {
  const own = hass.entities?.[entityId]?.device_id;
  return Boolean(own) && (own === device || hass.devices?.[own!]?.via_device_id === device);
}

export function calendarSensorSwaps(hass: HomeAssistant, config: CardConfig): { calendar: string; sensor: string }[] {
  const selected = sourceIds(config);
  return selected.filter(id => id.startsWith("calendar.")).flatMap(calendar => {
    const device = hass.entities?.[calendar]?.device_id;
    if (!device) return [];
    // The combined sensor lists the most bin types; per-type sensors list one.
    const best = Object.values(hass.states)
      .filter(e => e.entity_id.startsWith("sensor.") && !["unavailable", "unknown"].includes(e.state) &&
        !selected.includes(e.entity_id) && belongsTo(hass, e.entity_id, device))
      .map(e => ({ id: e.entity_id, result: sensorEvents(e) }))
      // A sensor without pickups would leave the card empty in the calendar's place.
      .filter(({ result }) => result.supported && !result.invalid && result.events.length > 0)
      .map(({ id, result }) => ({ id, types: new Set(result.events.map(event => event.typeId ?? event.label)).size }))
      .sort((left, right) => right.types - left.types || left.id.localeCompare(right.id))[0];
    return best ? [{ calendar, sensor: best.id }] : [];
  });
}

/**
 * Replace a calendar with its sensor. Bin settings made for the calendar follow only when exactly one
 * sensor bin has the same name and no settings of its own; anything ambiguous stays for the user to review.
 */
export function swapCalendarSource(hass: HomeAssistant, config: CardConfig, calendar: string, sensor: string): Partial<CardConfig> {
  const bins = hass.states[sensor] ? sensorEvents(hass.states[sensor]).events : [];
  const overrides = config.overrides ?? [];
  return {
    entity: undefined,
    entities: sourceIds(config).map(id => id === calendar ? sensor : id),
    overrides: overrides.map(o => {
      if (o.source !== calendar || !o.label) return o;
      const matches = [...new Map(bins.filter(bin => bin.label === o.label).map(bin => [binKey(bin), bin])).values()];
      const type = matches[0]?.typeId ?? matches[0]?.label;
      if (matches.length !== 1 || overrides.some(other => other.source === sensor && other.label === o.label)) return o;
      return { ...o, type: type!, source: sensor };
    }),
  };
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
  // The editor inventory is alphabetical rather than ordered by next collection date.
  return [...bins.values()].sort(labelOrder(config.locale || hass.locale?.language || hass.language || "en"));
}

/** One next occurrence per source/bin, with display aliases excluded from identity. */
export function nextBins(events: CollectionEvent[], locale = "en"): CollectionEvent[] {
  const next = new Map<string, CollectionEvent>();
  for (const event of events) {
    const previous = next.get(binKey(event));
    if (!previous || event.date < previous.date) next.set(binKey(event), event);
  }
  return [...next.values()].sort(collectionOrder(locale));
}
