import { Store } from './../../store';
import { BaseDbModel, EventTargetType } from '../../generated';
import { DBEventsTargets } from './../events-targets/interface';
import { createDBEventsTargets } from './helpers/create-db-events-targets';
import { filterEventsTargetsByTargetType } from './helpers/filter-events-targets-by-target-type';
import { filterEventsTargetsByTargetId } from './helpers/filter-events-targets-by-target-id';

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
  filterByTargetTypeAndTargetId: ({ eventTargetId, eventTargetType }: Pick<DBEventsTargets, 'eventTargetType' | 'eventTargetId'>) =>
    store.eventsTargets
      .filter(filterEventsTargetsByTargetType(eventTargetType))
      .filter(filterEventsTargetsByTargetId(eventTargetId))
  ,
  filterByPlantId: ({ eventTargetId }: Pick<DBEventsTargets, 'eventTargetId'>) =>
    store.eventsTargets
      .filter(filterEventsTargetsByTargetType(EventTargetType.Plant))
      .filter(filterEventsTargetsByTargetId(eventTargetId))
  ,
  // Create Data
  new(eventsTargetsData: Omit<DBEventsTargets, keyof BaseDbModel>) {
    const newEventsTargetsRecord = createDBEventsTargets(eventsTargetsData);
    store.eventsTargets.push(newEventsTargetsRecord);

    return newEventsTargetsRecord;
  }
});