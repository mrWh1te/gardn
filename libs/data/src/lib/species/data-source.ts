import { createSpecies } from './helpers/create-species';
import { Store } from './../store';

export const speciesDataSourceFactory = (store: Store) => ({
  getSpeciesById({ id }) {
    return store.species.find(oneSpecies => oneSpecies.id === id);
  },
  getAllSpecies() {
    return store.species;
  },
  // Create Data
  newSpecies({ name, description }: {name: string, description?: string}) {
    const aNewSpecies = createSpecies({name, description});
    store.species.push(aNewSpecies);

    return aNewSpecies;
  }
})