import { LitElement, css, html, nothing } from "lit";
import type { CardConfig, HomeAssistant, TypeOverride } from "./types.ts";
import { availableBins, binKey, collectionOverride, suggestedSources } from "./collections.ts";
import { sensorEvents } from "./adapters.ts";
import { sourceIds } from "./config.ts";
const schema = [
  {
    name: "entities",
    required: true,
    selector: { entity: { domain: ["sensor", "calendar"], multiple: true } },
  },
  { name: "title", selector: { text: {} } },
  {
    name: "layout",
    selector: {
      select: { options: ["compact", "hero", "schedule"], mode: "dropdown" },
    },
  },
  {
    name: "days_to_show",
    selector: { number: { min: 1, max: 366, mode: "box" } },
  },
  {
    name: "max_groups",
    selector: { number: { min: 1, max: 50, mode: "box" } },
  },
  { name: "show_artwork", selector: { boolean: {} } },
  { name: "show_updated", selector: { boolean: {} } },
  { name: "show_manage_bins", selector: { boolean: {} } },
  { name: "locale", selector: { text: {} } },
];
const labels: Record<string, string> = {
  entities: "Waste sensors or calendars",
  title: "Title",
  layout: "Layout",
  days_to_show: "Days to show",
  max_groups: "Visible date groups",
  show_artwork: "Show bin artwork in hero layout",
  show_updated: "Show provider update time",
  show_manage_bins: "Show Manage bins shortcut to Waste Collection Schedule",
  locale: "Language override (optional)",
};
export class WastePickupPlannerEditor extends LitElement {
  static properties = { hass: { attribute: false }, config: { state: true } };
  static styles = css`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    label {
      display: block;
      margin: 12px 0;
      font-size: 14px;
    }
    input,
    select,
    button {
      font: inherit;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      min-height: 44px;
      padding: 8px;
      max-width: 100%;
    }
    input:not([type="checkbox"]),
    select {
      display: block;
      width: 100%;
      margin-top: 5px;
    }
    fieldset {
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      margin: 12px 0;
      padding: 12px;
    }
    button {
      cursor: pointer;
    }
    p {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }
    summary {
      cursor: pointer;
      min-height: 44px;
      display: flex;
      align-items: center;
    }
    button:focus-visible,
    input:focus-visible,
    select:focus-visible {
      outline: 2px solid var(--primary-color);
    }
    .remove {
      margin-top: 8px;
    }
    legend { overflow-wrap: anywhere; }
    input[type="color"] { height: 48px; cursor: pointer; }
    .check { display: flex; align-items: center; gap: 10px; min-height: 44px; }
    .check input { min-height: 0; width: 20px; height: 20px; padding: 0; flex-shrink: 0; }
    .warning { padding: 12px; border-left: 3px solid var(--warning-color, #ffa600); }
  `;
  hass?: HomeAssistant;
  private config?: CardConfig;
  setConfig(value: CardConfig): void {
    this.config = { ...value };
  }
  private changed(patch: Partial<CardConfig>): void {
    this.config = { ...this.config!, ...patch };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this.config },
        bubbles: true,
        composed: true,
      }),
    );
  }
  private override(index: number, patch: Partial<TypeOverride>): void {
    const overrides = [...(this.config?.overrides ?? [])];
    overrides[index] = { ...overrides[index], ...patch };
    this.changed({ overrides });
  }
  protected render() {
    if (!this.config || !this.hass) return nothing;
    const data = {
      ...this.config,
      entities:
        this.config.entities ??
        (this.config.entity ? [this.config.entity] : []),
    };
    const bins = availableBins(this.hass, this.config);
    const selectableBins = bins.filter(b => !this.config!.overrides?.some(o => o.type === (b.typeId ?? b.label) && o.source === b.sourceId && o.label === b.label));
    const unsupported = sourceIds(this.config).filter(id => id.startsWith("sensor.") && this.hass!.states[id] && !sensorEvents(this.hass!.states[id]).supported);
    const form = (names: string[]) => html`<ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema.filter((s) => names.includes(s.name) && (!this.config!.type.includes("badge") || !["layout", "max_groups", "show_artwork", "show_manage_bins"].includes(s.name))).map(s => s.name === "entities" ? { ...s, selector: { entity: { domain: ["sensor", "calendar"], multiple: true, include_entities: suggestedSources(this.hass!, this.config!) } } } : s)}
        .computeLabel=${(s: { name: string }) => labels[s.name]}
        @value-changed=${(event: CustomEvent) => this.changed({ ...event.detail.value, entity: undefined })}
      ></ha-form>`;
    return html`${form(["entities"])}
      <p>
        Select one authoritative source per address. To use a Waste Collection
        Schedule sensor, set its details format to Generic (All attributes in
        the visual bin controls). Choose the combined sensor to show all bins.
        Calendars also work; unrelated sensors are excluded from suggestions.
      </p>
      ${unsupported.length ? html`<p class="warning" role="status">${unsupported.join(", ")}: no structured schedule is exposed. Open the sensor settings and choose Generic / All attributes, then select it here again.</p>` : nothing}
      <h3>Bin appearance</h3>
      <p>Colors follow the integration until you choose a local override. Bin definitions stay in Waste Collection Schedule.</p>
      ${selectableBins.length ? html`<label>Customize a bin<select .value=${""} @change=${(e: Event) => {
        const bin = selectableBins.find(b => binKey(b) === (e.target as HTMLSelectElement).value);
        if (bin) this.changed({ overrides: [...(this.config!.overrides ?? []), { type: bin.typeId ?? bin.label, source: bin.sourceId, label: bin.label }] });
      }}><option value="">Choose a bin…</option>${selectableBins.map(b => html`<option value=${binKey(b)}>${b.label} · ${this.hass!.states[b.sourceId]?.attributes.friendly_name ?? b.sourceId}</option>`)}</select></label>` : nothing}
      ${!bins.length ? html`<p>Bin choices appear when a selected sensor exposes collections. Calendar names or bins outside the sensor's current schedule can be configured in Advanced.</p>` : nothing}
      ${(this.config.overrides ?? []).map((o, index) => {
        const bin = bins.find(b => o.type === (b.typeId ?? b.label) && (o.source === undefined || o.source === b.sourceId) && (o.label === undefined || o.label === b.label));
        const inherited = bin ? collectionOverride(bin, this.config!.overrides!.filter((_, i) => i !== index))?.color : undefined;
        return html`<fieldset><legend>${o.label ?? o.type}${o.source ? html` · ${this.hass!.states[o.source]?.attributes.friendly_name ?? o.source}` : nothing}</legend>
          <label>Display name<input .value=${o.name ?? ""} placeholder=${o.label ?? o.type} @input=${(e: Event) => this.override(index, { name: (e.target as HTMLInputElement).value || undefined })} /></label>
          <label>Local bin color<input type="color" .value=${o.color ?? inherited ?? bin?.color ?? "#808080"} @input=${(e: Event) => this.override(index, { color: (e.target as HTMLInputElement).value })} /></label>
          <p>${o.color ? `Local color: ${o.color}` : inherited ? `Inherited card color: ${inherited}` : bin?.color ? `Integration color: ${bin.color}` : "No integration color is available; artwork stays neutral."}</p>
          ${o.color ? html`<button @click=${() => this.override(index, { color: undefined })}>${inherited ? "Use inherited card color" : "Use integration color"}</button>` : nothing}
          <label class="check"><input type="checkbox" .checked=${o.hidden ?? false} @change=${(e: Event) => this.override(index, { hidden: (e.target as HTMLInputElement).checked })} /> Hide this collection</label>
          <details><summary>Advanced matching and icon</summary>
            ${([["type", "Category ID or exact calendar name"], ["source", "Source entity (optional)"], ["label", "Exact bin name (optional)"], ["icon", "Icon (mdi:…)"], ["color", "Local color (#RRGGBB)"]] as const).map(([key, label]) => html`<label>${label}<input .value=${o[key] ?? ""} @change=${(e: Event) => this.override(index, { [key]: (e.target as HTMLInputElement).value || undefined })} /></label>`)}
          </details>
          <button class="remove" @click=${() => this.changed({ overrides: this.config!.overrides!.filter((_, i) => i !== index) })}>Remove override</button>
        </fieldset>`;
      })}
      ${form(["title", "layout", "show_artwork", "show_manage_bins"])}
      <details><summary>Advanced card settings</summary>
      ${form(["days_to_show", "max_groups", "show_updated", "locale"])}
      <label
        >Tap action<select
          .value=${this.config.tap_action?.action ?? "details"}
          @change=${(e: Event) => this.changed({ tap_action: { action: (e.target as HTMLSelectElement).value as "details" } })}
        >
          ${["details", "more-info", "navigate", "none"].map((a) => html`<option value=${a}>${a}</option>`)}
        </select></label
      >
      ${this.config.tap_action?.action === "navigate" ? html`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path ?? ""} placeholder="/lovelace/waste" @change=${(e: Event) => this.changed({ tap_action: { action: "navigate", navigation_path: (e.target as HTMLInputElement).value } })} /></label>` : nothing}
      </details>
      <details>
        <summary>Advanced: add a category or calendar override</summary>
        <p>
          Use the exact type ID from v3, or the complete collection name for
          older sensors and calendars.
        </p>
        <button
          @click=${() => this.changed({ overrides: [...(this.config!.overrides ?? []), { type: "collection_name" }] })}
        >
          Add collection override
        </button>
      </details>`;
  }
}
export class WastePickupPlannerBadgeEditor extends WastePickupPlannerEditor {}
