import { EventType } from './../../../../generated';
// import { DBEventsTargets } from './../../interface';

export const filterByEventType = 
  (eventType: EventType) =>
    ((eventsTargets: {eventType: EventType}) => eventsTargets.eventType === eventType)