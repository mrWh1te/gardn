import { EventStatusProblem } from '../../../../types'
import { LooseEnvironment } from './../../../../../environment/types'
import { PhEventData } from './../../../../../generated'

export const doesPHNeedAttention = (lastPHReadingEventData: Partial<PhEventData>, idealEnvironment: Partial<LooseEnvironment>): EventStatusProblem|boolean => {

  // future have a threshold for when a reading event is considered too old, therefore a new reading is needed
  if (lastPHReadingEventData.pH == undefined) {
    return false
  }
  
  const { pH } = lastPHReadingEventData

  if(idealEnvironment.desiredPH) {
    const marginOfError = .08 // 8%
    const pHCushion = idealEnvironment.desiredPH * marginOfError

    const minimumPH = idealEnvironment.desiredPH - pHCushion
    const maximumPH = idealEnvironment.desiredPH + pHCushion

    if (pH < minimumPH) {
      return 'low';
    }

    if (pH > maximumPH) {
      return 'high';
    }

    return false; // sweet spot, no attention needed
  }

  if (idealEnvironment.phMinimum && idealEnvironment.phMaximum) {

    if (pH < idealEnvironment.phMinimum) {
      return 'low';
    }

    if (pH > idealEnvironment.phMaximum) {
      return 'high';
    }
  }
  
  return false
}