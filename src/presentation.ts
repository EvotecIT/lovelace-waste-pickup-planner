import { html, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { rowDateLabel } from "./dates.ts";
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

/** Dark or white, whichever reads better on the bin's colour; white when it can't be measured. */
export function iconOn(color: string): string {
  const rgb = channels(color);
  if (!rgb) return "#fff";
  const [r, g, b] = rgb.map(value => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.4 ? "#1f1f1f" : "#fff";
}

/**
 * People know their bins by colour, so each chip leads with a filled circle in the
 * bin's own colour. Only a colour from the source or the user's customisation counts;
 * others stay neutral rather than guessing from the waste name.
 */
export const chips = (events: CollectionEvent[], locale: string, limit = 6) =>
  html`<div class="chips">
    ${events.slice(0, limit).map((e) => {
      const color = artworkColor(e);
      return html`<span class="chip"><span class=${`swatch${color ? "" : " neutral"}`} aria-hidden="true"
        style=${styleMap(color ? { "--waste-type-color": color, "--waste-icon-color": iconOn(color) } : {})}><ha-icon
        .icon=${e.icon ?? "mdi:trash-can-outline"}></ha-icon></span><span>${e.label}</span></span>`;
    })}
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
export const groupRows = (groups: DateGroup[], today: string, locale: string, chipLimit = 6) =>
  html`${groups.map((group) => {
    const d = new Date(`${group.date}T12:00:00Z`);
    return html`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" }).format(d)}<strong
          >${new Intl.DateTimeFormat(locale, { day: "numeric", timeZone: "UTC" }).format(d)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${rowDateLabel(group.date, today, locale)}</div>
        ${chips(group.events, locale, chipLimit)}
      </div>
    </div>`;
  })}`;
