import { // todo standardize casing with data-sources' naming
  DataSources,
  store,
  photoDataSourceFactory,
  plantDataSourceFactory,
  speciesDataSourceFactory,
  PlantStageDataSourceFactory,
  lightBulbTemplateDataSourceFactory,
  EnvironmentDataSourceFactory,
  EventsTargetsDataSourceFactory,
  WaterEventDataDataSourceFactory,
  PlantStageEventDataDataSourceFactory,
  TemperatureEventDataDataSourceFactory,
  HumidityEventDataDataSourceFactory,
  PHEventDataDataSourceFactory,
  ECEventDataDataSourceFactory,
  LightEventDataDataSourceFactory,
  SpeciesPlantStageDataSourceFactory
} from '@gardn/data';

/**
 * Data Sources factory
 */
export const dataSources = (): DataSources => ({
  plant: plantDataSourceFactory(store),
  species: speciesDataSourceFactory(store),
  photo: photoDataSourceFactory(store),
  plantStage: PlantStageDataSourceFactory(store),
  lightBulbTemplate: lightBulbTemplateDataSourceFactory(store),
  environment: EnvironmentDataSourceFactory(store),
  speciesPlantStage: SpeciesPlantStageDataSourceFactory(store),
  eventsTargets: EventsTargetsDataSourceFactory(store),
  waterEventData: WaterEventDataDataSourceFactory(store),
  plantStageEventData: PlantStageEventDataDataSourceFactory(store),
  temperatureEventData: TemperatureEventDataDataSourceFactory(store),
  humidityEventData: HumidityEventDataDataSourceFactory(store),
  pHEventData: PHEventDataDataSourceFactory(store),
  eCEventData: ECEventDataDataSourceFactory(store),
  lightEventData: LightEventDataDataSourceFactory(store)
});