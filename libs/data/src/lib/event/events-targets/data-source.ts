import { Store } from './../../store';
import { BaseDbModel, EventTargetType } from '../../generated';
import { DBEventsTargets } from './../events-targets/interface';
import { createDBEventsTargets } from './helpers/create-db-events-targets';
import { filterByTargetType } from './helpers/filter-by-target-type';
import { filterByTargetId } from './helpers/filter-by-target-id';
import { filterByEventType } from './helpers/filter-by-event-type';
import { DataSourceFactory } from '../../data-sources.interfaces';

/**
 * EventsTargetsDataSourceFactory DataSource Factory
 * @param store 
 */
export const EventsTargetsDataSourceFactory: DataSourceFactory<DBEventsTargets> = (store: Store) => ({
  // Read Data
  byId({ id }) {
    const eventsTargetsRecord = store.eventsTargets.find(eventsTargetsInstance => eventsTargetsInstance.id === id);

    if (!eventsTargetsRecord) {
      return null; // throw new Error('EventsTargets not found');
    }

    return eventsTargetsRecord;
  },
  byEventDataIdAndEventType({ eventDataId, eventType }: Pick<DBEventsTargets, 'eventDataId' | 'eventType'>) {
    const eventsTargetsRecord = store.eventsTargets.filter(
      eventsTargetsInstance => eventsTargetsInstance.eventDataId === eventDataId && eventsTargetsInstance.eventType == eventType
    );

    if (!eventsTargetsRecord) {
      return null; //throw new Error('EventsTargets not found');
    }

    return eventsTargetsRecord;
  },
  // when filtering by target type and target id, it effectively means filtering by one specific target
  filterByTargetTypeAndTargetId: ({ eventTargetId, eventTargetType }: Pick<DBEventsTargets, 'eventTargetType' | 'eventTargetId'>) =>
    store.eventsTargets
      .filter(filterByTargetType(eventTargetType))
      .filter(filterByTargetId(eventTargetId))
  ,
  filterByPlantId: ({ eventTargetId }: Pick<DBEventsTargets, 'eventTargetId'>) =>
    store.eventsTargets
      .filter(filterByTargetType(EventTargetType.Plant))
      .filter(filterByTargetId(eventTargetId))
  ,
  filterByTargetAndEventType: ({ eventTargetId, eventTargetType, eventType }: Pick<DBEventsTargets, 'eventTargetType' | 'eventTargetId' | 'eventType'>) =>
    store.eventsTargets
      .filter(filterByTargetType(eventTargetType))
      .filter(filterByTargetId(eventTargetId))
      .filter(filterByEventType(eventType))
  ,
  // Create Data
  new(eventsTargetsData: Omit<DBEventsTargets, keyof BaseDbModel>) {
    const newEventsTargetsRecord = createDBEventsTargets(eventsTargetsData);
    store.eventsTargets.push(newEventsTargetsRecord);

    return newEventsTargetsRecord;
  }
});