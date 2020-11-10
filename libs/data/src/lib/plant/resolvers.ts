import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const plantResolvers: Resolvers = {
  Query: {
    plants: (_, __, { dataSources }) => dataSources.plant.getAll(),
    plant: (_, { id }, { dataSources }) => {
      const plant = dataSources.plant.byId({ id })

      if (plant) {
        return plant;
      }
      
      return new Error('Plant not found')
    }
  },
  Plant: {
    avatar: (plant, _, { dataSources }) => {
      if (plant['avatarPhotoId']) { // not in obj type, but in db record ie parent
        const avatar = dataSources.photo.byId({ id: plant['avatarPhotoId'] });
        return avatar;
      }

      return null;
    },
    coverPhoto: (plant, _, { dataSources }) => {
      if (plant['coverPhotoId']) {
        const coverPhoto = dataSources.photo.byId({ id: plant['coverPhotoId'] });
        return coverPhoto;
      }

      return null;
    },
    photos: (plant, _, { dataSources }) => {
      const photos = dataSources.photo.filterByPlantId({ id: plant.id });
      return photos;
    },
    species: (plant, _, { dataSources }) => {
      if (plant['speciesId']) {
        const species = dataSources.species.byId({ id: plant['speciesId'] })
        return species;
      }

      return null;
    },
    currentPlantStage: ({ id }, _, { dataSources }) => {
      const plant = dataSources.plant.byId({ id })

      if (plant.currentPlantStageId) {
        return dataSources.plantStage.byId({ id: plant.currentPlantStageId });
      }

      return null;
    }
  },
  Mutation: {
    addPlant: (_, { name }, { dataSources }) => dataSources.plant.new({name})
  }
}