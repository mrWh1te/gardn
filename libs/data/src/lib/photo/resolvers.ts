import { Resolvers } from './../generated';

export const photoResolvers: Resolvers = {
  Query: {
    photos: (_, __, { dataSources }) => dataSources.photo.getAll(),
    photo: (_, { id }, { dataSources }) => {
      const photo = dataSources.photo.byId({id});

      if (photo) {
        return photo;
      }
      
      return new Error('Photo not found')
    }
  },
  Mutation: {
    addPhoto: (_, { url, title }, { dataSources }) => dataSources.photo.new({url, title})
  }
}