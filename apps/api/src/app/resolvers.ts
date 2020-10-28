import { TimestampResolver } from 'graphql-scalars';

import { 
  plantResolvers,
  photoResolvers,
  speciesResolvers,
  lifeCycleResolvers,
  environmentResolvers,
  lightSourceResolvers,
  eventResolvers,
  lifeCycleEventDataResolvers,
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
  LifeCycleEventData: lifeCycleEventDataResolvers.LifeCycleEventData,
  // Custom Scalars
  Timestamp: TimestampResolver,
  // Base interfaces
  Node: {
    __resolveType(){
      return 'Event';
    },
  },
  BaseDbModel: {
    __resolveType(obj){
      if(obj['__typename']){
        return obj['__typename']
      }

      return null;
    },
  },
  BaseEventData: eventResolvers.BaseEventData
};