import React from 'react';

import { GetPlantEventsQuery } from '@gardn/data';

import ECEventData from '../ec-event-data';
import HumidityEventData from '../humidity-event-data';
import LifeCycleEventData from '../life-cycle-event-data';
import LightEventData from '../light-event-data';
import PhEventData from '../ph-event-data';
import TemperatureEventData from '../temperature-event-data';
import WaterEventData from '../water-event-data';


interface EventDataProps {
  event: GetPlantEventsQuery['plant']['events'][number]
}

export const EventData = ({event}: EventDataProps): JSX.Element => {
  // by relying on event.data.__typename (instead of event.type), each EventData union type ie WaterEventData, can be inferred, given the generated typing
  switch (event.data.__typename) {
    case 'WaterEventData':
      return <WaterEventData data={event.data} />
    case 'ECEventData':
      return <ECEventData data={event.data} />
    case 'HumidityEventData':
      return <HumidityEventData data={event.data} />
    case 'LifeCycleEventData':
      return <LifeCycleEventData data={event.data} />
    case 'LightEventData':
      return <LightEventData data={event.data} />
    case 'PHEventData':
      return <PhEventData data={event.data} />
    case 'TemperatureEventData':
      return <TemperatureEventData data={event.data} />
    default:
      return <div>Unknown Event Type</div>
  }
}

export default EventData;