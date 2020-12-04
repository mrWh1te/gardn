import React from 'react';

import { EventType } from '@gardn/data';
import { BoltIcon, HumidityIcon, SunIcon, ThermometerIcon, VialIcon, WaterDropletIcon } from '@gardn/ui';

/* eslint-disable-next-line */
export interface PlantEventTypeLabelProps {
  eventType: EventType
}

export const PlantEventTypeLabel = ({eventType}: PlantEventTypeLabelProps) => {
  let label: string
  let labelIcon: JSX.Element

  switch( eventType ) {
    case 'EC_READING':
      label = 'Electrical Conductivity'
      labelIcon = <BoltIcon />
      break;
    case 'HUMIDITY_READING':
      label = 'Humidity'
      labelIcon = <HumidityIcon />
      break;
    case 'LIGHT_CHANGE':
      label = 'Light'
      labelIcon = <SunIcon />
      break;
    case 'PH_READING':
      label = 'pH'
      labelIcon = <VialIcon />
      break;
    case 'TEMPERATURE_READING':
      label = 'Temperature'
      labelIcon = <ThermometerIcon />
      break;
    case 'WATER':
      label = 'Water'
      labelIcon = <WaterDropletIcon />
      break;
  }

  return (
    <div>{ label } { labelIcon }</div>
  )
}

export default PlantEventTypeLabel