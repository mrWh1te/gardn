import { Environment, TemperatureEventData } from './../../../../../generated'

export const doesTemperatureNeedAttention = (lastTemperatureReadingEventData: Partial<TemperatureEventData>, idealEnvironment: Partial<Environment>): boolean => {

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