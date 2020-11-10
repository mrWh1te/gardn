import { createDBHumidityEventData } from './helpers/create-db-humidity-event-data';
import { Store } from './../../../store';
import { BaseDbModel, HumidityEventData, Node } from '../../../generated';
import { DataSourceFactory } from '../../../data-sources.interfaces';

/**
 * HumidityEventData DataSource Factory
 * @param store 
 */
export const HumidityEventDataDataSourceFactory: DataSourceFactory<HumidityEventData> = (store: Store) => ({
  // Read Data
  byId({ id }: Pick<Node, 'id'>) {
    const humidityEventDataRecord = store.humidityEventsData.find(humidityEventData => humidityEventData.id === id);

    if (!humidityEventDataRecord) {
      console.error('humidity event data not found')
      console.log('for id = ', id)
      return null; //throw new Error('HumidityEventData not found');
    }

    return humidityEventDataRecord;
  },
  getAll() {
    return store.humidityEventsData;
  },
  // Create Data
  new(humidityEventData: Omit<HumidityEventData, keyof BaseDbModel>) {
    const aNewHumidityEventData = createDBHumidityEventData(humidityEventData);
    store.humidityEventsData.push(aNewHumidityEventData);

    return aNewHumidityEventData;
  }
});