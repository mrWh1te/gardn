import { LooseEnvironment } from './../../../../../environment/types';
import { TemperatureEventData } from './../../../../../generated'

export const doesTemperatureNeedAttention = (lastTemperatureReadingEventData: Partial<TemperatureEventData>, idealEnvironment: Partial<LooseEnvironment>): boolean => {

  if (lastTemperatureReadingEventData.temperature == undefined) {
    return false
  }
  
  const { temperature } = lastTemperatureReadingEventData

  if (idealEnvironment.idealTemperatureMin && idealEnvironment.idealTemperatueMax) {
    if (temperature >= idealEnvironment.idealTemperatureMin && temperature <= idealEnvironment.idealTemperatueMax) {
      return false; // sweet spot
    } else {
      return true;
    }
  }
  
  return false
}