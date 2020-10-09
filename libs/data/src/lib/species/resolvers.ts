/**
 * Data is stored in memory for development
 * @param plants 
 */
export const speciesResolvers = {
  Query: {
    species: (_, { id }, { dataSources }) => {
      const oneSpecies = dataSources.species.getSpeciesById({ id });

      if (oneSpecies) {
        return oneSpecies;
      }

      return new Error('Species not found');
    },
    allSpecies: (_, __, { dataSources }) => dataSources.species.getAllSpecies()
  },
  Mutation: {
    addSpecies: (_, { name, description }, { dataSources }) => dataSources.species.newSpecies({name, description})
  },
  Species: {
    lifeCycles: ({ id }, _, { dataSources }) => dataSources.lifeCycle.getLifeCyclesBySpeciesId({ id })
  }
}