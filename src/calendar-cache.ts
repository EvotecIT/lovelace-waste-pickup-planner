import type { HomeAssistant } from "./types.ts";
type Entry = { promise: Promise<unknown>; expires: number };
const connections = new WeakMap<object, Map<string, Entry>>();
/** Share bounded, short-lived reads across cards and badges on the same authenticated connection. */
export function readCalendar(
  hass: HomeAssistant,
  entityId: string,
  start: string,
  end: string,
): Promise<unknown> {
  let cache = connections.get(hass.connection);
  if (!cache) {
    cache = new Map();
    connections.set(hass.connection, cache);
  }
  const key = JSON.stringify([
    entityId,
    start,
    end,
    hass.states[entityId]?.last_updated,
  ]);
  const current = cache.get(key);
  if (current && current.expires > Date.now()) return current.promise;
  for (const [k, entry] of cache)
    if (entry.expires <= Date.now()) cache.delete(k);
  if (cache.size >= 100) cache.delete(cache.keys().next().value!);
  // The UTC envelope includes every home-local date even across DST or UTC+14.
  const query = new URLSearchParams({
    start: `${start}T00:00:00+14:00`,
    end: `${end}T00:00:00-12:00`,
  });
  const promise = hass.callApi<unknown>(
    "GET",
    `calendars/${encodeURIComponent(entityId)}?${query}`,
  );
  const entry = { promise, expires: Date.now() + 60000 };
  cache.set(key, entry);
  promise.catch(() => {
    if (cache!.get(key) === entry) cache!.delete(key);
  });
  return promise;
}
