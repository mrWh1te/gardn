import { createPlant, mockPlant1, mockPlant2 } from '@gardn/data/plant';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const resolvers = (plants = [mockPlant1, mockPlant2]) => ({
  Query: {
    plants: () => plants,
    plant: (parent, args) => plants.find(plant => plant.id === args.id)
  },
  Mutation: {
    addPlant: (parent, args) => {
      const newPlant = createPlant(args.name)
      plants.push(newPlant)

      return newPlant
    }
  }
})