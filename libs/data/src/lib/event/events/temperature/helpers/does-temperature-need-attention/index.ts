import { EventStatusProblem } from '../../../../types';
import { LooseEnvironment } from './../../../../../environment/types';
import { TemperatureEventData } from './../../../../../generated'

export const doesTemperatureNeedAttention = (lastTemperatureReadingEventData: Partial<TemperatureEventData>, idealEnvironment: Partial<LooseEnvironment>): boolean|EventStatusProblem => {

  if (lastTemperatureReadingEventData.temperature == undefined) {
    return false
  }
  
  const { temperature } = lastTemperatureReadingEventData

  if (idealEnvironment.idealTemperatureMin && idealEnvironment.idealTemperatueMax) {
    if (temperature < idealEnvironment.idealTemperatureMin) {
      return 'low';
    } else if (temperature > idealEnvironment.idealTemperatueMax) {
      return 'high';
    } else {
      return false; // sweet spot
    }
  }
  
  return false
}