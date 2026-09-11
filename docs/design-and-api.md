# Waste Schedule Card: design and API plan

## Presentation choices

Use one schedule model across every presentation. The compact layout is the default; the illustrated hero is an explicit choice.

| Presentation | Use | Content |
| --- | --- | --- |
| Hero | Dedicated household or collection view | Next date, all collections on that date, optional small bin artwork, upcoming groups |
| Compact | Everyday overview or narrow column | Next date, collection names, count, details action |
| Schedule | Planning ahead | Date-grouped rows, bounded date range, optional per-type filter |
| Custom badge | Top of a dashboard | Next date and short names; full names accessible on focus/tap |
| Built-in HA entity badge | Dashboard with no extra frontend dependency | Existing sensor state; standard more-info or navigation action |
| Built-in Tile / Entities | Native HA dashboard | Existing sensor states and supported attributes |

The package includes a custom badge for richer grouping, but the integration's entities remain useful without it. Publish examples for built-in badges, Tile, Entities, and optional third-party template cards. Third-party cards are recipes, not dependencies or a claim of automatic support.

The built-in badge supports entity state/attribute display and normal dashboard actions. A custom badge has its own registration and visual editor. Keep these two paths explicit in installation instructions. See the [HA badge documentation](https://www.home-assistant.io/dashboards/badges/) and [custom badge API](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-badge/).

## Theme and interaction

Inherit Home Assistant typography, primary/secondary text, card background, divider, shadow, and radius variables. Use a small documented set of card-specific CSS variables only for features HA does not define. No hard-coded dark page background inside the component. Honor dashboard card themes and react to theme changes.

Artwork is optional, has no information unavailable in text, and loads only for the hero. Use a neutral illustration when the provider gives no explicit color. Canonical category palette colors are presentation defaults, not evidence of a physical bin's color. Only `color_source: source` or `customize`, or an explicit card override, may color bin artwork. Conflicting colors on the same day remain separate per collection. Never infer color from language, country, waste name, or an image model.

Rows show date first, then collection names. Group multiple pickups on the same local date. Compact content wraps before shrinking; a badge may abbreviate to “Tomorrow · 3 collections” with all names in its accessible label and details. Do not color a mixed group with one category's icon/color as if it represents all pickups; the concept board's single leaf beside a mixed summary should become a neutral collection icon or multiple small indicators in implementation.

Tap opens a schedule details dialog by default for the custom components. Offer standard more-info, navigation, and none. Keep configuration changes, sensor deletion, and refresh service calls out of the first release. Keyboard activation, visible focus, screen-reader names, reduced motion, and at least 44px touch targets are required. Urgency is text (“Today”, “Tomorrow”), not color alone.

Distinct states: loading; available; available with stale cached data; empty within the selected range; unavailable; invalid configuration. Do not report an empty range as “all collected” or interpret an HA state timestamp as a successful provider fetch.

## Data ownership

Municipality API → waste integration provider → canonical collections → HA entities/calendar → frontend adapter → shared schedule model → cards/badge.

Provider parsing, collection identity, source metadata, aliases, and fetch lifecycle belong in the waste integration. The frontend must not contact municipality APIs, store HA tokens, introduce a cloud account, or implement a second waste-type classification engine.

Use the authenticated connection supplied by HA. No dedicated backend endpoint is needed for the initial release. The [HA REST calendar API](https://developers.home-assistant.io/docs/api/rest/) supplies a date range when a calendar is selected; state updates use the existing HA frontend connection. Group related entities using registry/config-entry identity where available, with an explicit entity selector as the reliable fallback. Never discover sources by Polish/English names or combine distinct addresses just because dates and labels match.

### Supported input contracts

1. **Upstream generic sensor details:** structured `upcoming` collection records. v3 adds optional stable `type_id`, `color`, `color_source`, and grouped `collections` through the provider-color PR. Preserve whole labels in v2; do not split on commas because a label may itself contain commas.
2. **HA calendar:** explicitly selected calendar entities and bounded event queries. Preserve each event title when canonical type identity is absent. Calendar-only mode works without provider-color metadata.
3. **Existing fork attributes:** a separately tested temporary adapter for `next_pickup` / `upcoming_pickups` only where the exact observed schema is supported. It is not the preferred contract and is removable after supported installations migrate.

Prefer one authoritative structured source per integration entry. Generic records plus calendar events must not produce duplicate pickups. Only deduplicate across representations when registry identity and collection identity establish equivalence; never deduplicate different selected sources globally by title/date. Distinguish missing data from an explicitly empty authoritative list.

### Frontend model

```ts
interface CollectionEvent {
  sourceId: string;
  entityId: string;
  date: string; // validated YYYY-MM-DD in the HA home timezone
  typeId?: string; // stable v3 ID; absent when the source cannot provide one
  label: string;
  icon?: string;
  color?: string; // validated #RRGGBB
  colorSource?: "source" | "customize" | "default";
}

interface ScheduleSnapshot {
  events: readonly CollectionEvent[];
  status: "loading" | "ready" | "stale" | "empty" | "unavailable";
  fetchedAt?: string; // only when backed by provider fetch evidence
  rangeStart: string;
  rangeEnd: string;
  timeZone: string;
}
```

This is a frontend projection, not a proposed replacement wire protocol. Do not require every existing provider to add these fields. Missing identity or freshness reduces available features instead of manufacturing evidence.

Compute local date differences as calendar dates, not milliseconds divided by 24 hours. Respect all-day calendar boundaries, HA timezone, the integration's today/cutoff behavior, DST, and locale. Refresh relative labels at the next home-local date boundary and on tab visibility return. A client in another timezone must still show the home's collection day.

Parse attributes as untrusted data; escape labels, reject invalid dates/colors, bound record counts, and avoid evaluating JavaScript or templates from configuration. Cache calendar requests by HA connection, selected entities, and range; share in-flight reads between card/badge instances, cancel obsolete requests, and dispose subscriptions on removal. Re-render only when relevant entities, config, theme, locale, or date boundary change.

## Configuration and editor

Proposed configuration, not installable syntax yet:

```yaml
type: custom:waste-schedule-card
entity: sensor.waste_schedule
layout: compact # compact | hero | schedule
days_to_show: 30
max_groups: 5
show_artwork: false
show_updated: true
tap_action:
  action: more-info
```

Keep entity-first setup simple. Advanced setup can select several explicitly named sensor/calendar sources, per-type visibility and display overrides, date range, density, artwork, and action. Default to HA locale; an explicit locale override is optional. Validate config in `setConfig`; visual editor changes use `config-changed`. Supply picker registration, useful preview data, stub config, card size, and Sections grid sizing. Follow the [custom card contract](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/), with any minimum-version compatibility isolated in the HA host adapter rather than the domain model.

Native HA badge example usable with an existing waste sensor today:

```yaml
type: entity
entity: sensor.next_waste_pickup
name: Waste
show_name: true
show_state: true
tap_action:
  action: more-info
```

The displayed state is whatever that sensor publishes; the example does not manufacture a “Tomorrow” calculation. A Tile recipe can use the same entity. Automatic color binding and date grouping are features of the custom components, not promises about built-in cards.

## Repository and delivery

Separate repository `lovelace-waste-schedule-card`; do not add this frontend to CasaRay. Use TypeScript and Lit, with small modules for configuration, HA host access, input adapters, date grouping, shared view model, card, badge, editor, and styles. Reuse the lawn-mower-card repository's established development/release conventions where applicable; do not copy its mower controls, cloud API, or 3D worker.

Build/package behavior should use the existing PowerForge frontend packaging owner. Confirm the current reusable preset before adding a release wrapper. Ship one versioned JavaScript resource that registers the card and badge; artwork/editor may be lazy chunks only if the shared packaging and HACS delivery path preserve them. No new runtime dependency merely to render bins.

### Implementation sequence

- [x] Select descriptive package/element names and presentation family.
- [x] Generate hero and layout/theme concept boards with the built-in image model.
- [x] Define input contracts, ownership, theme behavior, and native HA alternatives.
- [ ] Scaffold the independent frontend repository and shared build configuration.
- [ ] Implement adapters, date grouping, identity rules, and fixture-backed contract tests.
- [ ] Implement compact and schedule layouts, native HA example recipes, and custom badge.
- [ ] Implement opt-in hero artwork and visual editor.
- [ ] Validate in real HA: current/minimum supported versions, Sections/Masonry, 320px/400px/wide/short landscape, dark/light/custom themes, keyboard, long labels, mixed pickups, empty/stale/unavailable, DST, and removal/reconnection.
- [ ] Inspect rendered screenshots and console output after the final changes; verify multiple instances share reads and unload cleanly.
- [ ] Review, package, and publish an installable prerelease; document supported integration versions from tested evidence.

Native badge/Tile usage does not need the two pending integration PRs. Provider-specific colors need the color metadata contract. Device-backed sensor controls are an optional integration feature, not a card prerequisite.

## Image provenance

`design/hero-concept.png` and `design/layouts-concept.png` were generated with the built-in image model on 2026-09-11. The prompts requested readable high-fidelity Home Assistant UI concepts, grouped next-day collections, optional small brown/blue bin artwork for explicit example colors, neutral unknown colors, dark/light/theme variants, and no invented statistics or control actions. These are design references, not runtime screenshots or final icon assets.
