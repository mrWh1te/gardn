import { Resolvers } from './../../generated';

/**
 * Data is stored in memory for development
 */
export const speciesPlantStageResolvers: Resolvers = {
  Query: {
    speciesPlantStage: (_, { id }, { dataSources }) => {
      const speciesPlantStage = dataSources.SpeciesPlantStage.byId({ id });

      if (speciesPlantStage) {
        return speciesPlantStage;
      }

      return new Error('Species not found');
    },
    speciesPlantStages: (_, __, { dataSources }) => dataSources.Species.getAll()
  },
  SpeciesPlantStage: {
    idealEnvironment: ({ id }, _, { dataSources }) => {
      const speciesPlantStage = dataSources.SpeciesPlantStage.byId({ id });

      if (speciesPlantStage.idealEnvironmentId) {
        return dataSources.Environment.byId({ id: speciesPlantStage.idealEnvironmentId })
      }

      return null
    },
    plantStage: ({ id }, _, { dataSources }) => {
      const speciesPlantStage = dataSources.SpeciesPlantStage.byId({ id });

      if (speciesPlantStage.plantStageId) {
        return dataSources.PlantStage.byId({ id: speciesPlantStage.plantStageId })
      }

      return null
    }
  }
}