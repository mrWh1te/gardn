import { createPlant, mockPlant1, mockPlant2 } from '@gardn/plant/helpers';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const plantResolversFactory = (plants = [mockPlant1, mockPlant2]) => ({
  Query: {
    plants: () => plants,
    plant: (parent, args) => {
      const plant = plants.find(plant => plant.id === args.id);

      if (plant) {
        return plant;
      }
      
      return new Error('Plant not found')
    }
  },
  Mutation: {
    addPlant: (parent, args) => {
      const newPlant = createPlant(args.name)
      plants.push(newPlant)

      return newPlant
    }
  }
})