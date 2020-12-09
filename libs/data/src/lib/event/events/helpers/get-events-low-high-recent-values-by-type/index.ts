import { DeepPartial } from '@gardn/helpers';
import { Event, EventType, TimeUnit, LiquidUnit, TemperatureUnit, HumidityUnit, ElectricalConductivityUnit } from './../../../../generated';
interface LowHighRecentValues {
  low: string,
  high: string,
  recent: string,
  unit: TimeUnit | LiquidUnit | TemperatureUnit | HumidityUnit | ElectricalConductivityUnit
}

/**
 * Works for all events except Plant Stage Changes and Light Changes
 * @param events 
 * @param eventType 
 */
export const getEventsLowHighRecentValuesByType = (events: DeepPartial<Event>[], eventType: EventType): LowHighRecentValues => {
  const eventsCopy = [...events];
  // note, data most likely pre-sorted by eventTime descending, maybe sort eventTime descending again, in case?
  let low, high, recent, unit;

  switch(eventType) {
    case 'WATER':
      recent = eventsCopy[0].data['amount']
      eventsCopy.sort((a, b) => b.data['amount'] - a.data['amount'])
      low = eventsCopy[eventsCopy.length - 1].data['amount']
      high = eventsCopy[0].data['amount']
      unit = eventsCopy[0].data['amountUnit']
      break;
    case 'HUMIDITY_READING':
      recent = eventsCopy[0].data['humidity']
      eventsCopy.sort((a, b) => b.data['humidity'] - a.data['humidity'])
      low = eventsCopy[eventsCopy.length - 1].data['humidity']
      high = eventsCopy[0].data['humidity']
      unit = eventsCopy[0].data['humidityUnit']
      break;
    case 'TEMPERATURE_READING':
      recent = eventsCopy[0].data['temperature']
      eventsCopy.sort((a, b) => b.data['temperature'] - a.data['temperature'])
      low = eventsCopy[eventsCopy.length - 1].data['temperature']
      high = eventsCopy[0].data['temperature']
      unit = eventsCopy[0].data['temperatureUnit']
      break;
    case 'PH_READING':
      recent = eventsCopy[0].data['pH']
      eventsCopy.sort((a, b) => b.data['pH'] - a.data['pH'])
      low = eventsCopy[eventsCopy.length - 1].data['pH']
      high = eventsCopy[0].data['pH']
      break;
    case 'EC_READING':
      recent = eventsCopy[0].data['electricalConductivity']
      eventsCopy.sort((a, b) => b.data['electricalConductivity'] - a.data['electricalConductivity'])
      low = eventsCopy[eventsCopy.length - 1].data['electricalConductivity']
      high = eventsCopy[0].data['electricalConductivity']
      unit = eventsCopy[0].data['electricalConductivityUnit']
      break;
  }

  return { low, high, recent, unit };
}



