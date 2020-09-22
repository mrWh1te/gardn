import { TimestampResolver } from 'graphql-scalars';

import { 
  plantResolversFactory,
  photoResolversFactory
} from '@gardn/data';

const plantResolvers = plantResolversFactory();
const photoResolvers = photoResolversFactory();

export const resolvers: any = {
  Query: {
    ...photoResolvers.Query,
    ...plantResolvers.Query
  },
  Mutation: {
    ...photoResolvers.Mutation,
    ...plantResolvers.Mutation
  },
  // Custom Scalars
  Timestamp: TimestampResolver
};