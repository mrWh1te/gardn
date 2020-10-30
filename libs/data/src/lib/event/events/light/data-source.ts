import { createDBLightEventData } from './helpers/create-db-light-event-data';
import { Store } from './../../../store';
import { BaseDbModel, LightEventData } from '../../../generated';

/**
 * LightEventData DataSource Factory
 * @param store 
 */
export const LightEventDataDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const lightEventDataRecord = store.lightEventsData.find(lightEventData => lightEventData.id === id);

    if (!lightEventDataRecord) {
      return new Error('LightEventData not found');
    }

    return lightEventDataRecord;
  },
  // Create Data
  new(lightEventData: Omit<LightEventData, keyof BaseDbModel>) {
    const aNewLightEventData = createDBLightEventData(lightEventData);
    store.lightEventsData.push(aNewLightEventData);

    return aNewLightEventData;
  }
});