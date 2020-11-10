import { createDBpHEventData } from './helpers/create-db-ph-event-data';
import { Store } from './../../../store';
import { BaseDbModel, PhEventData } from './../../../generated';
import { DataSourceFactory } from '../../../data-sources.interfaces';

/**
 * PHEventDataDataSourceFactory DataSource Factory
 * @param store 
 */
export const PHEventDataDataSourceFactory: DataSourceFactory<PhEventData> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const pHEventDataRecord = store.pHEventsData.find(pHEventData => pHEventData.id === id);

    if (!pHEventDataRecord) {
      return null; //throw new Error('PhEventData not found');
    }

    return pHEventDataRecord;
  },
  // Create Data
  new(pHEventData: Omit<PhEventData, keyof BaseDbModel>) {
    const aNewpHEventData = createDBpHEventData(pHEventData);
    store.pHEventsData.push(aNewpHEventData);

    return aNewpHEventData;
  }
});