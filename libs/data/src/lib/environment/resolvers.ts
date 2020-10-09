/**
 * Data is stored in memory for development
 */
export const environmentResolvers = {
  Query: {
    environments: (_, __, { dataSources }) => dataSources.environment.getAll(),
    environment: (_, { id }, { dataSources }) => {
      const environment = dataSources.environment.getById({ id });

      if (environment) {
        return environment;
      }
      
      return new Error('Environment not found');
    }
  },
  Environment: {
    lightSources: ({ id }, _, { dataSources }) => {
      const lightSources = dataSources.lightSource.getLightSourcesByEnvironmentId({ id });

      return lightSources;
    }
  }
}