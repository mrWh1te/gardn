import { Resolvers } from './../../../generated';

export const eventDataTypeResolver: Resolvers['EventData']['__resolveType'] = (obj) => {
  if (obj['amount'] || obj['temperature']) {
    return 'WaterEventData';
  }

  if (obj['previousLifeCycleId'] || obj['nextLifeCycleId']) {
    return 'LifeCycleEventData';
  }

  return null;
}