import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageResolvers: Resolvers = {
  Query: {
    plantStages: (_, __, { dataSources }) => dataSources.PlantStage.getAll(),
    plantStage: (_, { id }, { dataSources }) => {
      const plantStage = dataSources.PlantStage.byId({ id })

      if (plantStage) {
        return plantStage;
      }
      
      return new Error('PlantStage not found')
    }
  },
  PlantStage: {
    defaultEnvironment: ({ id }, _, { dataSources }) => {
      const plantStage = dataSources.PlantStage.byId({ id });

      if (plantStage.defaultEnvironmentId) {
        const environment = dataSources.Environment.byId({ id: plantStage.defaultEnvironmentId })
        return environment;
      }

      return null;
    }
  }
}