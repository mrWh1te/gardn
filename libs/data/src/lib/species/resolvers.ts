import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const speciesResolvers: Resolvers = {
  Query: {
    species: (_, { id }, { dataSources }) => {
      const oneSpecies = dataSources.species.byId({ id });

      if (oneSpecies) {
        return oneSpecies;
      }

      return new Error('Species not found');
    },
    allSpecies: (_, __, { dataSources }) => dataSources.species.getAll()
  },
  Mutation: {
    addSpecies: (_, { name, description }, { dataSources }) => dataSources.species.new({name, description})
  },
  Species: {
    plantStages: ({ id }, _, { dataSources }) => dataSources.plantStage.filterBySpeciesId({ id })
  }
}