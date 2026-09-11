# Waste Pickup Planner

Home Assistant custom card and badge, written in TypeScript and Lit.

- Keep provider parsing and waste classification in the integration. Read authenticated HA sensors/calendar APIs through the supplied `hass` object.
- Share adapters, date calculations, caching and projection between cards and badges. Keep rendering and editor modules separate.
- Preserve complete labels and selected-source identity. Never infer a physical bin color from a waste name or category-default palette.
- Respect the HA home timezone, all-day calendar dates, themes, and locale. Treat empty, unavailable and stale schedules distinctly.
- Keep configuration data untrusted; avoid HTML/template evaluation and external asset requests.
- Validate with `npm test`, `npm run check`, and `npm run pack`. Inspect the actual HA runtime for visual/editor changes as well as the standalone preview.
- Build `waste-pickup-planner-card.js` from source; do not hand-edit it. Keep the generated resource current in commits, matching the repository's HACS delivery convention.
- Keep release orchestration in the pinned PowerForge workflow; local build and pack scripts remain small.
- Keep task-owned screenshots and temporary files under ignored output folders, retaining only reviewed public artwork in `assets/`.
