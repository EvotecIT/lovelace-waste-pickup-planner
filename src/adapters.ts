import { validColor, validIcon } from "./config.ts";
import { homeDate, validDate } from "./dates.ts";
import type { CollectionEvent, HassEntity } from "./types.ts";
const record = (v: unknown): Record<string, unknown> | undefined =>
  v !== null && typeof v === "object" && !Array.isArray(v)
    ? (v as Record<string, unknown>)
    : undefined;
const text = (v: unknown): string | undefined =>
  typeof v === "string" && v.trim() ? v : undefined;
function collection(
  row: Record<string, unknown>,
  entityId: string,
  inheritedDate?: string,
): CollectionEvent | undefined {
  const date = row.date ?? inheritedDate,
    label = text(row.type);
  if (!validDate(date) || !label) return;
  return {
    sourceId: entityId,
    entityId,
    date,
    label,
    typeId: text(row.type_id),
    icon: validIcon(row.icon) ? row.icon : undefined,
    color: validColor(row.color) ? row.color : undefined,
    colorSource: ["source", "customize", "default"].includes(
      String(row.color_source),
    )
      ? (row.color_source as CollectionEvent["colorSource"])
      : undefined,
  };
}
/** Exact generic v2/v3 and historical grouped-fork attribute contracts. No label splitting. */
export function sensorEvents(entity: HassEntity): {
  events: CollectionEvent[];
  supported: boolean;
  invalid: boolean;
  fetchedAt?: string;
} {
  const a = entity.attributes;
  const raw =
    "upcoming" in a
      ? a.upcoming
      : "upcoming_pickups" in a
        ? a.upcoming_pickups
        : "next_pickup" in a
          ? a.next_pickup === null
            ? []
            : [a.next_pickup]
          : undefined;
  if (!Array.isArray(raw))
    return { events: [], supported: false, invalid: raw !== undefined };
  const events: CollectionEvent[] = [];
  let invalid = raw.length > 2000;
  for (const value of raw.slice(0, 2000)) {
    if (events.length >= 2000) {
      invalid = true;
      break;
    }
    const row = record(value);
    if (!row || !validDate(row.date)) {
      invalid = true;
      continue;
    }
    if (Array.isArray(row.collections)) {
      if (row.collections.length > 100) invalid = true;
      for (const item of row.collections.slice(0, 100)) {
        const nested = record(item);
        const event = nested && collection(nested, entity.entity_id, row.date);
        if (event) events.push(event);
        else invalid = true;
      }
    } else if (Array.isArray(row.types)) {
      if (row.types.length > 100) invalid = true;
      for (const type of row.types.slice(0, 100)) {
        const event = collection(
          {
            ...row,
            type,
            color: undefined,
            color_source: undefined,
            type_id: undefined,
          },
          entity.entity_id,
        );
        if (event) events.push(event);
        else invalid = true;
      }
    } else {
      const event = collection(row, entity.entity_id);
      if (event) events.push(event);
      else invalid = true;
    }
  }
  const update =
    typeof a.last_update === "string" &&
    /^\d{4}-\d{2}-\d{2}T/.test(a.last_update) &&
    /(?:Z|[+-]\d{2}:\d{2})$/.test(a.last_update) &&
    Number.isFinite(Date.parse(a.last_update))
      ? a.last_update
      : undefined;
  return {
    events: events.slice(0, 2000),
    supported: true,
    invalid: invalid || events.length > 2000,
    fetchedAt: update,
  };
}
/** All-day dates remain literal; timed events are projected into the home's timezone. */
export function calendarEvents(
  raw: unknown,
  entityId: string,
  timeZone: string,
): CollectionEvent[] {
  if (!Array.isArray(raw) || raw.length > 10000)
    throw new Error("Invalid calendar response.");
  return raw.flatMap((value) => {
    const row = record(value),
      start = record(row?.start);
    const label = text(row?.summary);
    if (!start || !label) return [];
    let date: string | undefined;
    if (validDate(start.date)) date = start.date;
    else if (
      typeof start.dateTime === "string" &&
      /(?:Z|[+-]\d{2}:\d{2})$/.test(start.dateTime) &&
      Number.isFinite(Date.parse(start.dateTime))
    )
      date = homeDate(new Date(start.dateTime), timeZone);
    return date ? [{ sourceId: entityId, entityId, date, label }] : [];
  });
}
