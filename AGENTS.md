# Waste Pickup Planner

Home Assistant Lovelace custom card and badge, in TypeScript and Lit, that
shows upcoming waste collections grouped by date. Distributed through HACS as
one JavaScript resource.

## Layout

- `src/`: card and badge source. `waste-pickup-planner-card.ts` is the entry
  point. Shared logic: `adapters.ts`, `schedule.ts`, `dates.ts`,
  `collections.ts`, `calendar-cache.ts`, `presentation.ts`. Editor: `editor*.ts`
  and `ha-editor.ts`.
- `tests/`: Node test runner tests (`*.test.ts`).
- `demo/` and `server.mjs`: standalone preview on `http://127.0.0.1:4174`
  (`PORT` overrides).
- `blueprints/automation/`: put-out reminder blueprint.
- `docs/design-and-api.md`: input contracts, date rules and architecture.
  `docs/quality.md`: quality checklist.
- `assets/`: reviewed README and social artwork.

## Build and test

```sh
npm ci
npm test          # node --experimental-strip-types --test (CI uses Node 24)
npm run check     # tsc --noEmit
npm run pack      # build, then copy release files into release/
npm run preview   # build and serve the standalone demo
```

- Release-only: merging a PR runs `.github/workflows/release.yml` (PowerForge
  Home Assistant release), which bumps `package.json` and tags the release.
  Don't bump the version by hand.

## Generated files

`waste-pickup-planner-card.js` is built from `src/` by `build.mjs` (esbuild).
Never hand-edit it, but commit it rebuilt with every source change: HACS serves
it from the repository and CI fails if `npm run pack` leaves a diff.

## Conventions

- Provider parsing and waste classification belong to the integration. Read
  sensors and calendars only through the supplied `hass` object.
- Cards and badges share adapters, date calculations, caching and projection.
  Rendering and editor modules stay separate.
- Preserve complete labels and source identity. Never infer a bin colour from a
  waste name or a category default palette.
- Respect the Home Assistant home timezone, all-day calendar dates, themes and
  locale. Keep empty, unavailable and stale schedules distinct.
- Treat configuration as untrusted: no HTML or template evaluation and no
  external asset requests. Only `#RRGGBB` colours and `mdi:` icons are accepted.

## Gotchas

- Check visual and editor changes in a real Home Assistant dashboard as well as
  the standalone preview.
- Keep screenshots and scratch files in the ignored `output/` or `.validation/`
  folders; only reviewed artwork goes in `assets/`.
