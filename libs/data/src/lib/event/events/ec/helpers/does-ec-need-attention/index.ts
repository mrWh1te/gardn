import { LooseEnvironment } from 'libs/data/src/lib/environment/types'
import { EcEventData } from './../../../../../generated'

export const doesECNeedAttention = (lastECReadingEventData: Partial<EcEventData>, idealEnvironment: Partial<LooseEnvironment>): boolean => {

  // future have a threshold for when a reading event is considered too old, therefore a new reading is needed
  if (lastECReadingEventData.electricalConductivity == undefined) {
    return false
  }
  
  const { electricalConductivity: lastECReading } = lastECReadingEventData

  if(idealEnvironment.desiredElectricalConductivity) {
    const marginOfError = .08 // 8%
    const electricalConductivityCushion = idealEnvironment.desiredElectricalConductivity * marginOfError

    const minimumElectricalConductivity = idealEnvironment.desiredElectricalConductivity - electricalConductivityCushion
    const maximumElectricalConductivity = idealEnvironment.desiredElectricalConductivity + electricalConductivityCushion


    if (lastECReading >= minimumElectricalConductivity && lastECReading <= maximumElectricalConductivity) {
      return false; // sweet spot
    } else {
      return true;
    }
  }

  if (idealEnvironment.electricalConductivityMin && idealEnvironment.electricalConductivityMax) {
    if (lastECReading >= idealEnvironment.electricalConductivityMin && lastECReading <= idealEnvironment.electricalConductivityMax) {
      return false; // sweet spot
    } else {
      return true;
    }
  }
  
  return false
}