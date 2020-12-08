import { EventStatusProblem, LooseEvent } from '../../../../types'
import { LooseEnvironment } from 'libs/data/src/lib/environment/types';

/**
 * Based on the last watering event, and the ideal environment's conditions, is it time to water again?
 * @param lastWaterEventData 
 * @param idealEnvironment 
 */
export const doesWaterNeedAttention = (lastWaterEventsData: Partial<LooseEvent>[], idealEnvironment: Partial<LooseEnvironment>): boolean|EventStatusProblem => {
  if (typeof idealEnvironment.idealWaterAmount !== 'number') {
    // not enough data to compare too, to ascertain if target needs attention in respect to its watering
    return false
  }

  // todo @future add a water temperature check, if they are providing such information
  
  // todo add unit conversion or force users, for the time being, to a single LiquidUnit of measurement
  //  the db will be setup to support various (hence the Unit fields in obj types), but to keep the code
  //  less, while not knowing what user's want, to reduce efforts, this will be added in the future
  //  therefore, now, for v1, the LiquidUnit available to Users, such as myself, will be restricted to one type
  //    maybe milliliter 
  const totalWatering = lastWaterEventsData.reduce((totalWater, event, i, array) => {
    if (typeof event.data['amount'] === 'number') {
      totalWater += event.data['amount']
    }

    return totalWater
  }, 0);

  // todo @future user preferences to provide acceptable margin of error (determine if users want this first)
  const marginOfError = .08; // 8%

  const idealWaterAmountPerTimePeriod = idealEnvironment.idealWaterAmount * idealEnvironment.idealWaterAmountPerTimePeriod; // for now force a single TimeUnit of Day, therefore it's ideal water amount happening multiple times a day 1 or more (idealWaterAMountPerTimePeriod, for now time period fixed to 24 hours)

  const waterCushion = idealWaterAmountPerTimePeriod * marginOfError;
  if (totalWatering < idealWaterAmountPerTimePeriod - waterCushion) {
    return 'low'
  } else if ( totalWatering > idealWaterAmountPerTimePeriod + waterCushion) {
    return 'high'; 
  } else {
    return false; // sweet spot
  }  
}
