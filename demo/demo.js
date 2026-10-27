import "/waste-pickup-planner-card.js";
// Minimal icon host for the standalone preview. Real HA supplies ha-icon and ha-card.
// The card styles its own ha-card; HA's ha-card also applies the theme's backdrop filter.
customElements.define(
  "ha-card",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML =
        "<style>:host{display:block;backdrop-filter:var(--ha-card-backdrop-filter,none)}</style><slot></slot>";
    }
  },
);
customElements.define(
  "ha-icon",
  class extends HTMLElement {
    set icon(value) {
      this.setAttribute("icon", value);
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML =
        '<style>:host{display:inline-flex;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%}</style><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 7h12l-1 14H7L6 7Zm-2 0h16M9 7V4h6v3M10 10v7m4-7v7"/></svg>';
    }
  },
);
let connection = {};
const cards = [];
const timeZone = "Europe/Warsaw";
const day = (offset) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const part = key => parts.find(p => p.type === key).value;
  const d = new Date(`${part("year")}-${part("month")}-${part("day")}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + offset);
  return d.toISOString().slice(0, 10);
};
const entries = () => [
  {
    date: day(1),
    type: "General waste",
    type_id: "residual",
    color: "#74767b",
    color_source: "source",
  },
  {
    date: day(1),
    type: "Food & garden",
    type_id: "bio",
    color: "#aa7955",
    color_source: "source",
    icon: "mdi:leaf",
  },
  {
    date: day(5),
    type: "Paper & cardboard",
    type_id: "paper",
    color: "#579bc8",
    color_source: "source",
  },
  {
    date: day(5),
    type: "Glass",
    type_id: "glass",
    color: "#69a080",
    color_source: "source",
  },
  {
    date: day(8),
    type: "General waste",
    type_id: "residual",
    color: "#74767b",
    color_source: "source",
  },
  {
    date: day(12),
    type: "Recycling",
    type_id: "recycling",
    color: "#e1b950",
    color_source: "source",
  },
];
function hass(state = "ready") {
  let upcoming = entries();
  if (state === "empty") upcoming = [];
  if (state === "large")
    upcoming = Array.from({ length: 125 }, (_, index) => ({
      date: day(1 + Math.floor(index / 5)),
      type: `Collection ${String(index + 1).padStart(3, "0")}`,
      type_id: `collection_${index + 1}`,
    }));
  if (state === "long")
    upcoming[0].type =
      "Household packaging, cartons and non-recyclable mixed materials with a very long collection name";
  return {
    connection,
    config: { time_zone: timeZone },
    locale: { language: document.querySelector("#language").value },
    states: {
      "sensor.waste_schedule": {
        entity_id: "sensor.waste_schedule",
        state: ["unavailable", "stale"].includes(state)
          ? "unavailable"
          : "ready",
        attributes: { upcoming },
      },
    },
    callApi: async () => [],
  };
}
for (const layout of ["overview", "hero", "compact", "schedule", "badge"]) {
  const card = document.createElement(
    layout === "badge"
      ? "waste-pickup-planner-badge"
      : "waste-pickup-planner-card",
  );
  card.setConfig({
    type: `custom:${layout === "badge" ? "waste-pickup-planner-badge" : "waste-pickup-planner-card"}`,
    entity: "sensor.waste_schedule",
    layout: layout === "badge" ? "compact" : layout,
    show_artwork: true,
    max_groups: 3,
  });
  document.querySelector(`#${layout}`).append(card);
  card.hass = hass();
  cards.push(card);
}
document.querySelector("#state").addEventListener("change", (e) => {
  connection = {};
  for (const card of cards) {
    // Each choice is a reproducible fixture, independent of the prior choice.
    if (e.target.value === "stale") card.hass = hass("ready");
    if (e.target.value !== "stale")
      card.setConfig({
        type: card.localName,
        entity: "sensor.waste_schedule",
        layout:
          card.parentElement.id === "badge" ? "compact" : card.parentElement.id,
        show_artwork: true,
        max_groups: 3,
        appearance: document.querySelector("#appearance").value,
        density: document.querySelector("#density").value,
      });
    card.hass = hass(e.target.value);
  }
});
for (const setting of ["appearance", "density"]) document.querySelector(`#${setting}`).addEventListener("change", () => {
  for (const card of cards) card.setConfig({
    type: card.localName, entity: "sensor.waste_schedule",
    layout: card.parentElement.id === "badge" ? "compact" : card.parentElement.id,
    show_artwork: true, max_groups: 3,
    appearance: document.querySelector("#appearance").value,
    density: document.querySelector("#density").value,
  });
});
document.querySelector("#language").addEventListener("change", (e) => {
  for (const card of cards)
    card.hass = { ...card.hass, locale: { language: e.target.value } };
});
// The same theme matrix as the lawn mower card preview: `?theme=ha-light`, `glass`, ...
const wallpaper =
  "radial-gradient(circle at 15% 20%, #ff8a5b 0, transparent 38%), " +
  "radial-gradient(circle at 85% 10%, #5b8cff 0, transparent 42%), " +
  "radial-gradient(circle at 60% 90%, #2fbf8f 0, transparent 40%), #1b1f3a";
const themes = {
  demo: {},
  "ha-light": { page: "#fafafa", scheme: "light", vars: {
    "--primary-text-color": "#212121", "--secondary-text-color": "#727272", "--card-background-color": "#ffffff",
    "--divider-color": "rgba(0, 0, 0, 0.12)", "--primary-color": "#03a9f4", "--ha-card-border-radius": "12px" } },
  "ha-dark": { page: "#111111", scheme: "dark", vars: {
    "--primary-text-color": "#e1e1e1", "--secondary-text-color": "#9b9b9b", "--card-background-color": "#1c1c1c",
    "--divider-color": "rgba(225, 225, 225, 0.12)", "--primary-color": "#03a9f4", "--ha-card-border-radius": "12px" } },
  glass: { page: wallpaper, scheme: "dark", vars: {
    "--primary-text-color": "#ffffff", "--secondary-text-color": "rgba(255, 255, 255, 0.72)",
    "--card-background-color": "#232842", "--ha-card-background": "rgba(20, 24, 40, 0.35)",
    "--ha-card-backdrop-filter": "blur(14px)", "--ha-card-border-color": "rgba(255, 255, 255, 0.18)",
    "--divider-color": "rgba(255, 255, 255, 0.18)", "--primary-color": "#ff9f43", "--ha-card-border-radius": "22px" } },
  accent: { page: "#f3f0f7", scheme: "light", vars: {
    "--primary-text-color": "#1f1a24", "--secondary-text-color": "#6b6375", "--card-background-color": "#ffffff",
    "--divider-color": "#ddd5e6", "--primary-color": "#8e44ad", "--ha-card-border-radius": "4px" } },
};
// Switching applies the theme in place, so the selected state, layout options and
// bin filters stay put for a side-by-side comparison; the URL keeps it shareable.
const applyTheme = (key) => {
  const root = document.documentElement;
  for (const theme of Object.values(themes))
    for (const name of Object.keys(theme.vars ?? {})) root.style.removeProperty(name);
  for (const property of ["color-scheme", "background", "background-attachment"]) root.style.removeProperty(property);
  const theme = themes[key];
  if (!theme.vars) return;
  for (const [name, value] of Object.entries(theme.vars)) root.style.setProperty(name, value);
  root.style.colorScheme = theme.scheme;
  root.style.background = theme.page;
  root.style.backgroundAttachment = "fixed";
};
const requestedTheme = new URLSearchParams(location.search).get("theme");
const themeSelect = document.querySelector("#theme");
themeSelect.value = themes[requestedTheme] ? requestedTheme : "demo";
applyTheme(themeSelect.value);
themeSelect.addEventListener("change", () => {
  applyTheme(themeSelect.value);
  const next = new URLSearchParams(location.search);
  next.set("theme", themeSelect.value);
  history.replaceState(null, "", `?${next}`);
});