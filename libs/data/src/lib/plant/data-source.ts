import { createPlant } from './helpers/create-plant';
import { Store } from './../store';

export const plantDataSourceFactory = (store: Store) => ({
  // Read Data
  getPlantById({ id }: {id: number}) {
    const plant = store.plants.find(plant => plant.id === id);

    if (!plant) {
      return;
    }

    return plant;
  },
  getPlants() {
    return store.plants;
  },
  // Create Data
  newPlant({ name }: {name: string}) {
    const aNewPlant = createPlant({name});
    store.plants.push(aNewPlant);

    return aNewPlant;
  }
});