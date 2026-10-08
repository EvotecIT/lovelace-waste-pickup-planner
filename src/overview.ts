import { html, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { binKey, nextBins, sourceName } from "./collections.ts";
import { dateLabel } from "./dates.ts";
import { artworkColor } from "./schedule.ts";
import { bins, chips, groupRows } from "./presentation.ts";
import { strings } from "./strings.ts";
import type { CollectionEvent, DateGroup, HomeAssistant } from "./types.ts";

/** The overview uses projected records and stable bin identity; it owns no source parsing. */
export function overview(options: {
  events: CollectionEvent[]; groups: DateGroup[]; today: string; locale: string;
  artwork: boolean; showSource: boolean; sources: string[]; hass?: HomeAssistant; maxGroups: number;
  selected?: string; page: number; select: (key?: string) => void; changePage: (page: number) => void;
}) {
  const { events, groups, today, locale } = options;
  const t = strings(locale), next = groups[0];
  const inventory = nextBins(events, locale), pageSize = 12;
  const pages = Math.max(1, Math.ceil(inventory.length / pageSize));
  const page = Math.min(options.page, pages - 1);
  const selected = inventory.find(bin => binKey(bin) === options.selected);
  const filtered = selected ? groups.map(group => ({ ...group, events: group.events.filter(e => binKey(e) === options.selected) })).filter(group => group.events.length) : groups;
  return html`
    ${next ? html`<div class="primary overview-next"><div class="copy"><div class="eyebrow">${t.next}</div>
      <span class="date">${dateLabel(next.date, today, locale)}</span>${chips(next.events, locale)}
      <p class="full-date">${new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${next.date}T12:00:00Z`))}</p>
    </div>${options.artwork ? bins(next.events) : nothing}</div>` : nothing}
    <div class="section-heading"><h3>${t.yourBins}</h3><small>${new Intl.NumberFormat(locale).format(inventory.length)}</small></div>
    <p class="filter-hint">${t.filterHint}</p>
    <div class="bin-grid">${inventory.slice(page * pageSize, (page + 1) * pageSize).map(bin => html`
      <button class="bin-tile" aria-pressed=${Boolean(selected && binKey(bin) === options.selected)}
        @click=${() => options.select(binKey(bin) === options.selected ? undefined : binKey(bin))}>
        ${options.artwork ? bins([bin]) : html`<ha-icon aria-hidden="true" .icon=${bin.icon ?? "mdi:trash-can-outline"} style=${styleMap({ color: bin.color })}></ha-icon>`}
        <span class="tile-copy"><strong>${bin.label}</strong>${options.showSource ? html`<small class="source-name">${sourceName(options.hass, bin.sourceId, options.sources)}</small>` : nothing}
          <span class="tile-date">${dateLabel(bin.date, today, locale)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${styleMap({ backgroundColor: artworkColor(bin) })}></span>
      </button>`)}</div>
    ${pages > 1 ? html`<nav class="pages" aria-label=${t.binPage}><button ?disabled=${page === 0} @click=${() => options.changePage(page - 1)}>${t.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(locale).format(page + 1)} / ${new Intl.NumberFormat(locale).format(pages)}</span><button ?disabled=${page + 1 === pages} @click=${() => options.changePage(page + 1)}>${t.nextPage}</button></nav>` : nothing}
    <div class="section-heading"><h3>${t.upcoming}</h3>${selected ? html`<button class="filter-reset" @click=${() => options.select(undefined)}>${t.clearFilter}</button>` : nothing}</div>
    ${selected ? html`<p class="filter-hint" role="status">${selected.label}${options.showSource ? html` · ${sourceName(options.hass, selected.sourceId, options.sources)}` : nothing}</p>` : nothing}
    <div class="overview-schedule">${groupRows(filtered.slice(0, options.maxGroups), today, locale)}</div>`;
}
