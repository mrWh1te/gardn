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
  Plant: plantDataSourceFactory(store),
  Species: speciesDataSourceFactory(store),
  Photo: photoDataSourceFactory(store),
  PlantStage: PlantStageDataSourceFactory(store),
  LightBulbTemplate: lightBulbTemplateDataSourceFactory(store),
  Environment: EnvironmentDataSourceFactory(store),
  SpeciesPlantStage: SpeciesPlantStageDataSourceFactory(store),
  EventsTargets: EventsTargetsDataSourceFactory(store),
  WaterEventData: WaterEventDataDataSourceFactory(store),
  PlantStageEventData: PlantStageEventDataDataSourceFactory(store),
  TemperatureEventData: TemperatureEventDataDataSourceFactory(store),
  HumidityEventData: HumidityEventDataDataSourceFactory(store),
  PHEventData: PHEventDataDataSourceFactory(store),
  ECEventData: ECEventDataDataSourceFactory(store),
  LightEventData: LightEventDataDataSourceFactory(store)
});