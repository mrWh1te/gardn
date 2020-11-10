import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const environmentResolvers: Resolvers = {
  Query: {
    environments: (_, __, { dataSources }) => dataSources.environment.getAll(),
    environment: (_, { id }, { dataSources }) => {
      const environment = dataSources.environment.byId({ id });

      if (environment) {
        return environment;
      }
      
      return new Error('Environment not found');
    }
  },
  Environment: {
    lightBulbTemplates: ({ id }, _, { dataSources }) => {
      const lightBulbTemplates = dataSources.lightBulbTemplate.filterByEnvironmentId({ id });

      return lightBulbTemplates;
    }
  }
}