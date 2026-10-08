import type { SourceIssue } from "./types.ts";

const en = {
  title: "Waste collection",
  next: "Next collection",
  schedule: "Collection schedule",
  close: "Close",
  loading: "Loading schedule…",
  empty: "No collections in this date range",
  partialEmpty: "No dates from the available sources",
  unavailable: "Schedule unavailable",
  stale: "Some sources are unavailable. Dates may be out of date.",
  staleBadge: "Out of date",
  collections: "collections",
  updated: "Provider updated",
  details: "View schedule",
  manageBins: "Manage bins",
  today: "Today",
  more: "more",
  previousPage: "Previous page",
  nextPage: "Next page",
  sourceUnavailable: "Source unavailable. Check the entity in Home Assistant.",
  sourceUnsupported: "Select a sensor with Generic details or a calendar.",
  sourceInvalid: "Invalid collection records. Check the source integration.",
  sourceLoadFailed: "Could not load this source. Check the entity and connection in Home Assistant.",
};
const pl: typeof en = {
  title: "Odbiór odpadów",
  next: "Najbliższy odbiór",
  schedule: "Harmonogram odbioru",
  close: "Zamknij",
  loading: "Ładowanie harmonogramu…",
  empty: "Brak odbiorów w tym zakresie dat",
  partialEmpty: "Brak terminów z dostępnych źródeł",
  unavailable: "Harmonogram niedostępny",
  stale: "Niektóre źródła są niedostępne. Terminy mogą być nieaktualne.",
  staleBadge: "Nieaktualne",
  collections: "frakcje",
  updated: "Aktualizacja źródła",
  details: "Zobacz harmonogram",
  manageBins: "Zarządzaj pojemnikami",
  today: "Dzisiaj",
  more: "więcej",
  previousPage: "Poprzednia strona",
  nextPage: "Następna strona",
  sourceUnavailable: "Źródło niedostępne. Sprawdź encję w Home Assistant.",
  sourceUnsupported: "Wybierz sensor z danymi Generic lub kalendarz.",
  sourceInvalid: "Nieprawidłowe dane odbiorów. Sprawdź integrację źródłową.",
  sourceLoadFailed: "Nie udało się wczytać źródła. Sprawdź encję i połączenie w Home Assistant.",
};
export const strings = (locale: string): typeof en =>
  locale.toLowerCase().startsWith("pl") ? pl : en;

export const sourceMessage = (issue: SourceIssue, locale: string): string =>
  `${issue.source}: ${strings(locale)[issue.reason]}`;
