import { sensorEvents, calendarEvents } from "./adapters.ts";
import { readCalendar } from "./calendar-cache.ts";
import { sourceIds } from "./config.ts";
import { addDays, homeDate } from "./dates.ts";
import { projectEvents } from "./schedule.ts";
import type {
  CardConfig,
  CollectionEvent,
  HomeAssistant,
  ScheduleSnapshot,
} from "./types.ts";
export class ScheduleController {
  private generation = 0;
  private cache = new Map<string, CollectionEvent[]>();
  private connection?: object;
  private timeZone?: string;
  reset(): void {
    this.generation++;
    this.cache.clear();
    this.connection = undefined;
    this.timeZone = undefined;
  }
  cancel(): void {
    this.generation++;
  }
  async update(
    hass: HomeAssistant,
    config: CardConfig,
    publish: (value: ScheduleSnapshot) => void,
  ): Promise<void> {
    if (this.connection !== hass.connection || this.timeZone !== hass.config.time_zone) {
      this.cache.clear();
      this.connection = hass.connection;
      this.timeZone = hass.config.time_zone;
    }
    const generation = ++this.generation;
    const timeZone = hass.config.time_zone,
      rangeStart = homeDate(new Date(), timeZone),
      rangeEnd = addDays(rangeStart, config.days_to_show!);
    const base = { rangeStart, rangeEnd, timeZone, messages: [] as string[] };
    publish({ ...base, status: "loading", events: [] });
    let failures = 0,
      successes = 0,
      cachedSources = 0;
    const events: CollectionEvent[] = [],
      updates: string[] = [];
    await Promise.all(
      sourceIds(config).map(async (id) => {
        try {
          const entity = hass.states[id];
          if (
            !entity ||
            entity.state === "unavailable" ||
            (id.startsWith("calendar.") && entity.state === "unknown")
          )
            throw new Error(`${id} is unavailable.`);
          let entries: CollectionEvent[];
          if (id.startsWith("calendar."))
            entries = calendarEvents(
              await readCalendar(hass, id, rangeStart, rangeEnd),
              id,
              timeZone,
            );
          else {
            const result = sensorEvents(entity);
            if (!result.supported)
              throw new Error(
                `${id}: select a sensor with Generic details or a calendar.`,
              );
            if (result.invalid)
              throw new Error(`${id} contains invalid collection records.`);
            entries = result.events;
            if (result.fetchedAt) updates.push(result.fetchedAt);
          }
          if (generation !== this.generation) return;
          this.cache.set(id, entries);
          events.push(...entries);
          successes++;
        } catch (error) {
          if (generation !== this.generation) return;
          failures++;
          base.messages.push(
            error instanceof Error
              ? error.message
              : `${id} could not be loaded.`,
          );
          if (this.cache.has(id)) cachedSources++;
          events.push(...(this.cache.get(id) ?? []));
        }
      }),
    );
    if (generation !== this.generation) return;
    const projected = projectEvents(events, config, rangeStart, rangeEnd);
    publish({
      ...base,
      events: projected,
      status: failures
        ? cachedSources || successes
          ? "stale"
          : "unavailable"
        : projected.length
          ? "ready"
          : "empty",
      fetchedAt: updates.sort((a, b) => Date.parse(a) - Date.parse(b))[0],
    });
  }
}
