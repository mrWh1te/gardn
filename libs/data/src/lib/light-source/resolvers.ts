/**
 * Data is stored in memory for development
 */
export const lightSourceResolvers = {
  Query: {
    lightSources: (_, __, { dataSources }) => dataSources.lightSource.getAll(),
    lightSource: (_, { id }, { dataSources }) => {
      const lightSource = dataSources.lightSource.getById({ id });

      if (lightSource) {
        return lightSource;
      }
      
      return new Error('LightSource not found');
    }
  }
}