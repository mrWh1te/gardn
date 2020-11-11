import { createDBPlantStageEventData } from './helpers/create-db-plant-stage-event-data';
import { Store } from './../../../store/interface';
import { BaseDbModel } from './../../../generated';
import { DBPlantStageEventData } from './interface';
import { DataSourceFactory } from '../../../data-sources.interfaces';

/**
 * PlantStageEventData DataSource Factory
 * @param store 
 */
export const PlantStageEventDataDataSourceFactory: DataSourceFactory<DBPlantStageEventData> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const plantStageEventData = store.plantStageEventsData.find(plantStageEventData => plantStageEventData.id === id);

    if (!plantStageEventData) {
      return null; //throw new Error('PlantStageEventData not found');
    }

    return plantStageEventData;
  },
  // Create Data
  new(dbPlantStageEventData: Omit<DBPlantStageEventData, keyof BaseDbModel>) {
    const aNewPlantStageEventData = createDBPlantStageEventData(dbPlantStageEventData);
    store.plantStageEventsData.push(aNewPlantStageEventData);

    return aNewPlantStageEventData;
  }
});