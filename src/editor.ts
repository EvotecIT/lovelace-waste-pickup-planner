import { LitElement, css, html, nothing } from "lit";
import type { CardConfig, HomeAssistant, TypeOverride } from "./types.ts";
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
    return html`<ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema.filter((s) => !this.config!.type.includes("badge") || !["layout", "max_groups", "show_artwork"].includes(s.name))}
        .computeLabel=${(s: { name: string }) => labels[s.name]}
        @value-changed=${(event: CustomEvent) => this.changed({ ...event.detail.value, entity: undefined })}
      ></ha-form>
      <p>
        Select one authoritative source per address. To use a Waste Collection
        Schedule sensor, set its details format to Generic. Calendars also work.
      </p>
      <label
        >Tap action<select
          .value=${this.config.tap_action?.action ?? "details"}
          @change=${(e: Event) => this.changed({ tap_action: { action: (e.target as HTMLSelectElement).value as "details" } })}
        >
          ${["details", "more-info", "navigate", "none"].map((a) => html`<option value=${a}>${a}</option>`)}
        </select></label
      >
      ${this.config.tap_action?.action === "navigate" ? html`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path ?? ""} placeholder="/lovelace/waste" @change=${(e: Event) => this.changed({ tap_action: { action: "navigate", navigation_path: (e.target as HTMLInputElement).value } })} /></label>` : nothing}
      <details>
        <summary>Collection names, colors and visibility</summary>
        <p>
          Use the exact type ID from v3, or the complete collection name for
          older sensors and calendars.
        </p>
        ${(this.config.overrides ?? []).map(
        (o, index) =>
          html`<fieldset>
            <legend>Collection ${index + 1}</legend>
            ${(
              [
                ["type", "Type ID or exact name"],
                ["name", "Display name"],
                ["color", "Bin color (#RRGGBB)"],
                ["icon", "Icon (mdi:…)"],
              ] as const
            ).map(
              ([key, label]) =>
                html`<label
                  >${label}<input
                    .value=${o[key] ?? ""}
                    @change=${(e: Event) => this.override(index, { [key]: (e.target as HTMLInputElement).value || undefined })}
                /></label>`,
            )}<label
              ><input
                type="checkbox"
                .checked=${o.hidden ?? false}
                @change=${(e: Event) => this.override(index, { hidden: (e.target as HTMLInputElement).checked })}
              />
              Hide this collection</label
            ><button
              class="remove"
              @click=${() => this.changed({ overrides: this.config!.overrides!.filter((_, i) => i !== index) })}
            >
              Remove override
            </button>
          </fieldset>`,
      )}
        <button
          @click=${() => this.changed({ overrides: [...(this.config!.overrides ?? []), { type: "collection_name" }] })}
        >
          Add collection override
        </button>
      </details>`;
  }
}
export class WastePickupPlannerBadgeEditor extends WastePickupPlannerEditor {}
