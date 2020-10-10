import { Store } from './../store';

import { valueIsDefined } from '@gardn/helpers';

export const lightSourceDataSourceFactory = (store: Store) => ({
  getById({ id }) {
    return store.lightSources.find(lightSource => lightSource.id === id);
  },
  getAll() {
    return store.lightSources;
  },
  getLightSourcesByEnvironmentId({ id }) {
    const environmentLightSourcesAssociations = store.environmentsLightSources.filter(eLS => eLS.environmentId === id);

    return environmentLightSourcesAssociations
      .map(eLS => store.lightSources.find(lightSource => lightSource.id === eLS.lightSourceId))
      .filter(valueIsDefined);
  }
})