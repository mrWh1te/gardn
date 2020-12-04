import { DeepPartial } from '@gardn/helpers';
import { measurementUnitToAbbreviation as abbreviate } from '@gardn/data';

import { Environment, EventType } from '../../../generated';


export const generateIdealEnvironmentLabelByEventType = (environment: DeepPartial<Environment>, eventType: EventType): string => {
  let label

  switch(eventType){
    case 'EC_READING':
      label = environment.desiredElectricalConductivity ? environment.desiredElectricalConductivity + abbreviate(environment.desiredElectricalConductivityUnit) : environment.electricalConductivityMin ? environment.electricalConductivityMin + abbreviate(environment.electricalConductivityMinUnit) : ''
      if (environment.electricalConductivityMax) {
        if (environment.electricalConductivityMin) {
          label += ' - '
        }
        label += environment.electricalConductivityMax + abbreviate(environment.electricalConductivityMaxUnit)
      }
      break;

    case 'PH_READING':
      label = environment.desiredPH ? environment.desiredPH : environment.phMinimum ? environment.phMinimum : ''
      if (environment.phMinimum && environment.phMaximum) {
        label += ' - '
      }
      if (environment.phMaximum) {
        label += environment.phMaximum
      }
      if (label !== '') {
        label += ' pH';
      }
      break;

    case 'LIGHT_CHANGE':
      label = typeof environment.lightOnTime !== undefined ? environment.lightOnTime + ' ' + abbreviate(environment.lightOnTimeUnit) + ' / ' + environment.lightOnTimePerTimePeriod + ' ' + abbreviate(environment.lightOnTimePerTimePeriodUnit) : ''
      break;

    case 'WATER':
      label = environment.idealWaterAmount ? environment.idealWaterAmount + abbreviate(environment.idealWaterAmountUnit) + ' / ' + environment.idealWaterAmountPerTimePeriod + abbreviate(environment.idealWaterAmountPerTimePeriodUnit) : ''
      break;

    case 'HUMIDITY_READING':
      label = environment.idealHumidityMin ? environment.idealHumidityMin + ' ' + abbreviate(environment.idealHumidityMinUnit) : ''
      if (environment.idealHumidityMin && environment.idealHumidityMax) {
        label += ' - '
      }
      if (environment.idealHumidityMax) {
        label += environment.idealHumidityMax + ' ' + abbreviate(environment.idealHumidityMaxUnit)
      }
      break;

    case 'TEMPERATURE_READING':
      label = environment.idealTemperatureMin ? environment.idealTemperatureMin + ' ' + abbreviate(environment.idealTemperatureMinUnit) : ''
      if (environment.idealTemperatureMin && environment.idealTemperatueMax) {
        label += ' - '
      }
      if (environment.idealTemperatueMax) {
        label += environment.idealTemperatueMax + ' ' + abbreviate(environment.idealTemperatureMaxUnit)
      }
      break;
    
    default:
      label = ''
  }

  return label
}