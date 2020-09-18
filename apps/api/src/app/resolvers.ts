import { IResolvers } from 'graphql-tools';

import { plantResolversFactory } from '@gardn/data'

const plantResolvers = plantResolversFactory()

export const resolvers: IResolvers = {
  Query: {
    ...plantResolvers.Query
  },
  Mutation: {
    ...plantResolvers.Mutation
  }
};