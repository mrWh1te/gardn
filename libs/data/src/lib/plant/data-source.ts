import { createPlant } from './helpers/create-plant';
import { Store } from './../store';
import { DataSourceFactory } from '../data-sources.interfaces';
import { Plant } from '../generated';

export const plantDataSourceFactory: DataSourceFactory<Plant> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const plant = store.plants.find(plant => plant.id === id);

    if (!plant) {
      return;
    }

    return plant;
  },
  getAll() {
    return store.plants;
  },
  // Create Data
  new({ name }: {name: string}) {
    const aNewPlant = createPlant({name});
    store.plants.push(aNewPlant);

    return aNewPlant;
  }
});