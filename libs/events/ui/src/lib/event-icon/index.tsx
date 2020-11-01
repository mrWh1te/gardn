import React from 'react';

import { EventType } from '@gardn/data';
import { 
  BoltIcon,
  HumidityIcon,
  MilestoneIcon,
  SunIcon,
  ThermometerIcon,
  VialIcon,
  WaterDropletIcon
} from '@gardn/ui';

interface EventIconProps {
  eventType: EventType
}

export const EventIcon = ({eventType}: EventIconProps): JSX.Element => {
  switch (eventType) {
    case EventType.Water:
      return <WaterDropletIcon />
    case EventType.EcReading:
      return <BoltIcon />
    case EventType.HumidityReading:
      return <HumidityIcon />
    case EventType.LifeCycleChange:
      return <MilestoneIcon />
    case EventType.LightChange:
      return <SunIcon />
    case EventType.PhReading:
      return <VialIcon />
    case EventType.TemperatureReading:
      return <ThermometerIcon />
    default:
      return <div>Unknown Event Type</div>
  }
}

export default EventIcon;