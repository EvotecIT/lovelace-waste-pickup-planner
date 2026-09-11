import { LitElement, html, nothing } from "lit";
import { sourceIds, validateConfig } from "./config.ts";
import { ScheduleController } from "./controller.ts";
import { dateLabel, homeDate, updateLabel } from "./dates.ts";
import { groupEvents } from "./schedule.ts";
import { bins, chips, groupRows } from "./presentation.ts";
import { strings } from "./strings.ts";
import { styles } from "./styles.ts";
import { createEditor } from "./ha-editor.ts";
import type { CardConfig, HomeAssistant, ScheduleSnapshot } from "./types.ts";
export class WastePickupPlannerCard extends LitElement {
  static styles = styles;
  static properties = { snapshot: { state: true }, detailsOpen: { state: true }, detailsPage: { state: true } };
  protected badge = false;
  private detailsOpen = false;
  private detailsPage = 0;
  private config?: CardConfig;
  private ha?: HomeAssistant;
  private controller = new ScheduleController();
  private timer?: ReturnType<typeof setInterval>;
  private day?: string;
  protected snapshot?: ScheduleSnapshot;
  private visible = () => {
    if (document.visibilityState === "visible") this.refresh();
  };
  set hass(value: HomeAssistant) {
    const old = this.ha;
    this.ha = value;
    if (!old || old.connection !== value.connection ||
        old.config.time_zone !== value.config.time_zone) this.snapshot = undefined;
    if (
      !old ||
      old.connection !== value.connection ||
      old.config.time_zone !== value.config.time_zone ||
      sourceIds(this.config ?? { type: "" }).some(
        (id) => old.states[id] !== value.states[id],
      )
    )
      this.refresh();
    if (
      !old ||
      old.locale?.language !== value.locale?.language ||
      old.language !== value.language
    )
      this.requestUpdate();
  }
  get hass(): HomeAssistant | undefined {
    return this.ha;
  }
  setConfig(value: CardConfig): void {
    const config = validateConfig(value);
    const previous = this.config;
    const sourcesChanged = !previous || JSON.stringify(sourceIds(previous).sort()) !==
      JSON.stringify(sourceIds(config).sort());
    if (sourcesChanged) this.controller.reset();
    // Projection changes must not display the old selection while a read is pending.
    if (sourcesChanged || previous?.days_to_show !== config.days_to_show ||
        JSON.stringify(previous?.overrides) !== JSON.stringify(config.overrides))
      this.snapshot = undefined;
    this.config = config;
    this.refresh();
    this.requestUpdate();
  }
  static getConfigElement(): Promise<HTMLElement> {
    return createEditor("waste-pickup-planner-card-editor");
  }
  static getStubConfig(hass: HomeAssistant): CardConfig {
    const sensor = Object.values(hass.states).find(
      (e) =>
        e.entity_id.startsWith("sensor.") &&
        Array.isArray(e.attributes.upcoming),
    );
    return {
      type: "custom:waste-pickup-planner-card",
      entity:
        sensor?.entity_id ??
        Object.keys(hass.states).find((id) => id.startsWith("calendar.")) ??
        "sensor.waste_schedule",
      layout: "compact",
    };
  }
  getCardSize(): number {
    return this.config?.layout === "schedule"
      ? Math.min(this.config.max_groups! + 1, 8)
      : this.config?.layout === "hero"
        ? 5
        : 3;
  }
  getGridOptions(): object {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }
  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("visibilitychange", this.visible);
    this.timer = setInterval(() => this.refresh(), 60000);
    this.refresh();
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timer);
    document.removeEventListener("visibilitychange", this.visible);
    this.controller.cancel();
    this.detailsOpen = false;
  }
  private refresh(): void {
    if (!this.isConnected || !this.ha || !this.config) return;
    this.day = homeDate(new Date(), this.ha.config.time_zone);
    if (this.snapshot?.rangeStart !== this.day) this.snapshot = undefined;
    void this.controller.update(this.ha, this.config, (value) => {
      // Keep the last visible schedule during a background calendar refresh.
      if (value.status !== "loading" || !this.snapshot) this.snapshot = value;
    });
  }
  private locale(): string {
    return (
      this.config?.locale ||
      this.ha?.locale?.language ||
      this.ha?.language ||
      "en"
    );
  }
  private async activate(): Promise<void> {
    const config = this.config;
    if (!config) return;
    const action = config.tap_action?.action ?? "details";
    if (action === "none") return;
    if (action === "more-info")
      this.dispatchEvent(
        new CustomEvent("hass-more-info", {
          detail: { entityId: sourceIds(config)[0] },
          bubbles: true,
          composed: true,
        }),
      );
    else if (action === "navigate") {
      history.pushState(null, "", config.tap_action!.navigation_path);
      window.dispatchEvent(
        new CustomEvent("location-changed", { detail: { replace: false } }),
      );
    } else {
      this.detailsPage = 0;
      this.detailsOpen = true;
      await this.updateComplete;
      if (this.isConnected && this.detailsOpen)
        this.renderRoot.querySelector<HTMLDialogElement>("dialog")?.showModal();
    }
  }
  private async changeDetailsPage(page: number): Promise<void> {
    this.detailsPage = page;
    await this.updateComplete;
    this.renderRoot.querySelector("dialog")?.scrollTo(0, 0);
  }
  protected render() {
    if (!this.config) return nothing;
    const locale = this.locale(),
      t = strings(locale),
      snapshot = this.snapshot;
    const groups = groupEvents(snapshot?.events ?? []),
      next = groups[0],
      today = snapshot?.rangeStart ?? this.day ?? "2000-01-01";
    const title = this.config.title ?? t.title;
    const state = snapshot?.status ?? "loading";
    const message =
      state === "empty"
        ? t.empty
        : state === "stale"
          ? t.partialEmpty
          : state === "unavailable"
            ? t.unavailable
            : t.loading;
    const names = next
      ? next.events.length > 2
        ? `${new Intl.NumberFormat(locale).format(next.events.length)} ${t.collections}`
        : next.events.map((e) => e.label).join(" · ")
      : message;
    const date = next ? dateLabel(next.date, today, locale) : message;
    const notice =
      state === "stale"
        ? html`<p class="notice" role="status">${t.stale}</p>`
        : nothing;
    const pageSize = 100;
    const pageCount = Math.max(1, Math.ceil((snapshot?.events.length ?? 0) / pageSize));
    const page = Math.min(this.detailsPage, pageCount - 1);
    const details = this.detailsOpen ? html`<dialog aria-label=${t.schedule} @close=${() => { this.detailsOpen = false; }}>
      <div class="heading">
        <h2>${title}</h2>
        <button
          class="close"
          aria-label=${t.close}
          @click=${() => this.renderRoot.querySelector<HTMLDialogElement>("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${groups.length ? groupRows(groupEvents(snapshot!.events.slice(page * pageSize, (page + 1) * pageSize)), today, locale, pageSize) : html`<p class="state">${message}</p>`}${notice}${snapshot?.messages.map((m) => html`<p class="state">${m}</p>`)}
      ${pageCount > 1 ? html`<nav class="pages" aria-label=${t.schedule}>
        <button ?disabled=${page === 0} @click=${() => this.changeDetailsPage(page - 1)}>${t.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(locale).format(page + 1)} / ${new Intl.NumberFormat(locale).format(pageCount)}</span>
        <button ?disabled=${page + 1 === pageCount} @click=${() => this.changeDetailsPage(page + 1)}>${t.nextPage}</button>
      </nav>` : nothing}
    </dialog>` : nothing;
    if (this.badge) {
      const description = next
        ? next.events.slice(0, 6).map(e => e.label).join(" · ") +
          (next.events.length > 6 ? ` · +${new Intl.NumberFormat(locale).format(next.events.length - 6)} ${t.more}` : "")
        : message;
      const label = `${title}: ${date}. ${description}${state === "stale" ? `. ${t.stale}` : ""}`;
      const content = html`<ha-icon aria-hidden="true"
        .icon=${state === "stale" || state === "unavailable" ? "mdi:alert-circle-outline" : "mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${next ? date : title}</strong>
        <small>${state === "stale" ? `${t.staleBadge} · ` : ""}${names}</small></span>`;
      return this.config.tap_action?.action === "none"
        ? html`<div class="badge" role="img" aria-label=${label} title=${description}>${content}</div>`
        : html`<button class="badge" aria-label=${label} title=${description} @click=${this.activate}>${content}</button>${details}`;
    }
    return html`<ha-card
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${title}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${
            next
              ? this.config.layout === "schedule"
                ? groupRows(
                    groups.slice(0, this.config.max_groups),
                    today,
                    locale,
                  )
                : html`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${t.next}</div>
                        <span class="date">${date}</span>${chips(next.events, locale)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${next.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout === "hero" && this.config.show_artwork ? bins(next.events) : nothing}
                    </div>
                    ${this.config.layout === "hero" && groups.length > 1 ? html`<div class="upcoming">${groupRows(groups.slice(1, this.config.max_groups), today, locale)}</div>` : nothing}`
              : html`<p class="state" role="status">${message}</p>`
          }
          ${notice}${state === "unavailable" ? snapshot?.messages.map((m) => html`<p class="state">${m}</p>`) : nothing}
          ${this.config.show_updated && snapshot?.fetchedAt ? html`<p class="updated">${t.updated}: ${updateLabel(snapshot.fetchedAt, locale, snapshot.timeZone)}</p>` : nothing}
        </section>
        ${this.config.tap_action?.action === "none" ? nothing : html`<button class="action" @click=${this.activate}>${this.config.tap_action?.action === "more-info" ? title : t.details} <span aria-hidden="true">↗</span></button>`}</ha-card
      >${details}`;
  }
}
export class WastePickupPlannerBadge extends WastePickupPlannerCard {
  protected badge = true;
  static getConfigElement(): Promise<HTMLElement> {
    return createEditor("waste-pickup-planner-badge-editor");
  }
  static getStubConfig(hass: HomeAssistant): CardConfig {
    return {
      ...super.getStubConfig(hass),
      type: "custom:waste-pickup-planner-badge",
    };
  }
}
