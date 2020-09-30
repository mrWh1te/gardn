import { 
  photoDataSourceFactory,
  plantDataSourceFactory,
  speciesDataSourceFactory,
  store
} from '@gardn/data';

/**
 * Data Sources factory
 */
export const dataSources = (): any => ({
  plant: plantDataSourceFactory(store),
  species: speciesDataSourceFactory(store),
  photo: photoDataSourceFactory(store)
});