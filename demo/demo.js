import "/waste-pickup-planner-card.js";
// Minimal icon host for the standalone preview. Real HA supplies ha-icon and ha-card.
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
const day = (offset) => {
  const d = new Date();
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
  if (state === "long")
    upcoming[0].type =
      "Household packaging, cartons and non-recyclable mixed materials with a very long collection name";
  return {
    connection,
    config: { time_zone: "Europe/Warsaw" },
    locale: { language: state === "pl" ? "pl" : "en" },
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
for (const layout of ["hero", "compact", "schedule", "badge"]) {
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
      });
    card.hass = hass(e.target.value);
  }
});
let theme = 0;
document.querySelector("#theme").onclick = () => {
  theme = (theme + 1) % 3;
  document.body.className = ["", "light", "theme"][theme];
};
