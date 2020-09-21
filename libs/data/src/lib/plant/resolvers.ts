import { 
  createPlant,
  createSpecies,
  // data
  mockPlant1,
  mockPlant2,
  species1,
  species2,
  species3,
  species4,
  species5
} from '@gardn/plant/helpers';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const plantResolversFactory = (plants = [mockPlant1, mockPlant2], species = [species1, species2, species3, species4, species5]) => ({
  Query: {
    //
    // Plant
    plants: () => plants,
    plant: (parent, args) => {
      const plant = plants.find(plant => plant.id === args.id);

      if (plant) {
        return plant;
      }
      
      return new Error('Plant not found')
    },
    //
    // Species
    species: (parent, args) => {
      const oneSpecies = species.find(aSpecies => aSpecies.id === args.id);

      if (oneSpecies) {
        return oneSpecies;
      }

      return new Error('Species not found');
    }
  },
  Mutation: {
    //
    // Plant
    addPlant: (parent, args) => {
      const newPlant = createPlant(args.name)
      plants.push(newPlant)

      return newPlant
    },
    //
    // Species
    addSpecies: (parent, args) => {
      const newSpecies = createSpecies(args.name, args.description);
      species.push(newSpecies);

      return newSpecies;
    }
  }
})