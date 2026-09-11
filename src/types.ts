export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_updated?: string;
}
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  config: { time_zone: string };
  locale?: { language?: string };
  language?: string;
  connection: object;
  callApi<T>(method: string, path: string): Promise<T>;
}
export interface CollectionEvent {
  sourceId: string;
  entityId: string;
  date: string;
  label: string;
  typeId?: string;
  icon?: string;
  color?: string;
  colorSource?: "source" | "customize" | "default";
}
export interface TypeOverride {
  type: string;
  name?: string;
  color?: string;
  icon?: string;
  hidden?: boolean;
}
export interface CardConfig {
  type: string;
  entity?: string;
  entities?: string[];
  title?: string;
  layout?: "compact" | "hero" | "schedule";
  days_to_show?: number;
  max_groups?: number;
  show_artwork?: boolean;
  show_updated?: boolean;
  locale?: string;
  overrides?: TypeOverride[];
  tap_action?: {
    action: "details" | "more-info" | "navigate" | "none";
    navigation_path?: string;
  };
}
export interface ScheduleSnapshot {
  events: CollectionEvent[];
  status: "loading" | "ready" | "stale" | "empty" | "unavailable";
  rangeStart: string;
  rangeEnd: string;
  timeZone: string;
  fetchedAt?: string;
  messages: string[];
}
export interface DateGroup {
  date: string;
  events: CollectionEvent[];
}
