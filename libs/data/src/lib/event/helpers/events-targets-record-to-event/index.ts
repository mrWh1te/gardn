import { DBEventsTargets } from './../../events-targets/interface';
import { Event } from './../../../generated';

export const eventsTargetsRecordToEvent = (eventsTargetsRecord: DBEventsTargets): Event => ({
  id: eventsTargetsRecord.eventDataId,
  dateCreated: eventsTargetsRecord.dateCreated,
  type: eventsTargetsRecord.eventType
})