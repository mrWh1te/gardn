import { createDBHumidityEventData } from './helpers/create-db-humidity-event-data';
import { Store } from './../../../store';
import { BaseDbModel, HumidityEventData } from '../../../generated';

/**
 * HumidityEventData DataSource Factory
 * @param store 
 */
export const HumidityEventDataDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const humidityEventDataRecord = store.humidityEventsData.find(humidityEventData => humidityEventData.id === id);

    if (!humidityEventDataRecord) {
      return new Error('HumidityEventData not found');
    }

    return humidityEventDataRecord;
  },
  // Create Data
  new(humidityEventData: Omit<HumidityEventData, keyof BaseDbModel>) {
    const aNewHumidityEventData = createDBHumidityEventData(humidityEventData);
    store.humidityEventsData.push(aNewHumidityEventData);

    return aNewHumidityEventData;
  }
});