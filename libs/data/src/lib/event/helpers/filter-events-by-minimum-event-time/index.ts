import { Event } from '../../../generated'

/**
 * 
 * @param minimumEventTime milliseconds
 */
export const filterEventsByMinimumEventTime = (minimumEventTime: number) => (event: Event): boolean => 
  event.data.eventTime >= minimumEventTime