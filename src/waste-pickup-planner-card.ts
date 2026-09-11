import {
  WastePickupPlannerCard,
  WastePickupPlannerBadge,
} from "./component.ts";
import {
  WastePickupPlannerEditor,
  WastePickupPlannerBadgeEditor,
} from "./editor.ts";
customElements.define("waste-pickup-planner-card", WastePickupPlannerCard);
customElements.define("waste-pickup-planner-badge", WastePickupPlannerBadge);
customElements.define(
  "waste-pickup-planner-card-editor",
  WastePickupPlannerEditor,
);
customElements.define(
  "waste-pickup-planner-badge-editor",
  WastePickupPlannerBadgeEditor,
);
const host = window as Window & {
  customCards?: object[];
  customBadges?: object[];
};
(host.customCards ??= []).push({
  type: "waste-pickup-planner-card",
  name: "Waste Pickup Planner",
  description:
    "Date-grouped waste collections with compact, hero and schedule layouts.",
  preview: true,
});
(host.customBadges ??= []).push({
  type: "waste-pickup-planner-badge",
  name: "Waste Pickup Planner Badge",
  description: "The next collection date and types, with schedule details.",
});
