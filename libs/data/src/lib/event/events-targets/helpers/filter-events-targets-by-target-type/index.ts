import { EventTargetType } from './../../../../generated';
import { DBEventsTargets } from './../../interface';

export const filterEventsTargetsByTargetType = 
  (targetType: EventTargetType) =>
    ((eventsTargets: DBEventsTargets) => eventsTargets.eventTargetType === targetType)