/**
 * Data is stored in memory for development
 */
export const lifeCycleResolvers = {
  Query: {
    lifeCycles: (_, __, { dataSources }) => dataSources.lifeCycle.getAll(),
    lifeCycle: (_, { id }, { dataSources }) => {
      const lifeCycle = dataSources.lifeCycle.getLifeCycleById({ id })

      if (lifeCycle) {
        return lifeCycle;
      }
      
      return new Error('LifeCycle not found')
    }
  },
  LifeCycle: {
    environment: (lifeCycle, _, { dataSources }) => {
      if (lifeCycle.environmentId) {
        const environment = dataSources.environment.getEnvironmentById({ id: lifeCycle.environmentId });
        return environment;
      }

      return null;
    }
  }
}