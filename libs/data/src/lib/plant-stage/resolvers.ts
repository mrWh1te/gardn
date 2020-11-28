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
    defaultEnvironment: ({ id }, _, { dataSources }) => {
      const plantStage = dataSources.plantStage.byId({ id });

      if (plantStage.defaultEnvironmentId) {
        const environment = dataSources.environment.byId({ id: plantStage.defaultEnvironmentId })
        return environment;
      }

      return null;
    }
  }
}