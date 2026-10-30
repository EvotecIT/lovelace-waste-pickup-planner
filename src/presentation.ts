import { html, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { addDays, dateDetail, dateLabel, rowDateLabel, shortDate, spokenRowDate, type CollectionMoment } from "./dates.ts";
import { strings } from "./strings.ts";
import { artworkColor } from "./schedule.ts";
import type { CollectionEvent, DateGroup } from "./types.ts";

/** Hex or rgb() colours as [r, g, b]; anything else (a name, a variable) is unknown. */
function channels(color: string): [number, number, number] | undefined {
  const hex = /^#([\da-f]{3}|[\da-f]{6})$/i.exec(color.trim())?.[1];
  if (hex) {
    const full = hex.length === 3 ? [...hex].map(c => c + c).join("") : hex;
    return [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16)) as [number, number, number];
  }
  const rgb = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(color.trim());
  return rgb ? [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])] : undefined;
}

const luminance = ([red, green, blue]: [number, number, number]): number => {
  const [r, g, b] = [red, green, blue].map(value => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const DARK = "#1f1f1f";
const DARK_LUMINANCE = luminance([0x1f, 0x1f, 0x1f]);

/** Dark or white, whichever has the higher contrast on the bin's colour; white when it can't be measured. */
export function iconOn(color: string): string {
  const rgb = channels(color);
  if (!rgb) return "#fff";
  const background = luminance(rgb);
  const onWhite = 1.05 / (background + 0.05);
  const onDark = (background + 0.05) / (DARK_LUMINANCE + 0.05);
  return onDark > onWhite ? DARK : "#fff";
}

/**
 * People know their bins by colour, so each chip leads with a filled circle in the
 * bin's own colour. Only a colour from the source or the user's customisation counts;
 * others stay neutral rather than guessing from the waste name.
 */
export const swatch = (e: CollectionEvent) => {
  const color = artworkColor(e);
  return html`<span class=${`swatch${color ? "" : " neutral"}`} aria-hidden="true"
    style=${styleMap(color ? { "--waste-type-color": color, "--waste-icon-color": iconOn(color) } : {})}><ha-icon
    .icon=${e.icon ?? "mdi:trash-can-outline"}></ha-icon></span>`;
};

export const chips = (events: CollectionEvent[], locale: string, limit = 6) =>
  html`<div class="chips">
    ${events.slice(0, limit).map((e) => html`<span class="chip">${swatch(e)}<span>${e.label}</span></span>`)}
    ${events.length > limit ? html`<span class="chip overflow">+${new Intl.NumberFormat(locale).format(events.length - limit)} ${strings(locale).more}</span>` : nothing}
  </div>`;
export const bins = (events: CollectionEvent[]) =>
  html`<div class="bins" aria-hidden="true">
    ${events.slice(0, 3).map(
      (e) =>
        html`<div
          class="bin"
          style=${styleMap({ "--waste-type-color": artworkColor(e) })}
        >
          <svg viewBox="0 0 52 88" fill="none">
            <path d="M9 22h34l-4 55H14z" fill="currentColor" />
            <path d="M14 25h6l2 48h-5z" fill="white" opacity=".16" />
            <path d="M39 25h-4l-2 48h3z" fill="black" opacity=".14" />
            <path d="M7 17h38v7H7zM18 11h17v5H18z" fill="currentColor" />
            <path d="M7 17h38v2H7z" fill="white" opacity=".22" />
            <circle cx="16" cy="80" r="4" fill="#42464b" />
            <circle cx="37" cy="80" r="4" fill="#42464b" />
            <path
              d="M22 35v26M29 35v26"
              stroke="white"
              stroke-opacity=".15"
              stroke-width="2"
            />
          </svg>
        </div>`,
    )}
  </div>`;
/**
 * The next collection, phrased for the moment: "Put out tonight" from the evening
 * before, otherwise the date with the one fact it doesn't already say.
 */
export const nextCollection = (options: {
  group: DateGroup; today: string; locale: string; moment: CollectionMoment;
  artwork: boolean; className?: string;
}) => {
  const { group, today, locale, moment } = options;
  const t = strings(locale);
  const tonight = moment === "tonight";
  return html`<div class=${`primary${options.className ? ` ${options.className}` : ""}${tonight ? " tonight" : ""}`}>
    <div class="copy">
      <div class="eyebrow">${tonight ? html`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>` : nothing}${t.next}</div>
      <span class="date">${tonight ? t.putOutTonight : dateLabel(group.date, today, locale)}</span>${chips(group.events, locale)}
      <p class="full-date">${tonight ? `${t.collectedTomorrow} · ${shortDate(group.date, locale)}` : dateDetail(group.date, today, locale)}</p>
    </div>
    ${options.artwork ? bins(group.events) : nothing}
  </div>`;
};

/**
 * Fourteen days at a glance, so the rhythm shows (paper every other Tuesday). Each day
 * shows a dot per bin in the bin's own colour. The schedule rows carry the same dates
 * as text, so the strip is decorative for assistive technology.
 */
export const strip = (events: CollectionEvent[], today: string, locale: string, days = 14) => {
  const byDate = new Map<string, CollectionEvent[]>();
  for (const event of events) byDate.set(event.date, [...(byDate.get(event.date) ?? []), event]);
  // The locale's own calendar and digits, matching the dates in the schedule rows.
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "narrow", timeZone: "UTC" });
  const dayNumber = new Intl.DateTimeFormat(locale, { day: "numeric", timeZone: "UTC" });
  const shown = 3;
  // max_groups can leave strip dates without a schedule row, so the strip carries its
  // own text for screen readers: every pickup day it marks, with the bins.
  const spoken = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
  const pickups = Array.from({ length: days }, (_, index) => addDays(today, index)).filter(date => byDate.has(date));
  return html`${pickups.length ? html`<div class="sr-only"><p>${strings(locale).comingDays}</p><ul>${pickups.map(date =>
    html`<li>${spoken.format(new Date(`${date}T12:00:00Z`))}: ${byDate.get(date)!.map(e => e.label).join(", ")}</li>`)}</ul></div>` : nothing}
  <div class="strip" aria-hidden="true">
    ${Array.from({ length: days }, (_, index) => {
      const date = addDays(today, index);
      const items = byDate.get(date) ?? [];
      const at = new Date(`${date}T12:00:00Z`);
      // Dots stack so a day stays one narrow column; more than three bins show "+N".
      const extra = items.length - shown;
      return html`<div class=${`strip-day${index === 0 ? " today" : ""}${items.length ? " has-pickup" : ""}`}>
        <span class="strip-weekday">${weekday.format(at)}</span>
        <span class="strip-date">${dayNumber.format(at)}</span>
        <span class="strip-dots">${items.slice(0, extra > 0 ? shown - 1 : shown).map(e => {
          const color = artworkColor(e);
          return html`<span class=${`strip-dot${color ? "" : " neutral"}`} style=${styleMap(color ? { "--waste-type-color": color } : {})}></span>`;
        })}${extra > 0 ? html`<span class="strip-more">+${new Intl.NumberFormat(locale).format(extra + 1)}</span>` : nothing}</span>
      </div>`;
    })}
  </div>`;
};

/**
 * Read from across the room: the day in large type, each bin as a tile in its own
 * colour, and the next few pickups underneath in smaller type.
 */
export const wall = (options: {
  group: DateGroup; later: DateGroup[]; today: string; locale: string; moment: CollectionMoment;
}) => {
  const { group, later, today, locale } = options;
  const t = strings(locale);
  const tonight = options.moment === "tonight";
  const shown = group.events.length > 6 ? 5 : 6;
  return html`<div class=${`wall-now${tonight ? " tonight" : ""}`}>
      <div class="eyebrow">${tonight ? html`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>` : nothing}${t.next}</div>
      <span class="wall-date">${tonight ? t.putOutTonight : dateLabel(group.date, today, locale)}</span>
      <p class="full-date">${tonight ? `${t.collectedTomorrow} · ${shortDate(group.date, locale)}` : dateDetail(group.date, today, locale)}</p>
    </div>
    <ul class="wall-bins">
      ${group.events.slice(0, shown).map(e => {
        const color = artworkColor(e);
        return html`<li class=${`wall-bin${color ? "" : " neutral"}`} style=${styleMap(color ? { "--waste-type-color": color } : {})}>${swatch(e)}<span>${e.label}</span></li>`;
      })}
      ${group.events.length > shown ? html`<li class="wall-bin neutral overflow">+${new Intl.NumberFormat(locale).format(group.events.length - shown)} ${t.more}</li>` : nothing}
    </ul>
    ${later.length ? html`<ol class="wall-later">${later.map(next => html`<li>
      <span class="sr-only">${spokenRowDate(next.date, today, locale)}</span>
      <span class="wall-later-date" aria-hidden="true">${rowDateLabel(next.date, today, locale)}</span>
      ${chips(next.events, locale, 3)}
    </li>`)}</ol>` : nothing}`;
};

export const groupRows =(groups: DateGroup[], today: string, locale: string, chipLimit = 6) =>
  html`${groups.map((group) => {
    const d = new Date(`${group.date}T12:00:00Z`);
    return html`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" }).format(d)}<strong
          >${new Intl.DateTimeFormat(locale, { day: "numeric", timeZone: "UTC" }).format(d)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date"><span class="sr-only">${spokenRowDate(group.date, today, locale)}</span><span
          aria-hidden="true">${rowDateLabel(group.date, today, locale)}</span></div>
        ${chips(group.events, locale, chipLimit)}
      </div>
    </div>`;
  })}`;
