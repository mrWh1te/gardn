import { DBEventsTargets } from './../../interface';

export const filterEventsTargetsByTargetId = 
  (targetId: DBEventsTargets['eventTargetId']) => 
    ((eventsTargets: DBEventsTargets) => eventsTargets.eventTargetId === targetId)