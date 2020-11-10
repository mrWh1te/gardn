import { Event, SortDirection } from './../../../generated'

export const sortEventsByEventTime = (sortDirection: SortDirection = SortDirection.Ascending) => 
  (a: Event, b: Event) => {
    if (sortDirection === SortDirection.Descending) {
      return b.data.eventTime - a.data.eventTime
    }

    // default ascending
    return a.data.eventTime - b.data.eventTime
  }