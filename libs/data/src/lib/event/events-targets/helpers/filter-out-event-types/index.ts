import { EventType } from './../../../../generated';

export const filterOutEventTypes = (excludeEventTypes: EventType[]) => 
  (eventsTargetsRecord : {eventType: EventType}) => 
    !excludeEventTypes.some(excludeEventType => eventsTargetsRecord.eventType === excludeEventType)