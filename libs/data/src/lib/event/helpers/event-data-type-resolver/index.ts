import { Resolvers } from './../../../generated';

export const eventDataTypeResolver: Resolvers['EventData']['__resolveType'] = (obj) => {
  if (obj['amount'] || obj['amountUnit']) {
    return 'WaterEventData';
  }

  if (obj['temperature'] || obj['temperatureUnit']) {
    return 'TemperatureEventData';
  }

  if (obj['previousLifeCycleId'] || obj['nextLifeCycleId']) {
    return 'LifeCycleEventData';
  }

  return null;
}