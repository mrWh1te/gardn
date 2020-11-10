import { PlantStage, Environment } from './../generated';

export interface DBPlantStage extends PlantStage {
  environmentId?: Environment['id']
}
