import { BaseEventData, EventTargetType, EventType, Resolvers } from '../generated';
import { eventDataToEvent } from './helpers/event-data-to-event';
import { eventDataTypeResolver } from './helpers/event-data-type-resolver';
import { sortEventsByEventTime } from './helpers/sort-events-by-event-time';
import { getEventData } from './helpers/get-event-data';
import { filterEventsByMinimumEventTime } from './helpers/filter-events-by-minimum-event-time';
import { filterEventsByMaximumEventTime } from './helpers/filter-events-by-maximum-event-time';
import { filterOutEventTypes } from './events-targets/helpers/filter-out-event-types';
import { filterByEventType } from './events-targets/helpers/filter-by-event-type';

/**
 * Data is stored in memory for development
 */
export const eventResolvers: Resolvers = {
  Query: {
    event: (_, { eventTargetId, eventTargetType, eventType, excludeEventTypes, sortDirection, eventTimeMinimum, eventTimeMaximum }, { dataSources }) => {
      if (eventType !== undefined && excludeEventTypes !== undefined && excludeEventTypes.some(excludeEventType => excludeEventType === eventType)) {
        return null
      }

      if (eventTimeMinimum !== undefined && eventTimeMaximum !== undefined && eventTimeMaximum === eventTimeMinimum) {
        return null
      }

      let eventsTargetsRecords = dataSources.eventsTargets.filterByTargetTypeAndTargetId({ eventTargetId, eventTargetType });

      // excluding events by event type(s)?
      if (excludeEventTypes) {
        eventsTargetsRecords = eventsTargetsRecords.filter(filterOutEventTypes(excludeEventTypes))
      }

      // focusing event type?
      if (eventType) {
        eventsTargetsRecords = eventsTargetsRecords.filter(filterByEventType(eventType))
      }

      // get event data (eventTime) of each event for sorting
      let events = eventsTargetsRecords.map(eventsTargetsRecord => {
        const data = getEventData(dataSources, eventsTargetsRecord.eventType, eventsTargetsRecord.eventDataId)
        const event = eventDataToEvent(data, eventsTargetsRecord.eventType);
        return event
      })

      // minimum eventTime?
      if (eventTimeMinimum) {
        events = events.filter(filterEventsByMinimumEventTime(eventTimeMinimum))
      }

      // maximum eventTime?
      if (eventTimeMaximum) {
        events = events.filter(filterEventsByMaximumEventTime(eventTimeMaximum))
      }

      // sort in descending order (latest at the start, oldest at the end)
      events.sort(sortEventsByEventTime(sortDirection))

      // limit 1
      return events[0]
    },
    events: (_, { eventTargetId, eventTargetType, eventType, excludeEventTypes, limitPerType, sortDirection, eventTimeMinimum, eventTimeMaximum }, { dataSources }) => {
      if (eventType !== undefined && excludeEventTypes !== undefined && excludeEventTypes.some(excludeEventType => excludeEventType === eventType)) {
        return []
      }

      if (eventTimeMinimum !== undefined && eventTimeMaximum !== undefined && eventTimeMaximum === eventTimeMinimum) {
        return []
      }

      // get recent events for a target
      let eventsTargetsRecords

      if (eventType) {
        // filter by event type too
        eventsTargetsRecords = dataSources.eventsTargets.filterByTargetAndEventType({ eventTargetId, eventTargetType, eventType });

        // excluding events by event type(s)?
        if (excludeEventTypes) {
          eventsTargetsRecords = eventsTargetsRecords.filter(filterOutEventTypes(excludeEventTypes))
        }

        // get event time of each event for sorting
        let events = eventsTargetsRecords.map(eventsTargetsRecord => {
          const data = getEventData(dataSources, eventsTargetsRecord.eventType, eventsTargetsRecord.eventDataId)
          const event = eventDataToEvent(data, eventsTargetsRecord.eventType)
          return event;
        })

        // minimum eventTime?
        if (eventTimeMinimum) {
          events = events.filter(filterEventsByMinimumEventTime(eventTimeMinimum))
        }

        // maximum eventTime?
        if (eventTimeMaximum) {
          events = events.filter(filterEventsByMaximumEventTime(eventTimeMaximum))
        }

        // sort in descending order (latest at the start, oldest at the end)
        events.sort(sortEventsByEventTime(sortDirection))

        // limit?
        if (limitPerType) {
          return events.slice(0, limitPerType)
        }

        return events;
      } else {
        eventsTargetsRecords = dataSources.eventsTargets.filterByTargetTypeAndTargetId({ eventTargetId, eventTargetType });

        // excluding events by event type(s)?
        if (excludeEventTypes) {
          eventsTargetsRecords = eventsTargetsRecords.filter(filterOutEventTypes(excludeEventTypes))
        }

        // get event data (eventTime) of each event for sorting
        let events = eventsTargetsRecords.map(eventsTargetsRecord => {
          const data = getEventData(dataSources, eventsTargetsRecord.eventType, eventsTargetsRecord.eventDataId)
          const event = eventDataToEvent(data, eventsTargetsRecord.eventType);
          return event
        })

        // minimum eventTime?
        if (eventTimeMinimum) {
          events = events.filter(filterEventsByMinimumEventTime(eventTimeMinimum))
        }

        // maximum eventTime?
        if (eventTimeMaximum) {
          events = events.filter(filterEventsByMaximumEventTime(eventTimeMaximum))
        }

        // if limitPerType, build data structure { EventType.Water: [Event, Event,...], EventType.PlantStageChange: []}
        if (limitPerType) {
          const eventsMapByType: Record<keyof EventType, Event> = events.reduce((accumulator, event) => {
            if (!accumulator[event.type]) {
              accumulator[event.type] = []
            }
            accumulator[event.type].push(event)

            return accumulator
          }, {})

          const eventsMapByTypeKeys = Object.keys(eventsMapByType)
          for (let i = 0; i < eventsMapByTypeKeys.length; i++) {
            eventsMapByType[eventsMapByTypeKeys[i]].sort(sortEventsByEventTime(sortDirection))
            eventsMapByType[eventsMapByTypeKeys[i]] = eventsMapByType[eventsMapByTypeKeys[i]].slice(0, limitPerType) // limit each type
          }

          return [].concat(...Object.values(eventsMapByType)) // flatten array
        } else {
          // no limiting
          events.sort(sortEventsByEventTime(sortDirection))

          return events;
        }
      }
    }
  },
  Event: {
    targets: ({ id, type }, _, { dataSources }) => {
      const eventsTargetsWithMatchingEventDataId = dataSources.eventsTargets.byEventDataIdAndEventType({eventDataId: id, eventType: type})

      const targets = eventsTargetsWithMatchingEventDataId.map(eventTargetRecord => {
        switch (eventTargetRecord.eventTargetType) {
          case EventTargetType.Plant:
            return dataSources.plant.byId({ id: eventTargetRecord.eventTargetId })
        }
      })

      return targets;
    },
    data: ({ id, type, data }, _, { dataSources }) => {
      if (typeof data === 'object' && data !== null && Object.keys(data).length > 0) {
        return data
      }

      const record: BaseEventData = getEventData(dataSources, type, id);
      if (record) {
        return record
      }

      throw new Error('Event data not found')
    }
  },
  EventTarget: {
    __resolveType() {
      return 'Plant';
    }
  },
  EventData: {
    __resolveType: eventDataTypeResolver
  },
  BaseEventData: {
    __resolveType: eventDataTypeResolver
  }
}

