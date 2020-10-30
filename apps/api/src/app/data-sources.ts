import { 
  photoDataSourceFactory,
  plantDataSourceFactory,
  speciesDataSourceFactory,
  LifeCycleDataSourceFactory,
  lightBulbTemplateDataSourceFactory,
  EnvironmentDataSourceFactory,
  EventsTargetsDataSourceFactory,
  WaterEventDataDataSourceFactory,
  LifeCycleEventDataDataSourceFactory,
  TemperatureEventDataDataSourceFactory,
  HumidityEventDataDataSourceFactory,
  PHEventDataDataSourceFactory,
  ECEventDataDataSourceFactory,
  LightEventDataDataSourceFactory,
  store,
} from '@gardn/data';

/**
 * Data Sources factory
 */
export const dataSources = (): any => ({
  plant: plantDataSourceFactory(store),
  species: speciesDataSourceFactory(store),
  photo: photoDataSourceFactory(store),
  lifeCycle: LifeCycleDataSourceFactory(store),
  lightBulbTemplate: lightBulbTemplateDataSourceFactory(store),
  environment: EnvironmentDataSourceFactory(store),
  eventsTargets: EventsTargetsDataSourceFactory(store),
  waterEventData: WaterEventDataDataSourceFactory(store),
  lifeCycleEventData: LifeCycleEventDataDataSourceFactory(store),
  temperatureEventData: TemperatureEventDataDataSourceFactory(store),
  humidityEventData: HumidityEventDataDataSourceFactory(store),
  pHEventData: PHEventDataDataSourceFactory(store),
  eCEventData: ECEventDataDataSourceFactory(store),
  lightEventData: LightEventDataDataSourceFactory(store)
});