import { Plant } from '@gardn/data';

// todo helper
const createPlantFactory = (lastPlantId = 0) => (name: string): Plant => { 
  lastPlantId++
  return {
    id: lastPlantId, 
    name 
  }
};
const createPlant = createPlantFactory();

// todo move to data/plant ?
export const mockPlant1 = createPlant('Lavender');
export const mockPlant2 = createPlant('Parsley');


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