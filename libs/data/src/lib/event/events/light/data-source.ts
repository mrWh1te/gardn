import { createDBLightEventData } from './helpers/create-db-light-event-data';
import { Store } from './../../../store';
import { BaseDbModel, LightEventData, Node } from '../../../generated';
import { DataSourceFactory } from '../../../data-sources.interfaces';

/**
 * LightEventData DataSource Factory
 * @param store 
 */
export const LightEventDataDataSourceFactory: DataSourceFactory<LightEventData> = (store: Store) => ({
  // Read Data
  byId({ id }: Pick<Node, 'id'>) {
    const lightEventDataRecord = store.lightEventsData.find(lightEventData => lightEventData.id === id);

    if (!lightEventDataRecord) {
      return null; //throw new Error('LightEventData not found');
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