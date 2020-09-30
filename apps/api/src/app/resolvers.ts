import { TimestampResolver } from 'graphql-scalars';

import { 
  plantResolvers,
  photoResolvers,
  speciesResolvers
} from '@gardn/data';

export const resolvers: any = {
  Query: {
    ...photoResolvers.Query,
    ...plantResolvers.Query,
    ...speciesResolvers.Query
  },
  Mutation: {
    ...photoResolvers.Mutation,
    ...plantResolvers.Mutation,
    ...speciesResolvers.Mutation
  },
  Plant: plantResolvers.Plant,
  // Custom Scalars
  Timestamp: TimestampResolver
};