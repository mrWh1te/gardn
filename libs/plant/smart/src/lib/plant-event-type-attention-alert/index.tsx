import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { 
  EventType,
  useGetPlantRecentEventsForEventTypeWithIdealEnvironmentLazyQuery,
  EventTypeFriendlyUrl,
  eventTypeFriendlyUrlToEnum,
  eventsHasEventWithType,
  filterEventsByType,
  eventsSelectOneByType,
  doesLightNeedAttention,
  doesWaterNeedAttention,
  doesECNeedAttention,
  doesHumidityNeedAttention,
  doesPHNeedAttention,
  doesTemperatureNeedAttention
} from '@gardn/data';
import { getPlantCurrentIdealEnvironment } from '@gardn/plant/helpers';
import { Alert } from '@gardn/ui'

export const PlantEventTypeAttentionAlert = () => {
  const { eventType, id } = useParams<{eventType: EventTypeFriendlyUrl, id: string}>()
  const eventTypeEnum = eventTypeFriendlyUrlToEnum(eventType)

  const [getPlantRecentEventsByTypeWithIdealEnvironment, { data, loading, error }] = useGetPlantRecentEventsForEventTypeWithIdealEnvironmentLazyQuery();

  useEffect(() => { 
    const hoursAgo24 = new Date().getTime() - (24 * 60 * 60 * 1000)
  
    getPlantRecentEventsByTypeWithIdealEnvironment({
      variables: {
        plantId: parseInt(id),
        eventType: eventTypeEnum,
        eventTimeMinimum: hoursAgo24
      }
    }) 
  }, [getPlantRecentEventsByTypeWithIdealEnvironment, id, eventType])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  const { plant } = data
  const environment = getPlantCurrentIdealEnvironment(plant)

  if (!environment) {
    return null // no environment to check event data against, so no way to determine if a recommendation is necessary
  }

  const { events } = data

  if (!eventsHasEventWithType(events, eventTypeEnum)) {
    return null // no relevant event data to compare against ideal environment conditions
  }

  const recentEventOfEventType = eventsSelectOneByType(events, eventTypeEnum)
  
  let eventTypeNeedsAttentionAlert: boolean

  switch (recentEventOfEventType.data?.__typename) {
    case 'LightEventData':
      // todo update each function from "does" to getting the status ailment in regards to needing attention
      // todo   therefore return type is boolean false for no attention or problemStatus = 'low' | 'high' 
      // todo   then knowing the status problem, a suggestion can be set via switch()
      eventTypeNeedsAttentionAlert = doesLightNeedAttention(events.filter(filterEventsByType(EventType.LightChange)), environment);

      // todo     type StatusProblem = 'high'|'low'
      // todo     rename functions ? i.e. forWhatDoesLightNeedAttention() : false | StatusProblem

      break;
    case 'WaterEventData':
      eventTypeNeedsAttentionAlert = doesWaterNeedAttention(events.filter(filterEventsByType(EventType.Water)), environment);
      break;
    case 'ECEventData':
      eventTypeNeedsAttentionAlert = doesECNeedAttention(recentEventOfEventType.data, environment);
      break;
    case 'HumidityEventData':
      eventTypeNeedsAttentionAlert = doesHumidityNeedAttention(recentEventOfEventType.data, environment);
      break;
    case 'PHEventData':
      eventTypeNeedsAttentionAlert = doesPHNeedAttention(recentEventOfEventType.data, environment);
      break;
    case 'TemperatureEventData':
      eventTypeNeedsAttentionAlert = doesTemperatureNeedAttention(recentEventOfEventType.data, environment);
      break;
    default:
      eventTypeNeedsAttentionAlert = false
  }

  if (!eventTypeNeedsAttentionAlert) {
    return null
  }
  
  return (
    <Alert title={'Attention'} visible={true}>
      {/* todo UI component props: eventType & statusProblem 'low'|'high' */}
      <p>The recorded humidity is below recommended levels.</p>
      <p>Suggested action(s):</p>
      <ul>
        <li>Increase humidity with a humidifier</li>
      </ul>
    </Alert>
  )
}

export default PlantEventTypeAttentionAlert