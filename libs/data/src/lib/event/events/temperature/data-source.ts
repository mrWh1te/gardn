import { createDBTemperatureEventData } from './helpers/create-db-temperature-event-data';
import { Store } from './../../../store';
import { BaseDbModel, TemperatureEventData } from '../../../generated';

/**
 * TemperatureEventData DataSource Factory
 * @param store 
 */
export const TemperatureEventDataDataSourceFactory = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const temperatureEventData = store.temperatureEventsData.find(temperatureEventData => temperatureEventData.id === id);

    if (!temperatureEventData) {
      return new Error('TemperatureEventData not found');
    }

    return temperatureEventData;
  },
  // Create Data
  new(temperatureEventData: Omit<TemperatureEventData, keyof BaseDbModel>) {
    const aNewTemperatureEventData = createDBTemperatureEventData(temperatureEventData);
    store.temperatureEventsData.push(aNewTemperatureEventData);

    return aNewTemperatureEventData;
  }
});