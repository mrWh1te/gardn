import { EventTargetType } from './../../../../generated';
import { DBEventsTargets } from './../../interface';

export const filterByTargetType = 
  (targetType: EventTargetType) =>
    ((eventsTargets: DBEventsTargets) => eventsTargets.eventTargetType === targetType)