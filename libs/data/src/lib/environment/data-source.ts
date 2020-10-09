import { Store } from './../store';

export const EnvironmentDataSourceFactory = (store: Store) => ({
  // Read Data
  getById({ id }: {id: number}) {
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