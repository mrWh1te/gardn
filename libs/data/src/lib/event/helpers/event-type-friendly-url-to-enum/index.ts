import { EventType } from '../../../generated';
import { EventTypeFriendlyUrl } from '../../types';

export const eventTypeFriendlyUrlToEnum = (friendlyEventTypeUrl: EventTypeFriendlyUrl): EventType => {
  switch (friendlyEventTypeUrl) {
    case 'ec':
      return EventType.EcReading
    case 'humidity':
      return EventType.HumidityReading
    case 'light':
      return EventType.LightChange
    case 'ph':
      return EventType.PhReading
    case 'temperature':
      return EventType.TemperatureReading
    case 'water':
      return EventType.Water
    case 'plant-stage':
      return EventType.PlantStageChange
    default:
      throw new Error('[eventTypeFriendlyUrlToEnum] case excemption for friendlyEventTypeUrl = ' + friendlyEventTypeUrl)
  }
}