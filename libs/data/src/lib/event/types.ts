import { Event, EventData } from './../generated'

/**
 * Just like the Event type, generated, except more relaxed aka "loose" in typing via Partials
 */
export type LooseEvent = Omit<Partial<Event>, 'data'> & {
  data: Partial<EventData> // don't require 'dateCreated'
}