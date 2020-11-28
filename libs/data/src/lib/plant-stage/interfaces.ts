import { PlantStage, Environment } from './../generated';

export interface DBPlantStage extends PlantStage {
  defaultEnvironmentId?: Environment['id']
}
