import { BaseEventData, EventTargetType, EventType, Resolvers } from '../generated';
import { eventDataToEvent } from './helpers/event-data-to-event';
import { eventDataTypeResolver } from './helpers/event-data-type-resolver';
import { eventsTargetsRecordToEvent } from './helpers/events-targets-record-to-event';

/**
 * Data is stored in memory for development
 */
export const eventResolvers: Resolvers = {
  Query: {
    event: (_, { eventDataId, eventType }, { dataSources }) => {
      if (eventDataId && eventType) {
        switch(eventType) {
          case EventType.Water:
            return eventDataToEvent(dataSources.waterEventData.byId({id: eventDataId }), EventType.Water);
          case EventType.LifeCycleChange:
            return eventDataToEvent(dataSources.lifeCycleEventData.byId({id: eventDataId }), EventType.Water);
          case EventType.TemperatureReading:
            return eventDataToEvent(dataSources.temperatureEventData.byId({id: eventDataId }), EventType.TemperatureReading);
          case EventType.HumidityReading:
            return eventDataToEvent(dataSources.humidityEventData.byId({id: eventDataId }), EventType.HumidityReading);
          case EventType.PhReading:
            return eventDataToEvent(dataSources.humidityEventData.byId({id: eventDataId }), EventType.PhReading);
        }
      }

      throw new Error('Event Query - Not Enough Params')
    },
    events: (_, { eventTargetId, eventTargetType, eventType }, { dataSources }) => {
      // get events for a target
      const eventsTargetsRecords = dataSources.eventsTargets.filterByTargetTypeAndTargetId({ eventTargetId, eventTargetType });

      // 1. get EventsTargets' records for target, convert into Event's
        // note EventsTargets.id !== Event.id, instead EventsTargets.eventDataId = Event.id
      let events = eventsTargetsRecords.map(eventsTargetsRecord => eventsTargetsRecordToEvent(eventsTargetsRecord))

      // 2. (optional) filter events by eventType if provided
      if (eventType) {
        events = events.filter(event => event.type === eventType)
      }
      
      return events;
    }
  },
  Event: {
    targets: ({ id, type }, _, { dataSources }) => {
      const eventsTargetsWithMatchingEventDataId = dataSources.eventsTargets.byEventDataIdAndEventType({eventDataId: id, eventType: type})

      const targets = eventsTargetsWithMatchingEventDataId.map(eventTargetRecord => {
        switch (eventTargetRecord.eventTargetType) {
          case EventTargetType.Plant:
            return dataSources.plant.getPlantById({ id: eventTargetRecord.eventTargetId })
        }
      })

      return targets;
    },
    data: ({ id, type }, _, { dataSources }) => {
      let record: BaseEventData

      switch(type) {
        case EventType.Water:
          record = dataSources.waterEventData.byId({id})
          break;
        case EventType.LifeCycleChange:
          record = dataSources.lifeCycleEventData.byId({id})
          break;
        case EventType.TemperatureReading:
          record = dataSources.temperatureEventData.byId({id})
          break;
        case EventType.HumidityReading:
          record = dataSources.humidityEventData.byId({id})
          break;
        case EventType.PhReading:
          record = dataSources.pHEventData.byId({id})
          break;
      }

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

