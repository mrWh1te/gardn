import { IResolvers } from 'graphql-tools';

import { resolvers as plantResolversFactory } from './resolvers/plant'

const plantResolvers = plantResolversFactory()

export const resolvers: IResolvers = {
  Query: {
    ...plantResolvers.Query
  },
  Mutation: {
    ...plantResolvers.Mutation
  }
};