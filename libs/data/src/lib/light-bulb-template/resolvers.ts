import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const lightBulbTemplateResolvers: Resolvers = {
  Query: {
    lightBulbTemplates: (_, __, { dataSources }) => dataSources.LightBulbTemplate.getAll(),
    lightBulbTemplate: (_, { id }, { dataSources }) => {
      const lightBulbTemplateRecord = dataSources.LightBulbTemplate.byId({ id });

      if (lightBulbTemplateRecord) {
        return lightBulbTemplateRecord;
      }
      
      return new Error('LightBulbTemplate not found');
    }
  }
}