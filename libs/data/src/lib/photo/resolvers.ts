import { 
  createPhoto,
  mockLargePhoto1,
  mockLargePhoto2,
  mockLargePhoto3,
  mockLargePhoto4,
  mockLargePhoto5
 } from '@gardn/photo/helpers';

/**
 * Data is stored in memory for development
 * @param photos 
 */
export const photoResolversFactory = (photos = [
  mockLargePhoto1,
  mockLargePhoto2,
  mockLargePhoto3,
  mockLargePhoto4,
  mockLargePhoto5
]) => ({
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
      const newPhoto = createPhoto(args.name)
      photos.push(newPhoto)

      return newPhoto
    }
  }
})