import { TimestampResolver } from 'graphql-scalars';

import { 
  plantResolvers,
  photoResolvers,
  speciesResolvers,
  lifeCycleResolvers,
  environmentResolvers,
  lightSourceResolvers,
  eventResolvers,
  Resolvers
} from '@gardn/data';

export const resolvers: Resolvers = {
  Query: {
    ...photoResolvers.Query,
    ...plantResolvers.Query,
    ...speciesResolvers.Query,
    ...lifeCycleResolvers.Query,
    ...environmentResolvers.Query,
    ...lightSourceResolvers.Query,
    ...eventResolvers.Query,
  },
  Mutation: {
    ...photoResolvers.Mutation,
    ...plantResolvers.Mutation,
    ...speciesResolvers.Mutation
  },
  // Specific field resolvers
  Plant: plantResolvers.Plant,
  Species: speciesResolvers.Species,
  LifeCycle: lifeCycleResolvers.LifeCycle,
  Environment: environmentResolvers.Environment,
  Event: eventResolvers.Event,
  EventTarget: eventResolvers.EventTarget,
  EventData: eventResolvers.EventData,
  // Custom Scalars
  Timestamp: TimestampResolver,
  // JSON: JSONResolver,
  // BaseDBModel interface
  BaseDbModel: {
    __resolveType(modelInstance){
      if(modelInstance['__typename']){
        return modelInstance['__typename']
      }

      return null;
    },
  }
};