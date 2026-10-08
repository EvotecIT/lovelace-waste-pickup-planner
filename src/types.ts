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
  /** Original provider label preserves bin identity after a local display-name override. */
  originalLabel?: string;
  typeId?: string;
  icon?: string;
  color?: string;
  colorSource?: "source" | "customize" | "default";
}
export interface TypeOverride {
  type: string;
  source?: string;
  label?: string;
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
  layout?: "compact" | "hero" | "schedule" | "overview";
  appearance?: "native" | "modern" | "minimal";
  density?: "comfortable" | "compact";
  show_source?: boolean;
  days_to_show?: number;
  max_groups?: number;
  show_artwork?: boolean;
  show_updated?: boolean;
  show_manage_bins?: boolean;
  locale?: string;
  overrides?: TypeOverride[];
  tap_action?: {
    action: "details" | "more-info" | "navigate" | "none";
    navigation_path?: string;
  };
}
export interface SourceIssue {
  source: string;
  reason: "sourceUnavailable" | "sourceUnsupported" | "sourceInvalid" | "sourceLoadFailed";
}
export interface ScheduleSnapshot {
  events: CollectionEvent[];
  status: "loading" | "ready" | "stale" | "empty" | "unavailable";
  rangeStart: string;
  rangeEnd: string;
  timeZone: string;
  fetchedAt?: string;
  messages: SourceIssue[];
}
export interface DateGroup {
  date: string;
  events: CollectionEvent[];
}
