import { Store } from './../store/interface';

import { valueIsDefined } from '@gardn/helpers';
import { DataSourceFactory } from '../data-sources.interfaces';
import { PlantStage } from '../generated';

export const PlantStageDataSourceFactory: DataSourceFactory<PlantStage> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const plantStageRecord = store.plantStages.find(plantStage => plantStage.id === id);

    if (plantStageRecord) {
      return plantStageRecord;
    }

    return null;
  },
  filterBySpeciesId({ id }: {id: number}) {
    const speciesPlantStagesRecords = store.speciesPlantStages.filter(speciesPlantStage => speciesPlantStage.speciesId === id)
    
    return speciesPlantStagesRecords
      .map(speciesPlantStage => store.plantStages.find(plantStage => plantStage.id === speciesPlantStage.plantStageId))
      .filter(valueIsDefined)
  },
  getAll() {
    return store.plantStages;
  }
});