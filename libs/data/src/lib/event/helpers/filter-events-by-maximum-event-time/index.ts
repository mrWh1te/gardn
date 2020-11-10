import { Event } from '../../../generated'

/**
 * 
 * @param maximumEventTime milliseconds
 */
export const filterEventsByMaximumEventTime = (maximumEventTime: number) => (event: Event): boolean => 
  event.data.eventTime <= maximumEventTime