import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const lifeCycleResolvers: Resolvers = {
  Query: {
    lifeCycles: (_, __, { dataSources }) => dataSources.lifeCycle.getAll(),
    lifeCycle: (_, { id }, { dataSources }) => {
      const lifeCycle = dataSources.lifeCycle.getById({ id })

      if (lifeCycle) {
        return lifeCycle;
      }
      
      return new Error('LifeCycle not found')
    }
  },
  LifeCycle: {
    environment: (lifeCycle, _, { dataSources }) => {
      if (lifeCycle['environmentId']) { // environmentId not on LifeCycle obj type, but in parent record data (frm db record)
        const environment = dataSources.environment.getById({ id: lifeCycle['environmentId'] });
        return environment;
      }

      return null;
    }
  }
}