import { TimestampResolver } from 'graphql-scalars';

import { 
  plantResolvers,
  photoResolvers,
  speciesResolvers,
  lifeCycleResolvers,
  environmentResolvers,
  lightSourceResolvers
} from '@gardn/data';

export const resolvers: any = {
  Query: {
    ...photoResolvers.Query,
    ...plantResolvers.Query,
    ...speciesResolvers.Query,
    ...lifeCycleResolvers.Query,
    ...environmentResolvers.Query,
    ...lightSourceResolvers.Query
  },
  Mutation: {
    ...photoResolvers.Mutation,
    ...plantResolvers.Mutation,
    ...speciesResolvers.Mutation
  },
  Plant: plantResolvers.Plant,
  Species: speciesResolvers.Species,
  LifeCycle: lifeCycleResolvers.LifeCycle,
  Environment: environmentResolvers.Environment,
  // Custom Scalars
  Timestamp: TimestampResolver
};