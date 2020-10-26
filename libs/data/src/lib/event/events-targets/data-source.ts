import { Store } from './../../store';
import { BaseDbModel, EventTargetType } from '../../generated';
import { DBEventsTargets } from './../events-targets/interface';
import { createDBEventsTargets } from './helpers/create-db-events-targets';

/**
 * EventsTargetsDataSourceFactory DataSource Factory
 * @param store 
 */
export const EventsTargetsDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: Pick<DBEventsTargets, 'id'>) {
    const eventsTargetsRecord = store.eventsTargets.find(eventsTargetsInstance => eventsTargetsInstance.id === id);

    if (!eventsTargetsRecord) {
      return new Error('EventsTargets not found');
    }

    return eventsTargetsRecord;
  },
  byEventDataIdAndEventType({ eventDataId, eventType }: Pick<DBEventsTargets, 'eventDataId' | 'eventType'>) {
    const eventsTargetsRecord = store.eventsTargets.find(
      eventsTargetsInstance => eventsTargetsInstance.eventDataId === eventDataId && eventsTargetsInstance.eventType == eventType
    );

    if (!eventsTargetsRecord) {
      return new Error('EventsTargets not found');
    }

    return eventsTargetsRecord;
  },
  filterByEventDataId({ eventDataId }: Pick<DBEventsTargets, 'eventDataId'>) {
    return store.eventsTargets.filter(eventsTargetsInstance => eventsTargetsInstance.eventDataId === eventDataId)
  },
  filterByPlantId({ eventTargetId }: Pick<DBEventsTargets, 'eventTargetId'>) {
    return store.eventsTargets
      .filter(eventsTargetsInstance => eventsTargetsInstance.eventTargetType === EventTargetType.Plant)
      .filter(eventsTargetsInstance => eventsTargetsInstance.eventTargetId === eventTargetId)
  },
  // Create Data
  new(eventsTargetsData: Omit<DBEventsTargets, keyof BaseDbModel>) {
    const newEventsTargetsRecord = createDBEventsTargets(eventsTargetsData);
    store.eventsTargets.push(newEventsTargetsRecord);

    return newEventsTargetsRecord;
  }
});