/**
 * Data is stored in memory for development
 * @param plants 
 */
export const plantResolvers = {
  Query: {
    plants: (_, __, { dataSources }) => dataSources.plant.getPlants(),
    plant: (_, { id }, { dataSources }) => {
      const plant = dataSources.plant.getPlantById({ id })

      if (plant) {
        return plant;
      }
      
      return new Error('Plant not found')
    }
  },
  Plant: {
    avatar: (plant, _, { dataSources }) => {
      if (plant.avatarPhotoId) {
        const avatar = dataSources.photo.getPhotoById({ id: plant.avatarPhotoId });
        return avatar;
      }

      return null;
    },
    coverPhoto: (plant, _, { dataSources }) => {
      if (plant.coverPhotoId) {
        const coverPhoto = dataSources.photo.getPhotoById({ id: plant.coverPhotoId });
        return coverPhoto;
      }

      return null;
    },
    photos: (plant, _, { dataSources }) => {
      const photos = dataSources.photo.getPhotosByPlantId({ id: plant.id });
      return photos;
    },
    species: (plant, _, { dataSources }) => {
      if (plant.speciesId) {
        const species = dataSources.species.getSpeciesById({ id: plant.speciesId })
        return species;
      }

      return null;
    }
  },
  Mutation: {
    addPlant: (_, { name }, { dataSources }) => dataSources.plant.newPlant({name})
  }
}