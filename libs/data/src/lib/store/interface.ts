import { DBEnvironmentsLightBulbTemplates } from '../environment/interfaces';
import { DBEventsTargets } from '../event/events-targets/interface';
import { DBPlantStageEventData } from '../event/events/plant-stage/interface';
import { EcEventData, Environment, HumidityEventData, LightBulbTemplate, LightEventData, PhEventData, Species, TemperatureEventData, WaterEventData } from '../generated';
import { DBPhoto } from '../photo/interfaces';
import { DBPlantStage } from '../plant-stage/interfaces';
import { DBPlant } from '../plant/interfaces';
import { DBSpeciesPlantStages } from '../species/species-plantstage/interfaces';

/**
 * In-Memory DB
 */
export interface Store {
  // main model data
  photos: DBPhoto[],
  plants: DBPlant[],
  species: Species[],
  plantStages: DBPlantStage[],
  environments: Environment[],
  lightBulbTemplates: LightBulbTemplate[],
  // event data
  waterEventsData: WaterEventData[],
  plantStageEventsData: DBPlantStageEventData[],
  temperatureEventsData: TemperatureEventData[],
  humidityEventsData: HumidityEventData[],
  pHEventsData: PhEventData[],
  eCEventsData: EcEventData[],
  lightEventsData: LightEventData[],
  // many:many association tables' data
  speciesPlantStages: DBSpeciesPlantStages[],
  environmentsLightBulbTemplates: DBEnvironmentsLightBulbTemplates[],
  eventsTargets: DBEventsTargets[]
}