# Card quality qualification

Waste Pickup Planner targets the Evotec Platinum card standard below.
Qualification is incomplete. This is a self-assessed card standard, separate
from Home Assistant's Integration Quality Scale and official integration ratings.

A release qualifies only when every applicable row has reproducible evidence for
that release's source and shipped JavaScript. A passing unit suite or attractive
preview alone does not qualify it. Record the commit, artifact SHA-256, HA version,
browser version, viewport, scenario, result, and any remaining limitation with
each qualification run. Revalidate affected evidence after source, dependency,
build, or supported HA changes.

## Acceptance ledger

| Area | Required evidence | Current evidence and remaining work |
| --- | --- | --- |
| Data contracts | Preserve complete labels, source identity, all-day dates, home timezone, overrides, and provider timestamps. Exercise malformed and bounded inputs. | `tests/schedule.test.ts` covers the core contracts. Expand malformed calendar and sensor boundary cases where they affect displayed status. |
| Availability | Distinguish loading, empty, unavailable, and stale results. Retain last-known data only for the same connection and source configuration. | Controller tests cover outages, recovery, connection/timezone changes, and pending-response fencing. Browser state transitions remain to be automated. |
| Resource lifetime | Repeated attachment/removal and editor changes release timers/listeners, suppress obsolete results, and keep request volume bounded. | Calendar-cache tests cover shared requests, expiry, revalidation, and pressure. The packaged-browser check below covers repeated attachment/removal, timer/listener release, pending-response fencing, and reopening. Heap retention and installed-HA lifecycle measurements remain open. |
| Types | Strict checking of every production TypeScript module. | `npm run check` uses `strict: true` and includes all `src/**/*.ts`. Dependency declaration checking is skipped; this is not a claim about third-party type quality. |
| Tests | Meaningful unit coverage of data contracts plus browser coverage of components and editors. Report the measured denominator. | The Node suite exercises seven data/localization modules. It does not import components, editors, presentation, or styles, so its coverage percentage is not whole-product coverage. |
| Accessibility | Keyboard-only activation, dialog focus containment and restoration, Escape dismissal, accessible names, readable contrast, zoom/reflow, and non-color status cues. | Preview checks cover Enter activation, Tab/Shift+Tab modal navigation, keyboard pagination across 125 collections, visible focus at 360-pixel width, and Escape focus restoration. Native modal behavior keeps background controls out of the active accessibility tree. Selected text contrast is measured below. Automated browser assertions, the full contrast/zoom matrix, other browser engines, and assistive-technology checks remain open. |
| Responsive layout | Compact, hero, schedule, badge, and dialog at narrow/wide widths and short landscape height; complete long labels and overflow navigation. | The standalone preview supplies representative layouts and long labels. Automate the viewport matrix and verify it in HA. |
| Themes and localization | Light, dark, and custom themes; English/Polish labels; dates independent of viewer timezone; no untranslated user-facing errors in supported languages. | Date tests cover home timezone, DST, and localized provider timestamps. Source failures use translated reasons rather than upstream error text. Preview checks cover an existing error switching from English to Polish, narrow dark cards and a wide light dialog. Full theme/localization and installed-HA checks remain open. |
| Configuration | YAML and visual editors round-trip supported options, preserve unknown supported values, reject unsafe input, and report actionable errors. | Config validation has focused tests. HA editor round-trip and invalid-input interaction proof remain open. |
| Privacy and security | No provider credentials, external artwork requests, template execution, or unsafe navigation; bounded source inputs and no sensitive diagnostic leakage. | Adapters and config validation constrain inputs; the bundle includes artwork. Browser network inspection and dependency/artifact audit remain open. |
| Compatibility | Verify the declared minimum HA version, current stable HA, and supported desktop/mobile browser engines. Record beta results separately. | `hacs.json` declares HA 2026.9.1. Installed-host and cross-browser qualification remain open. |
| Delivery | Build from the lockfile, keep the committed HACS resource identical to source output, verify the packed payload, and install the actual release artifact. | CI runs tests, type checking, packing, and a generated-resource diff check. Published-artifact installation and upgrade proof remain open. |
| Upgrade safety | Upgrade from the previous release without losing card/badge configuration, source identity, customizations, or editor behavior. | Requires an installed HA dashboard and released artifacts; source checks do not establish this. |
| Performance | Record bundle size, cold/warm rendering time, request counts, update behavior, and retained resources for representative schedules and multiple instances. | Shared calendar reads and input limits have tests. Establish measured browser budgets before enforcing them. |
| Documentation | Accurate install, configuration, source contracts, availability behavior, limitations, and support information. | README and design/API docs describe current behavior. Check instructions against the qualified release and installed HA host. |

## Reproduce source and artifact checks

Use Node.js 24, matching CI:

```sh
npm ci
npm test
npm run check
npm run pack
git diff --exit-code -- waste-pickup-planner-card.js
```

The final command catches source changes that were not reflected in the committed
resource used by HACS. Rebuild and commit that resource with its source changes.
The `release/` folder is disposable packer output, not evidence of publication.

For a data-module coverage report without additional tooling:

```sh
node --experimental-strip-types --experimental-test-coverage --test tests/*.test.ts
```

Do not describe this report as coverage of the whole card. Rendered components
and editors need real browser tests; mocks of Lit or HA custom elements cannot
establish compatibility with Home Assistant.

## Browser qualification matrix

Run `npm run preview` for synthetic fixtures. Check compact, hero, schedule, and
badge in each relevant combination:

- 360-pixel narrow view, 1280-pixel desktop view, and short landscape; 200% zoom.
- Available, empty, unavailable, stale, long labels, and Polish fixtures.
- Light, dark, and custom theme; focus indicators and readable warning text.
- Keyboard open, Tab/Shift+Tab within the dialog, Escape, close button, and focus
  restoration. Exercise pagination with more than 100 collections.
- Repeated attach/detach, pending calendar responses, source replacement, and
  connection/timezone changes; verify no duplicate timers or stale publication.
- HA visual editors, dashboard sections, badge placement, more-info, and local
  navigation against the actual HA host.

The preview's **125 collections** fixture exercises bin pages and both dialog pages. The first
page contains collections 001â€“100 and the second contains 101â€“125. Use the
independent language selector to inspect each state in English and Polish.

### Measured preview text contrast

The stale notice and action use the theme's primary text color. A warning-colored
border supplements the notice text, and hover adds a translucent text-color tint
over the card background. This avoids a fixed light hover background in dark themes.

Browser-computed colors in the supplied preview themes give these ratios:

| Preview theme | Stale notice | Hovered action | Secondary and error text |
| --- | ---: | ---: | ---: |
| Dark | 12.95:1 | 10.44:1 | 6.52:1 |
| Light | 14.58:1 | 12.55:1 | 5.15:1 |
| Custom | 10.83:1 | 8.67:1 | 6.57:1 |

These measurements use the rendered foreground/background colors and composite
the 8% hover tint over the card background before calculating relative luminance.
All measured pairs exceed the [4.5:1 minimum for normal text](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
They do not qualify other text, focus indicators, arbitrary user themes, or the HA
host. Recheck affected pairs when theme colors or styles change.

Inspect screenshots and browser errors as well as assertions. Keep reusable
browser installation and session management in HtmlTinkerX; keep card-specific
fixtures and assertions here. Preview results must remain distinct from tests of
the real HA frontend and from installation of the published artifact.


## Packaged-browser lifecycle evidence

On source `129b010cd1c54ea1b7ac01d487f62523b0764ba6`, the committed resource
with SHA-256 `B285C075390CFD15A0F28432C979BC0229D81681DCF7B79AA692B642BB90DAC1`
passed the following synthetic checks in Chromium 154 on Windows at 1280 × 720.
The browser loaded the JavaScript resource through the loopback preview server.

| Scenario | Observed result |
| --- | --- |
| Reattach the same card 20 times, then repeat for the badge | All 40 attachments render the synthetic schedule. Each attachment owns one interval and one document visibility listener; both measured counts return to zero after each removal. |
| Card and badge share a pending calendar read, then both are removed | One calendar API call is made. Completing the response leaves both detached rendered trees unchanged. |
| Reattach both instances after that response completes | Both render the returned collection, reusing the shared response; the API call count remains one. |
| Inspect the restored preview and browser log | Hero, compact, schedule, and badge remain rendered; no browser warnings or errors are reported. |

For the resource check, instrument interval creation/removal and document
`visibilitychange` registration/removal before attaching the test instances.
Await each component's render completion between attachment and removal. Restore
the original browser functions and remove the test instances when finished.
For the pending-read check, give the card and badge the same synthetic HA connection
and unresolved calendar response; resolve it after removal, then reattach both.

These observations cover the measured timer/listener ownership and rendered result
of the shipped bundle. They do not measure garbage collection or total retained
heap, prove cancellation of HA's shared HTTP transport, or qualify installed HA,
other browser engines, editor changes, or an upgrade from a published release.

## Native Home Assistant bin controls

The resource with SHA-256 `D83ECFE81E273BE1B1068C4ABD8942B5D5A4EB6A4D2B864BB7613DA1F7E2AB9F`
was exercised in an isolated Home Assistant 2026.9.4 instance with synthetic data.
The checks covered the actual visual editor and card, at a 1270 × 720 desktop
viewport and a 390 × 844 mobile viewport, with light and dark host themes.

- Two differently named bins sharing one category and collection date remain visible.
- Selecting one named bin creates an override scoped to its source and original name.
- Adding the first bin resets the picker, allowing the next bin to be selected directly.
- Color and display-name changes update the preview; hiding one bin leaves the other visible.
- Resetting the local color restores integration color without removing the display name.
- Per-bin visibility reflects inherited category settings; a local choice can reveal a hidden bin.
- Category color reset preserves each bin's integration fallback and reports differing colors.
- The source selector offers structured sensors and calendars, excluding ordinary date-keyed sensors.
- The Manage bins action opens the native Waste Collection Schedule integration page.
- Changing a shared bin color in the integration prototype updates the combined sensor and card.
- The badge uses the same bin controls and removes hidden collections from its preview.

The final remediation was checked in the dark desktop/mobile editor, and the
browser reported no errors or warnings during those interactions. Light-theme
checks preceded the inheritance/picker fixes; the final three screenshots below
show the corrected bundle in the dark theme.

[Desktop editor](../assets/bin-editor.jpg), [mobile editor](../assets/bin-editor-mobile.jpg),
and [dark overview](../assets/bin-overview-dark.jpg) show those synthetic states.
The integration controls were tested against its local v3 prototype; they do not
establish upstream acceptance or installation of the released card through HACS.

## Overview and simplified editor

The resource with SHA-256 `6612E16DBBC20F3A4C87D1D3A32D795B3AEF4783A2D7FCE7474770A80F5BB661`
was exercised in an isolated Home Assistant 2026.9.4 instance with synthetic sensors
and a calendar. Native checks covered English/light and Polish/dark interfaces,
1270 × 720 and 1440 × 1000 desktop views, and 390 × 844 and 320 × 568 mobile views.

- The bin overview preserves separate source/bin identities after display-name changes.
- Selecting a bin filters the upcoming list and schedule dialog; Escape closes the dialog.
- Identical labels from two addresses have source subtitles and independent filters.
- Sensor and calendar bins appear in the ordinary editor. Hidden bins remain editable.
- Local color reset restores source metadata; a calendar without a color stays neutral.
- Only one bin editing panel opens at a time. Saved name and scope survive reopening.
- Editing the title preserves implicit appearance defaults rather than saving unrelated fields.
- Native, Modern, and Minimal cards render alongside the existing compact card and badge.
- The badge retains native content sizing for long labels and unavailable sources.
- Bin editing buttons announce the visible alias and source in English and Polish.

[Native overview](../assets/overview-native-dark.png),
[desktop editor](../assets/overview-editor.png), and
[mobile editor](../assets/overview-editor-mobile.png) show the actual HA frontend.
The standalone preview additionally covered 125-bin pagination, long labels,
localized stale/unavailable states, and an 844 × 390 landscape viewport. A fresh
native source-details smoke check and the final preview reported no browser errors.
Two earlier native-editor console entries contained opaque HA objects, without
an actionable stack trace; these are not evidence of an error-free entire session.

This is candidate-bundle proof, not a published release, a HACS installation,
or a complete qualification of arbitrary themes, browser engines, heap retention,
and assistive technology. The overview discovers bins in supplied records within
the configured range; it does not establish a permanent physical-bin inventory.
