import { createDBECEventData } from './helpers/create-db-ec-event-data';
import { Store } from './../../../store';
import { BaseDbModel, EcEventData } from './../../../generated';
import { DataSourceFactory } from '../../../data-sources.interfaces';

/**
 * ECEventDataDataSourceFactory DataSource Factory
 * @param store 
 */
export const ECEventDataDataSourceFactory: DataSourceFactory<EcEventData> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const eCEventDataRecord = store.eCEventsData.find(eCEventData => eCEventData.id === id);

    if (!eCEventDataRecord) {
      return null; //throw new Error('EcEventData not found');
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