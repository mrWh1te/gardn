import { 
  photoDataSourceFactory,
  plantDataSourceFactory,
  speciesDataSourceFactory,
  LifeCycleDataSourceFactory,
  lightSourceDataSourceFactory,
  EnvironmentDataSourceFactory,
  EventsTargetsDataSourceFactory,
  WaterEventDataDataSourceFactory,
  LifeCycleEventDataDataSourceFactory,
  TemperatureEventDataDataSourceFactory,
  store
} from '@gardn/data';

/**
 * Data Sources factory
 */
export const dataSources = (): any => ({
  plant: plantDataSourceFactory(store),
  species: speciesDataSourceFactory(store),
  photo: photoDataSourceFactory(store),
  lifeCycle: LifeCycleDataSourceFactory(store),
  lightSource: lightSourceDataSourceFactory(store),
  environment: EnvironmentDataSourceFactory(store),
  eventsTargets: EventsTargetsDataSourceFactory(store),
  waterEventData: WaterEventDataDataSourceFactory(store),
  lifeCycleEventData: LifeCycleEventDataDataSourceFactory(store),
  temperatureEventData: TemperatureEventDataDataSourceFactory(store)
});