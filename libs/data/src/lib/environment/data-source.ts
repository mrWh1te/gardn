import { DataSourceFactory } from '../data-sources.interfaces';
import { Environment } from '../generated';
import { Store } from './../store';

export const EnvironmentDataSourceFactory: DataSourceFactory<Environment> = (store: Store) => ({
  // Read Data
  byId({ id }: {id: number}) {
    const environment = store.environments.find(environment => environment.id === id);

    if (environment) {
      return environment;
    }

    return null;
  },
  getAll() {
    return store.environments;
  }
});