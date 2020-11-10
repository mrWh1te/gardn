import { DBEventsTargets } from './../../interface';

export const filterByTargetId = 
  (targetId: DBEventsTargets['eventTargetId']) => 
    ((eventsTargets: DBEventsTargets) => eventsTargets.eventTargetId === targetId)