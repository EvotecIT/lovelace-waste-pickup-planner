import { LitElement, html, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import type { CardConfig, HomeAssistant, ScheduleSnapshot, TypeOverride } from "./types.ts";
import { availableBins, collectionOverride, matchesCollection, overrideInheritance, suggestedSources } from "./collections.ts";
import { sensorEvents } from "./adapters.ts";
import { sourceIds, validateConfig } from "./config.ts";
import { ScheduleController } from "./controller.ts";
import { editorStrings, type EditorStrings } from "./editor-strings.ts";
import { editorStyles } from "./editor-styles.ts";
import { sourceName } from "./overview.ts";

export class WastePickupPlannerEditor extends LitElement {
  static properties = { config: { state: true }, editing: { state: true }, calendarSnapshot: { state: true } };
  static styles = editorStyles;
  private ha?: HomeAssistant;
  private config?: CardConfig;
  private editing?: number;
  private calendarSnapshot?: ScheduleSnapshot;
  private controller = new ScheduleController();
  private timer?: ReturnType<typeof setInterval>;

  set hass(value: HomeAssistant) {
    const old = this.ha;
    this.ha = value;
    if (!old || old.connection !== value.connection || old.config.time_zone !== value.config.time_zone) {
      this.controller.reset();
      this.calendarSnapshot = undefined;
    }
    if (!old || old.connection !== value.connection || old.config.time_zone !== value.config.time_zone ||
      sourceIds(this.config ?? { type: "" }).some(id => old.states[id] !== value.states[id])) this.refreshBins();
    this.requestUpdate();
  }
  get hass(): HomeAssistant | undefined { return this.ha; }

  setConfig(value: CardConfig): void {
    const previous = this.config;
    this.config = { ...value };
    if (!previous || JSON.stringify(sourceIds(previous)) !== JSON.stringify(sourceIds(value)) || previous.days_to_show !== value.days_to_show) {
      this.controller.reset();
      this.calendarSnapshot = undefined;
      this.editing = undefined;
      this.refreshBins();
    }
    if (this.editing !== undefined && !this.config.overrides?.[this.editing]) this.editing = undefined;
  }
  connectedCallback(): void {
    super.connectedCallback();
    this.timer = setInterval(() => this.refreshBins(), 60000);
    this.refreshBins();
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timer);
    this.controller.cancel();
  }
  private refreshBins(): void {
    if (!this.isConnected || !this.ha || !this.config) return;
    try {
      const config = validateConfig({ ...this.config, overrides: [] });
      if (!sourceIds(config).some(id => id.startsWith("calendar."))) return;
      void this.controller.update(this.ha, config, snapshot => {
        if (snapshot.status !== "loading" || !this.calendarSnapshot) this.calendarSnapshot = snapshot;
      });
    } catch { /* Sources may be incomplete while the HA editor is being configured. */ }
  }
  private changed(patch: Partial<CardConfig>): void {
    this.setConfig({ ...this.config!, ...patch });
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this.config }, bubbles: true, composed: true }));
  }
  private override(index: number, patch: Partial<TypeOverride>): void {
    const overrides = [...(this.config?.overrides ?? [])];
    overrides[index] = { ...overrides[index], ...patch };
    this.changed({ overrides });
  }
  private form(names: string[], t: EditorStrings) {
    const badge = this.config!.type.includes("badge");
    const select = (name: string, values: string[]) => ({ name, selector: { select: {
      options: values.map(value => ({ value, label: t[value as keyof EditorStrings] })), mode: "dropdown",
    } } });
    const schema = [
      { name: "entities", required: true, selector: { entity: { domain: ["sensor", "calendar"], multiple: true, include_entities: suggestedSources(this.ha!, this.config!) } } },
      { name: "title", selector: { text: {} } }, select("layout", ["compact", "hero", "schedule", "overview"]),
      select("appearance", ["native", "modern", "minimal"]), select("density", ["comfortable", "compact"]),
      { name: "days_to_show", selector: { number: { min: 1, max: 366, mode: "box" } } },
      { name: "max_groups", selector: { number: { min: 1, max: 50, mode: "box" } } },
      ...["show_artwork", "show_updated", "show_manage_bins", "show_source"].map(name => ({ name, selector: { boolean: {} } })),
      { name: "locale", selector: { text: {} } },
    ].filter(s => names.includes(s.name) && (!badge || !["layout", "max_groups", "show_artwork", "show_manage_bins", "appearance", "density", "show_source"].includes(s.name)));
    if (!schema.length) return nothing;
    const data = { ...this.config, entities: sourceIds(this.config!), layout: this.config!.layout ?? "compact",
      appearance: this.config!.appearance ?? "native", density: this.config!.density ?? "comfortable",
      show_artwork: this.config!.show_artwork ?? this.config!.layout === "overview", show_source: this.config!.show_source ?? sourceIds(this.config!).length > 1 };
    return html`<ha-form .hass=${this.ha} .data=${data} .schema=${schema}
      .computeLabel=${(s: { name: string }) => t[s.name as keyof EditorStrings]}
      @value-changed=${(event: CustomEvent) => {
        const patch = Object.fromEntries(schema.map(s => [s.name, event.detail.value[s.name]])) as Partial<CardConfig>;
        if (names.includes("entities")) patch.entity = undefined;
        this.changed(patch);
      }}></ha-form>`;
  }
  private editPanel(t: EditorStrings, bins: ReturnType<typeof availableBins>) {
    const index = this.editing;
    if (index === undefined || !this.config!.overrides?.[index]) return nothing;
    const o = this.config!.overrides[index];
    const inherited = overrideInheritance(o, this.config!.overrides);
    const matching = bins.filter(b => matchesCollection(b, o));
    const integrationColors = new Set(matching.map(b => b.color));
    const integrationColor = integrationColors.size === 1 ? matching[0]?.color : undefined;
    const colorStatus = inherited?.color ? `${t.inheritedColor}: ${inherited.color}` : integrationColors.size > 1 ? t.varyingColors : integrationColor ? `${t.integrationColor}: ${integrationColor}` : t.neutralColor;
    return html`<fieldset><legend>${o.label ?? o.type}${o.source ? html` · ${this.ha!.states[o.source]?.attributes.friendly_name ?? o.source}` : nothing}</legend>
      <label>${t.displayName}<input .value=${o.name ?? ""} placeholder=${inherited?.name ?? o.label ?? o.type}
        @input=${(e: Event) => this.override(index, { name: (e.target as HTMLInputElement).value || undefined })} /></label>
      <label>${t.localColor}<input type="color" .value=${o.color ?? inherited?.color ?? integrationColor ?? "#808080"}
        @input=${(e: Event) => this.override(index, { color: (e.target as HTMLInputElement).value })} /></label>
      <p>${o.color ? `${t.localColorStatus}: ${o.color}` : colorStatus}</p>
      ${o.color ? html`<button @click=${() => this.override(index, { color: undefined })}>${inherited?.color ? t.resetInherited : t.resetIntegration}</button>` : nothing}
      <label class="check"><input type="checkbox" .checked=${o.hidden ?? inherited?.hidden ?? false}
        @change=${(e: Event) => this.override(index, { hidden: (e.target as HTMLInputElement).checked })} />${t.hide}</label>
      <details><summary>${t.matching}</summary>
        ${(["type", "source", "label", "icon", "color"] as const).map(key => html`<label>${key === "source" ? t.binSource : t[key]}<input .value=${o[key] ?? ""}
          @change=${(e: Event) => this.override(index, { [key]: (e.target as HTMLInputElement).value || undefined })} /></label>`)}
      </details>
      <div class="buttons"><button @click=${() => { this.editing = undefined; }}>${t.done}</button>
        <button @click=${() => { this.editing = undefined; this.changed({ overrides: this.config!.overrides!.filter((_, i) => i !== index) }); }}>${t.remove}</button></div>
    </fieldset>`;
  }
  protected render() {
    if (!this.config || !this.ha) return nothing;
    const t = editorStrings(this.config.locale || this.ha.locale?.language || this.ha.language || "en");
    const bins = availableBins(this.ha, this.config, this.calendarSnapshot?.events);
    const overrides = this.config.overrides ?? [];
    const unsupported = sourceIds(this.config).filter(id => id.startsWith("sensor.") && this.ha!.states[id] && !sensorEvents(this.ha!.states[id]).supported);
    const unmatched = overrides.map((o, index) => ({ o, index })).filter(({ o }) => !bins.some(b => o.type === (b.typeId ?? b.label) && o.source === b.sourceId && o.label === b.label));
    return html`<h3>${t.source}</h3>${this.form(["entities", "title", "layout"], t)}<p>${t.sourceHelp}</p>
      ${unsupported.length ? html`<p class="warning" role="status">${unsupported.join(", ")}: ${t.unsupported}</p>` : nothing}
      ${!this.config.type.includes("badge") ? html`<h3>${t.appearanceSection}</h3>${this.form(["appearance", "density", "show_artwork", "show_source", "show_manage_bins"], t)}` : nothing}
      <h3>${t.binsSection}</h3><p>${t.binsHelp}</p>
      ${overrides.length >= 100 ? html`<p role="status">${t.overrideLimit}</p>` : nothing}
      <div class="bin-list">${bins.map(bin => {
        const exact = overrides.findIndex(o => o.type === (bin.typeId ?? bin.label) && o.source === bin.sourceId && o.label === bin.label);
        const effective = collectionOverride(bin, overrides);
        return html`<button class="bin-row" aria-label=${`${t.customize}: ${effective?.name ?? bin.label} · ${sourceName(this.ha, bin.sourceId)}`} aria-pressed=${exact >= 0 && this.editing === exact} ?disabled=${exact < 0 && overrides.length >= 100}
          @click=${() => {
            if (exact >= 0) this.editing = exact;
            else { this.changed({ overrides: [...overrides, { type: bin.typeId ?? bin.label, source: bin.sourceId, label: bin.label }] }); this.editing = overrides.length; }
          }}><span class="swatch" aria-hidden="true" style=${styleMap({ "--waste-type-color": effective?.color ?? bin.color })}></span>
          <span class="bin-copy"><strong>${effective?.name ?? bin.label}</strong><small>${this.ha!.states[bin.sourceId]?.attributes.friendly_name ?? bin.sourceId} · ${effective?.hidden ? t.hidden : effective?.color || effective?.name || effective?.icon ? t.local : t.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${exact >= 0 && this.editing === exact ? this.editPanel(t, bins) : nothing}`;
      })}${unmatched.map(({ o, index }) => html`<button class="bin-row" aria-pressed=${this.editing === index} @click=${() => { this.editing = index; }}>
        <span class="bin-copy"><strong>${o.name ?? o.label ?? o.type}</strong><small>${o.source ? this.ha!.states[o.source]?.attributes.friendly_name ?? o.source : t.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing === index ? this.editPanel(t, bins) : nothing}`)}</div>
      ${!bins.length ? html`<p>${t.noBins}</p>` : nothing}
      ${sourceIds(this.config).some(id => id.startsWith("calendar.")) ? html`<p>${t.rangeHelp}</p>
        ${!this.calendarSnapshot || this.calendarSnapshot.status === "loading" ? html`<p role="status">${t.calendarLoading}</p>` : this.calendarSnapshot.messages.some(m => m.source.startsWith("calendar.")) ? html`<p class="warning" role="status">${t.calendarFailed} <button @click=${this.refreshBins}>${t.retry}</button></p>` : nothing}` : nothing}
      <details><summary>${t.advanced}</summary>${this.form(["days_to_show", "max_groups", "show_updated", "locale"], t)}
        <label>${t.tap}<select .value=${this.config.tap_action?.action ?? "details"} @change=${(e: Event) => this.changed({ tap_action: { action: (e.target as HTMLSelectElement).value as "details" } })}>
          ${(["details", "more-info", "navigate", "none"] as const).map(a => html`<option value=${a}>${t[a]}</option>`)}</select></label>
        ${this.config.tap_action?.action === "navigate" ? html`<label>${t.navigationPath}<input .value=${this.config.tap_action.navigation_path ?? ""} placeholder="/lovelace/waste"
          @change=${(e: Event) => this.changed({ tap_action: { action: "navigate", navigation_path: (e.target as HTMLInputElement).value } })} /></label>` : nothing}
        <details><summary>${t.advancedOverride}</summary><p>${t.overrideHelp}</p><button ?disabled=${overrides.length >= 100} @click=${() => {
          this.changed({ overrides: [...overrides, { type: "collection_name" }] }); this.editing = overrides.length;
        }}>${t.addOverride}</button></details>
      </details>`;
  }
}
export class WastePickupPlannerBadgeEditor extends WastePickupPlannerEditor {}
