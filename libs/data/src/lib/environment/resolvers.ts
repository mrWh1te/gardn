import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const environmentResolvers: Resolvers = {
  Query: {
    environments: (_, __, { dataSources }) => dataSources.Environment.getAll(),
    environment: (_, { id }, { dataSources }) => {
      const environment = dataSources.Environment.byId({ id });

      if (environment) {
        return environment;
      }
      
      return new Error('Environment not found');
    }
  },
  Environment: {
    lightBulbTemplates: ({ id }, _, { dataSources }) => {
      const lightBulbTemplates = dataSources.LightBulbTemplate.filterByEnvironmentId({ id });

      return lightBulbTemplates;
    }
  }
}