export function validDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
    return false;
  const date = new Date(`${value}T12:00:00Z`);
  return (
    Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
  );
}
export function homeDate(now: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (key: string) => parts.find((p) => p.type === key)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}
/** The hour (0–23) on the home clock. */
export function homeHour(now: Date, timeZone: string): number {
  const hour = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "numeric", hourCycle: "h23" })
    .formatToParts(now).find(p => p.type === "hour")!.value;
  return Number(hour) % 24;
}

export type CollectionMoment = "today" | "tonight" | "upcoming";

/**
 * What the next collection asks of you now: it is today, or it is tomorrow and the
 * evening has started (the bins go out tonight), or it is further away.
 */
export function collectionMoment(next: string, today: string, hour: number, eveningHour = 18): CollectionMoment {
  const distance = daysBetween(today, next);
  if (distance === 0) return "today";
  return distance === 1 && hour >= eveningHour ? "tonight" : "upcoming";
}

/**
 * The collection the card leads with. From the evening hour, tomorrow's bins come
 * first even when there was a collection today: today's is over, tonight's isn't.
 */
export function headline<T extends { date: string }>(
  groups: readonly T[], today: string, hour: number, eveningHour = 18,
): { group: T; index: number; moment: CollectionMoment } | undefined {
  if (!groups.length) return undefined;
  if (hour >= eveningHour) {
    const index = groups.findIndex(group => daysBetween(today, group.date) === 1);
    if (index >= 0) return { group: groups[index], index, moment: "tonight" };
  }
  return { group: groups[0], index: 0, moment: collectionMoment(groups[0].date, today, hour, eveningHour) };
}

export function addDays(date: string, days: number): string {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}
export function daysBetween(start: string, end: string): number {
  return Math.round(
    (Date.parse(`${end}T12:00:00Z`) - Date.parse(`${start}T12:00:00Z`)) /
      86400000,
  );
}
/** Sentence case for a label that starts a line; month names keep their own case. */
const sentence = (text: string, locale: string): string =>
  text.charAt(0).toLocaleUpperCase(locale) + text.slice(1);

export function dateLabel(date: string, today: string, locale: string): string {
  const distance = daysBetween(today, date);
  return sentence(distance <= 1 && distance >= 0
    ? new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(
        distance,
        "day",
      )
    : new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "short",
        timeZone: "UTC",
      }).format(new Date(`${date}T12:00:00Z`)), locale);
}

/** "today", "tomorrow" or "in 5 days" in the card's language. */
export function relativeDay(date: string, today: string, locale: string): string {
  return new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(daysBetween(today, date), "day");
}

/** "Wed 16 Oct": the calendar date in short form. */
export function shortDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "short", day: "numeric", month: "short", timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

/**
 * The line under the big date adds the fact the big date doesn't say, so a date is
 * never said twice: "Wed 16 Oct" under "Tomorrow", "in 5 days" under "Sunday, 1 Nov".
 */
export function dateDetail(date: string, today: string, locale: string): string {
  const distance = daysBetween(today, date);
  return sentence(distance >= 0 && distance <= 1 ? shortDate(date, locale) : relativeDay(date, today, locale), locale);
}

/** A schedule row already shows the month and day, so it adds the weekday and distance. */
export function rowDateLabel(date: string, today: string, locale: string): string {
  const distance = daysBetween(today, date);
  if (distance >= 0 && distance <= 1) return sentence(relativeDay(date, today, locale), locale);
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "long", timeZone: "UTC" })
    .format(new Date(`${date}T12:00:00Z`));
  return sentence(`${weekday} · ${relativeDay(date, today, locale)}`, locale);
}

/**
 * What a screen reader hears for a schedule row: the calendar date the day block shows
 * visually, plus the distance. "Sunday, 1 November · in 5 days" or "Tomorrow · Wednesday, 28 October".
 */
export function spokenRowDate(date: string, today: string, locale: string): string {
  const full = new Intl.DateTimeFormat(locale, {
    weekday: "long", day: "numeric", month: "long", timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
  const distance = daysBetween(today, date);
  return distance >= 0 && distance <= 1
    ? `${sentence(relativeDay(date, today, locale), locale)} · ${full}`
    : `${sentence(full, locale)} · ${relativeDay(date, today, locale)}`;
}

/** Format an absolute provider timestamp independently of the viewer timezone. */
export function updateLabel(value: string, locale: string, timeZone: string): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium", timeStyle: "short", timeZone,
  }).format(new Date(value));
}
