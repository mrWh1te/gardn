import { createDBWaterEventData } from './helpers/create-db-water-event-data';
import { Store } from './../../../store';
import { BaseDbModel, WaterEventData } from '../../../generated';

/**
 * WaterEventData DataSource Factory
 * @param store 
 */
export const WaterEventDataDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const waterEventData = store.waterEventsData.find(waterEventData => waterEventData.id === id);

    if (!waterEventData) {
      return new Error('WaterEventData not found');
    }

    return waterEventData;
  },
  // Create Data
  new(waterEventData: Omit<WaterEventData, keyof BaseDbModel>) {
    const aNewWaterEventData = createDBWaterEventData(waterEventData);
    store.waterEventsData.push(aNewWaterEventData);

    return aNewWaterEventData;
  }
});