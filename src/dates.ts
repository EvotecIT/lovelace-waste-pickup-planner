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

/** Format an absolute provider timestamp independently of the viewer timezone. */
export function updateLabel(value: string, locale: string, timeZone: string): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium", timeStyle: "short", timeZone,
  }).format(new Date(value));
}
