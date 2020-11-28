import { LooseEnvironment } from './../../../../../environment/types';
import { HumidityEventData } from './../../../../../generated'

export const doesHumidityNeedAttention = (lastHumidityReadingEventData: Partial<HumidityEventData>, idealEnvironment: Partial<LooseEnvironment>): boolean => {

  // future have a threshold for when a reading event is considered too old, therefore a new reading is needed
  if (lastHumidityReadingEventData.humidity == undefined) {
    return false
  }
  
  const { humidity } = lastHumidityReadingEventData

  if (idealEnvironment.idealHumidityMin && idealEnvironment.idealHumidityMax) {
    if (humidity >= idealEnvironment.idealHumidityMin && humidity <= idealEnvironment.idealHumidityMax) {
      return false; // sweet spot
    } else {
      return true;
    }
  }
  
  return false
}