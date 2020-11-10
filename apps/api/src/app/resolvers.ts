import { TimestampResolver } from 'graphql-scalars';

import { 
  plantResolvers,
  photoResolvers,
  speciesResolvers,
  plantStageResolvers,
  environmentResolvers,
  lightBulbTemplateResolvers,
  eventResolvers,
  plantStageEventDataResolvers,
  Resolvers
} from '@gardn/data';

export const resolvers: Resolvers = {
  Query: {
    ...photoResolvers.Query,
    ...plantResolvers.Query,
    ...speciesResolvers.Query,
    ...plantStageResolvers.Query,
    ...environmentResolvers.Query,
    ...lightBulbTemplateResolvers.Query,
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
  PlantStage: plantStageResolvers.PlantStage,
  Environment: environmentResolvers.Environment,
  Event: eventResolvers.Event,
  EventTarget: eventResolvers.EventTarget,
  EventData: eventResolvers.EventData,
  PlantStageEventData: plantStageEventDataResolvers.PlantStageEventData,
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