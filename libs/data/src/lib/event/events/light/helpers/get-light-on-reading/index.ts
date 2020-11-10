import { EventType, SortDirection } from './../../../../../generated'
import { eventsSelectOneByType } from '../../../helpers/events-select-one-by-type'
import { LooseEvent } from '../../../../types'
import { sortEventsByEventTime } from '../../../../helpers/sort-events-by-event-time';

export const getLightOnReading = (events: Partial<LooseEvent>[]): boolean => {
  const sortedEvents = [...events];
  sortedEvents.sort(sortEventsByEventTime(SortDirection.Descending))

  const event = eventsSelectOneByType(sortedEvents, EventType.LightChange) // selects first find, hence sort 1st

  if (event.data.__typename === 'LightEventData') {
    return event.data.lightOn
  }

  throw new Error('getLightOnReading() unmatched __typename')
}