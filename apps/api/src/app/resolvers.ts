import { IResolvers } from 'graphql-tools';

import { 
  plantResolversFactory,
  photoResolversFactory
} from '@gardn/data';

const plantResolvers = plantResolversFactory();
const photoResolvers = photoResolversFactory();

export const resolvers: IResolvers = {
  Query: {
    ...photoResolvers.Query,
    ...plantResolvers.Query
  },
  Mutation: {
    ...photoResolvers.Mutation,
    ...plantResolvers.Mutation
  }
};