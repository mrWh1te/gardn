import { DeepPartial } from '@gardn/helpers';
import { Event, SortDirection } from './../../../../../generated';
import { sortEventsByEventTime } from '../../../../helpers/sort-events-by-event-time';

export const getLightEventsTotalLightOnInMilliSeconds = (events: DeepPartial<Event>[], calculateLightOnSinceUnixTimestamp?: number): number => {
  // 1. sort events by eventtime ascending
  const eventsCopy = [...events]
  eventsCopy.sort(sortEventsByEventTime(SortDirection.Ascending))

  // 2. get the initial timestamp for the first event (after sorting ascending)
  const initialEventTimestamp = calculateLightOnSinceUnixTimestamp ?? eventsCopy[0].data.eventTime as any as number

  // 3. calculate total light on
  const totalLightOn = events.reduce((millisecondsLightOn, event, i, array) => {
    const eventTime = event.data.eventTime as any as number // todo expand upon DeepPartial to try maintain types better with optionality

    if (event.data['previousLightOn'] == true) {
      // true -> true : add
      // true -> false : add

      // 1st event, no previous eventTime to compare to, so limit to 24 hours ago
      let timeDelta // difference in time to add
      if (i === 0) {
        timeDelta = eventTime - initialEventTimestamp;
      } else {
        timeDelta = eventTime - (array[i-1].data.eventTime as any as number) // todo replace as notation
      }

      
      millisecondsLightOn += timeDelta
    } else {
      // special case, check last Event for previousLightOn === false, where we turned the light On, and have to turn it off therefore accruing light on time
      // that is missed in the calculations above
      if (i === array.length - 1 && event.data['lightOn'] === true) {
        millisecondsLightOn += new Date().getTime() - eventTime
      }
    }
    
    return millisecondsLightOn
  }, 0)


  return totalLightOn
}
