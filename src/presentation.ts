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
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "narrow", timeZone: "UTC" });
  return html`<div class="strip" aria-hidden="true">
    ${Array.from({ length: days }, (_, index) => {
      const date = addDays(today, index);
      const items = byDate.get(date) ?? [];
      const at = new Date(`${date}T12:00:00Z`);
      return html`<div class=${`strip-day${index === 0 ? " today" : ""}${items.length ? " has-pickup" : ""}${[0, 6].includes(at.getUTCDay()) ? " weekend" : ""}`}>
        <span class="strip-weekday">${weekday.format(at)}</span>
        <span class="strip-date">${at.getUTCDate()}</span>
        <span class="strip-dots">${items.slice(0, 3).map(e => {
          const color = artworkColor(e);
          return html`<span class=${`strip-dot${color ? "" : " neutral"}`} style=${styleMap(color ? { "--waste-type-color": color } : {})}></span>`;
        })}</span>
      </div>`;
    })}
  </div>`;
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
