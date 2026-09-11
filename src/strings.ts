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
  today: "Today",
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
  today: "Dzisiaj",
};
export const strings = (locale: string): typeof en =>
  locale.toLowerCase().startsWith("pl") ? pl : en;
