import { EventType } from './../../../../generated';
import { DBEventsTargets } from './../../interface';

export const filterByEventType = 
  (eventType: EventType) =>
    ((eventsTargets: DBEventsTargets) => eventsTargets.eventType === eventType)