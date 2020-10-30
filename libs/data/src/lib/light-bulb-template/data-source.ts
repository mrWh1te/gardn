import { Store } from './../store';

import { valueIsDefined } from '@gardn/helpers';

export const lightBulbTemplateDataSourceFactory = (store: Store) => ({
  getById({ id }) {
    return store.lightBulbTemplates.find(lightBulbTemplate => lightBulbTemplate.id === id);
  },
  getAll() {
    return store.lightBulbTemplates;
  },
  filterByEnvironmentId({ id }) {
    const environmentLightBulbTemplatesRecords = store.environmentsLightBulbTemplates.filter(eLS => eLS.environmentId === id);

    return environmentLightBulbTemplatesRecords
      .map(eLS => store.lightBulbTemplates.find(lightBulbTemplate => lightBulbTemplate.id === eLS.lightBulbTemplateId))
      .filter(valueIsDefined);
  }
})