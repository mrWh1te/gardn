import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageResolvers: Resolvers = {
  Query: {
    plantStages: (_, __, { dataSources }) => dataSources.plantStage.getAll(),
    plantStage: (_, { id }, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id })

      if (plantStage) {
        return plantStage;
      }
      
      return new Error('PlantStage not found')
    }
  },
  PlantStage: {
    environment: ({ id }, _, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id });

      if (plantStage.environmentId) {
        const environment = dataSources.environment.byId({ id: plantStage.environmentId })
        return environment;
      }

      return null;
    }
  }
}