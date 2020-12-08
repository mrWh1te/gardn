import { EventStatusProblem } from '../../../../types';
import { LooseEnvironment } from './../../../../../environment/types';
import { HumidityEventData } from './../../../../../generated'

export const doesHumidityNeedAttention = (lastHumidityReadingEventData: Partial<HumidityEventData>, idealEnvironment: Partial<LooseEnvironment>): boolean|EventStatusProblem => {

  // future have a threshold for when a reading event is considered too old, therefore a new reading is needed
  if (lastHumidityReadingEventData.humidity == undefined) {
    return false
  }
  
  const { humidity } = lastHumidityReadingEventData

  if (idealEnvironment.idealHumidityMin && idealEnvironment.idealHumidityMax) {
    if (humidity < idealEnvironment.idealHumidityMin) {
      return 'low';
    } else if (humidity > idealEnvironment.idealHumidityMax) {
      return 'high';
    } else {
      return false; // sweet spot
    }
  }
  
  return false
}