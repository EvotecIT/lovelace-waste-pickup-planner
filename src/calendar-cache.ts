import type { HomeAssistant } from "./types.ts";
type Entry = { promise: Promise<unknown>; expires: number; pending: boolean; stamp?: string };
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
  const key = JSON.stringify([entityId, start, end]);
  const stamp = hass.states[entityId]?.last_updated;
  const current = cache.get(key);
  if (current?.pending) {
    if (current.stamp === stamp) return current.promise;
    // Serialize revalidation behind the existing transport rather than publishing
    // its pre-change result or starting overlapping requests for this range.
    const revalidate = () => readCalendar(hass, entityId, start, end);
    return current.promise.then(revalidate, revalidate);
  }
  if (current && current.stamp === stamp && current.expires > Date.now())
    return current.promise;
  for (const [k, entry] of cache)
    if (!entry.pending && entry.expires <= Date.now()) cache.delete(k);
  if (!cache.has(key) && cache.size >= 100) {
    const settled = [...cache].find(([, entry]) => !entry.pending);
    if (settled) cache.delete(settled[0]);
    else return Promise.reject(new Error("Too many calendar requests are pending."));
  }
  // The UTC envelope includes every home-local date even across DST or UTC+14.
  const query = new URLSearchParams({
    start: `${start}T00:00:00+14:00`,
    end: `${end}T00:00:00-12:00`,
  });
  const promise = hass.callApi<unknown>(
    "GET",
    `calendars/${encodeURIComponent(entityId)}?${query}`,
  );
  const entry: Entry = { promise, expires: Infinity, pending: true, stamp };
  cache.set(key, entry);
  void promise.then(
    () => { entry.pending = false; entry.expires = Date.now() + 60000; },
    () => { if (cache!.get(key) === entry) cache!.delete(key); },
  );
  return promise;
}
