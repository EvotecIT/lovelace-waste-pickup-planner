import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { dateLabel } from "./dates.ts";
import { artworkColor } from "./schedule.ts";
import type { CollectionEvent, DateGroup } from "./types.ts";
export const chips = (events: CollectionEvent[]) =>
  html`<div class="chips">
    ${events.map((e) => html`<span class="chip" style=${styleMap({ "--waste-type-color": e.color })}><ha-icon aria-hidden="true" .icon=${e.icon ?? "mdi:trash-can-outline"}></ha-icon><span>${e.label}</span></span>`)}
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
export const groupRows = (groups: DateGroup[], today: string, locale: string) =>
  html`${groups.map((group) => {
    const d = new Date(`${group.date}T12:00:00Z`);
    return html`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" }).format(d)}<strong
          >${d.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${dateLabel(group.date, today, locale)}</div>
        ${chips(group.events)}
      </div>
    </div>`;
  })}`;
