import { Resolvers } from './../generated';

export const photoResolvers: Resolvers = {
  Query: {
    photos: (_, __, { dataSources }) => dataSources.Photo.getAll(),
    photo: (_, { id }, { dataSources }) => {
      const photo = dataSources.Photo.byId({id});

      if (photo) {
        return photo;
      }
      
      return new Error('Photo not found')
    }
  },
  Mutation: {
    addPhoto: (_, { url, title }, { dataSources }) => dataSources.Photo.new({url, title})
  }
}