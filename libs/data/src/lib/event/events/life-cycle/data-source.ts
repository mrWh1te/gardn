import { createDBLifeCycleEventData } from './helpers/create-db-life-cycle-event-data';
import { Store } from './../../../store';
import { BaseDbModel } from './../../../generated';
import { DBLifeCycleEventData } from './interface';

/**
 * LifeCycleEventData DataSource Factory
 * @param store 
 */
export const LifeCycleEventDataDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const lifeCycleEventData = store.lifeCycleEventsData.find(lifeCycleEventData => lifeCycleEventData.id === id);

    if (!lifeCycleEventData) {
      return new Error('LifeCycleEventData not found');
    }

    return lifeCycleEventData;
  },
  // Create Data
  new(dbLifeCycleEventData: Omit<DBLifeCycleEventData, keyof BaseDbModel>) {
    const aNewLifeCycleEventData = createDBLifeCycleEventData(dbLifeCycleEventData);
    store.lifeCycleEventsData.push(aNewLifeCycleEventData);

    return aNewLifeCycleEventData;
  }
});