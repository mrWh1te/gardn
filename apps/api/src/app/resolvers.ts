import { IResolvers } from 'graphql-tools';

interface Plant {
  id: number,
  name: string
};

interface Store {
  plants: Plant[]
};

const createPlantFactory = (lastPlantId = 0) => (name: string): Plant => { 
  lastPlantId++
  return {
    id: lastPlantId, 
    name 
  }
}

const createPlant = createPlantFactory()

const mockPlant1 = createPlant('Lavender')
const mockPlant2 = createPlant('Parsley')

const initialStore: Store = {
  plants: [mockPlant1, mockPlant2]
};

export const resolvers = (store = initialStore): IResolvers => ({
  Query: {
    plants: () => store['plants'],
    plant: (parent, args) => 
      store['plants'].find(plant => plant.id === args.id)
  },
  Mutation: {
    addPlant: (parent, args) => {
      const newPlant = createPlant(args.name)
      store.plants.push(newPlant)

      return newPlant
    }
  }
})