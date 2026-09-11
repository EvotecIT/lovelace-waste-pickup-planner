# Architecture and compatibility

Waste Pickup Planner uses one frontend schedule projection for the card and badge:

```text
HA sensor or calendar → input adapter → source-aware events → home-local date groups → presentation
```

Municipality parsing, aliases, canonical type identity and fetch lifecycle remain in the integration. This frontend neither classifies waste names nor talks directly to providers. Lit handles escaped rendering; configuration cannot contain executable templates.

## Input contracts

| Input | Expected records | Metadata |
| --- | --- | --- |
| Waste Collection Schedule v2 Generic sensor | `upcoming: [{date, type, icon?, picture?}]` | Whole collection labels |
| v3 Generic sensor | Same fields, optionally `type_id`, `color`, `color_source` | Stable type IDs and explicit color provenance |
| Grouped structured records | `upcoming: [{date, collections: [...]}]` | Each collection retains its own metadata |
| Historical fork sensor | `upcoming_pickups: [{date, types: [...]}]` or `next_pickup` | Explicit labels; combined `type` text is never split |
| Home Assistant calendar | Standard calendar event `summary` and `start.date` or `start.dateTime` | Title and date; no inferred type/color |

A present `upcoming` list is authoritative, including an empty list. Unsupported sensor detail formats produce an actionable message. Unknown-state sensors with a valid empty structured list are empty, not unavailable. An explicitly unavailable entity is not treated as a successful empty response.

Malformed sensor records make that source unavailable rather than showing a falsely complete schedule. Record counts, label length, dates, colors and icons are bounded or validated. The adapter accepts only `#RRGGBB` colors and `mdi:…` icons. It ignores provider image URLs; optional bin illustrations are bundled inline SVG.

Each explicitly selected entity is a separate source. Deduplication uses source + date + stable type ID, falling back to the complete label. No registry discovery is performed in this release. Users select one authoritative sensor/calendar per address; the editor explains this requirement. This preserves separate households with identical dates and labels.

## Dates and lifecycle

`YYYY-MM-DD` values are validated by calendar round-trip. All-day events keep their literal date. Timed calendar events require an offset and are projected into Home Assistant's home timezone. Relative day distances use calendar dates, so DST does not shorten or lengthen a collection day.

The visible range starts today and ends before today + `days_to_show`. Integration-supplied today/cutoff behavior is preserved by using only the records the sensor publishes. The controller checks the home date every minute and refreshes after the tab becomes visible again.

A weak map keyed by the authenticated HA connection shares calendar reads between components. Entries include the entity, query range and entity update stamp, with a one-minute cache and a bounded key count. The request range is widened to cover all local-day offsets; the projection applies the exact home-date range.

Removal invalidates pending publications and removes the component timer/listener. HA's supplied `callApi` owns the actual transport, so an already-issued request may finish after removal. A new connection or source configuration clears the local stale-data cache.

States are loading, ready, empty, unavailable and stale. A failed source can retain its last successful events in memory, accompanied by an explicit stale notice. `last_update` is shown only when supplied by a structured sensor; entity `last_updated` is used for request invalidation, never presented as provider freshness.

## Presentation and host integration

The compact, hero and schedule layouts share the same group/chip renderers. The custom badge shares their controller, projection and details dialog. Mixed pickups never inherit one collection's identity as the whole group's identity.

Artwork is optional and decorative. Source/customized colors and explicit card overrides can color a bin. A `default` color may style the corresponding collection icon, but its bin remains neutral. Missing colors also remain neutral.

HA theme variables control card surface, text, border, radius, shadow and primary action color. Layouts wrap long names; interactive controls have a minimum 44px target. The native HTML dialog supplies modal focus handling and Escape dismissal. Urgency appears in localized text.

Both components register picker entries and visual editors. The card implements sizing for Masonry and Sections. Configuration changes use HA's `config-changed` event. The supported host contracts are documented in [custom cards](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/) and [custom badges](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-badge/).

## Build and release ownership

Lit owns rendering, esbuild creates the single JavaScript resource, and the small pack script copies the release payload. Shared PowerForge owns release versioning, merged-PR validation, artifact publication and read-back. This follows the Lawn Mower Card repository's workflow; no mower-specific controls or 3D dependencies are included.

The current supported runtime baseline is Home Assistant 2026.9.1. Sensor v2/v3 and historical-fork schemas have fixture-backed adapter coverage; that is not a claim that every historical HA frontend version was exercised.

## Design references

The images in `design/` were generated before the final name was selected. They retain the earlier working title “Waste Schedule Card”; the original prompts are preserved in `design/prompts.md`. They are concepts, not runtime evidence. Public screenshots under `assets/` show the implemented components with synthetic collection data.
