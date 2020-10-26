import { BaseDbModel, EventType, Event, EventTargetType } from '../../generated';

export interface DBEventsTargets extends BaseDbModel {
  eventType: EventType,
  eventDataId: Event['id'],

  eventTargetType: EventTargetType,
  eventTargetId: number
}