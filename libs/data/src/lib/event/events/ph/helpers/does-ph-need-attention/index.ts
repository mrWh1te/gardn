import { Environment, PhEventData } from './../../../../../generated'

export const doesPHNeedAttention = (lastPHReadingEventData: Partial<PhEventData>, idealEnvironment: Partial<Environment>): boolean => {

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


    if (pH >= minimumPH && pH <= maximumPH) {
      return false; // sweet spot
    } else {
      return true;
    }
  }

  if (idealEnvironment.phMinimum && idealEnvironment.phMaximum) {
    if (pH >= idealEnvironment.phMinimum && pH <= idealEnvironment.phMaximum) {
      return false; // sweet spot
    } else {
      return true;
    }
  }
  
  return false
}