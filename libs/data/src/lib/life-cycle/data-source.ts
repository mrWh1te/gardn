import { Store } from './../store';

import { valueIsDefined } from '@gardn/helpers';

export const LifeCycleDataSourceFactory = (store: Store) => ({
  // Read Data
  getById({ id }: {id: number}) {
    const lifeCycle = store.lifeCycles.find(lifeCycle => lifeCycle.id === id);

    if (lifeCycle) {
      return lifeCycle;
    }

    return null;
  },
  getLifeCyclesBySpeciesId({ id }: {id: number}) {
    const speciesLifeCyclesAssociations = store.speciesLifeCycles.filter(speciesLifeCycle => speciesLifeCycle.speciesId === id)
    
    return speciesLifeCyclesAssociations
      .map(speciesLifeCycle => store.lifeCycles.find(lifeCycle => lifeCycle.id === speciesLifeCycle.lifeCycleId))
      .filter(valueIsDefined)
  },
  getAll() {
    return store.lifeCycles;
  }
});