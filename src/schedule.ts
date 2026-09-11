import type { CardConfig, CollectionEvent, DateGroup } from "./types.ts";
export function projectEvents(
  events: CollectionEvent[],
  config: CardConfig,
  start: string,
  end: string,
): CollectionEvent[] {
  const unique = new Map<string, CollectionEvent>();
  for (const event of events) {
    if (event.date < start || event.date >= end) continue;
    const override = config.overrides?.find(
      (o) => o.type === (event.typeId ?? event.label),
    );
    if (override?.hidden) continue;
    const key = JSON.stringify([
      event.sourceId,
      event.date,
      event.typeId ?? event.label,
    ]);
    if (!unique.has(key))
      unique.set(key, {
        ...event,
        label: override?.name ?? event.label,
        color: override?.color ?? event.color,
        colorSource: override?.color ? "customize" : event.colorSource,
        icon: override?.icon ?? event.icon,
      });
  }
  return [...unique.values()].sort(
    (a, b) => a.date.localeCompare(b.date) || a.label.localeCompare(b.label),
  );
}
export function groupEvents(events: CollectionEvent[]): DateGroup[] {
  const groups = new Map<string, CollectionEvent[]>();
  for (const event of events) {
    const group = groups.get(event.date) ?? [];
    group.push(event);
    groups.set(event.date, group);
  }
  return [...groups].map(([date, entries]) => ({ date, events: entries }));
}
export function artworkColor(event: CollectionEvent): string | undefined {
  return event.colorSource === "source" || event.colorSource === "customize"
    ? event.color
    : undefined;
}
