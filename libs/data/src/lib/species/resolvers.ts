import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const speciesResolvers: Resolvers = {
  Query: {
    species: (_, { id }, { dataSources }) => {
      const oneSpecies = dataSources.Species.byId({ id });

      if (oneSpecies) {
        return oneSpecies;
      }

      return new Error('Species not found');
    },
    allSpecies: (_, __, { dataSources }) => dataSources.Species.getAll()
  },
  Mutation: {
    addSpecies: (_, { name, description }, { dataSources }) => dataSources.Species.new({name, description})
  },
  Species: {
    speciesPlantStages: ({ id }, _, { dataSources }) => {
      const speciesPlantStageRecords = dataSources.SpeciesPlantStage.filterBySpecies({ speciesId: id })

      return speciesPlantStageRecords
    }
  }
}