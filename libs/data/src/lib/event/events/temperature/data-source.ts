import { createDBTemperatureEventData } from './helpers/create-db-temperature-event-data';
import { Store } from './../../../store';
import { BaseDbModel, TemperatureEventData } from '../../../generated';
import { DataSourceFactory } from '../../../data-sources.interfaces';

/**
 * TemperatureEventData DataSource Factory
 * @param store 
 */
export const TemperatureEventDataDataSourceFactory: DataSourceFactory<TemperatureEventData> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const temperatureEventData = store.temperatureEventsData.find(temperatureEventData => temperatureEventData.id === id);

    if (!temperatureEventData) {
      return null; //throw new Error('TemperatureEventData not found');
    }

    return temperatureEventData;
  },
  getAll() {
    return store.temperatureEventsData;
  },
  // Create Data
  new(temperatureEventData: Omit<TemperatureEventData, keyof BaseDbModel>) {
    const aNewTemperatureEventData = createDBTemperatureEventData(temperatureEventData);
    store.temperatureEventsData.push(aNewTemperatureEventData);

    return aNewTemperatureEventData;
  }
});