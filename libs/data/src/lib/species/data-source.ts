import { createSpecies } from './helpers/create-species';
import { Store } from './../store/interface';
import { DataSourceFactory } from '../data-sources.interfaces';
import { Species } from '../generated';

export const speciesDataSourceFactory: DataSourceFactory<Species> = (store: Store) => ({
  byId({ id }) {
    return store.species.find(oneSpecies => oneSpecies.id === id);
  },
  getAll() {
    return store.species;
  },
  // Create Data
  new({ name, description }: {name: string, description?: string}) {
    const aNewSpecies = createSpecies({name, description});
    store.species.push(aNewSpecies);

    return aNewSpecies;
  }
})