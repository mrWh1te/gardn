import { Resolvers } from './../generated';

export const photoResolvers: Resolvers = {
  Query: {
    photos: (_, __, { dataSources }) => dataSources.photo.getAllPhotos(),
    photo: (_, { id }, { dataSources }) => {
      const photo = dataSources.photo.getPhotoById({id});

      if (photo) {
        return photo;
      }
      
      return new Error('Photo not found')
    }
  },
  Mutation: {
    addPhoto: (_, { url, title }, { dataSources }) => dataSources.photo.addPhoto({url, title})
  }
}