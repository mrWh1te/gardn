import { createPhoto, mockPhoto1, mockPhoto2 } from '@gardn/photo/helpers';

/**
 * Data is stored in memory for development
 * @param photos 
 */
export const plantResolversFactory = (photos = [mockPlant1, mockPlant2]) => ({
  Query: {
    photos: () => photos,
    photo: (parent, args) => {
      const photo = photos.find(photo => photo.id === args.id);

      if (photo) {
        return photo;
      }
      
      return new Error('Photo not found')
    }
  },
  Mutation: {
    addPlant: (parent, args) => {
      const newPlant = createPlant(args.name)
      photos.push(newPlant)

      return newPlant
    }
  }
})