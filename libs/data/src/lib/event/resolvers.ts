import { BaseDbModel, EventTargetType, EventType, Resolvers } from '../generated';
import { eventDataToEvent } from './helpers/event-data-to-event';
// import { eventsTargetsRecordToEvent } from './helpers/events-targets-record-to-event';

/**
 * Data is stored in memory for development
 */
export const eventResolvers: Resolvers = {
  Query: {
    event: (_, { eventDataId, eventType }, { dataSources }) => {
      if (eventDataId && eventType) {
        switch(eventType) {
          case EventType.Water:
            // cast WaterEventData -> Event
            return eventDataToEvent(dataSources.waterEventData.byId({id: eventDataId }), EventType.Water);
        }
      }

      throw new Error('Event Query - Not Enough Params')
    }
  },
  Event: {
    targets: ({ id }, _, { dataSources }) => {
      const { eventDataId } = dataSources.eventsTargets.byId({ id }) // for now, in order to keep a cleaner normalized gql object type for Event, let's grab the record again
                                                                     // even though this field from the db record should be in the parent param (1st param)

      const eventsTargetsWithMatchingEventDataId = dataSources.eventsTargets.filterByEventDataId({eventDataId})

      const targets = eventsTargetsWithMatchingEventDataId.map(eventTargetRecord => {
        switch (eventTargetRecord.eventTargetType) {
          case EventTargetType.Plant:
            return dataSources.plant.getPlantById({ id: eventTargetRecord.eventTargetId })
        }
      })

      return targets;
    },
    data: ({ id }, _, { dataSources }) => {
      const { eventDataId, eventType } = dataSources.eventsTargets.byId({ id })

      let record: BaseDbModel

      switch(eventType) {
        case EventType.Water:
          record = dataSources.waterEventData.byId({id: eventDataId})
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
    __resolveType() {
      return 'WaterEventData';
    }
  }
}

