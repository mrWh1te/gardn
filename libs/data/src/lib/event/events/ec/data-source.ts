import { createDBECEventData } from './helpers/create-db-ec-event-data';
import { Store } from './../../../store';
import { BaseDbModel, EcEventData } from './../../../generated';

/**
 * ECEventDataDataSourceFactory DataSource Factory
 * @param store 
 */
export const ECEventDataDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const eCEventDataRecord = store.eCEventsData.find(eCEventData => eCEventData.id === id);

    if (!eCEventDataRecord) {
      return new Error('EcEventData not found');
    }

    return eCEventDataRecord;
  },
  // Create Data
  new(eCEventData: Omit<EcEventData, keyof BaseDbModel>) {
    const aNewpHEventData = createDBECEventData(eCEventData);
    store.eCEventsData.push(aNewpHEventData);

    return aNewpHEventData;
  }
});