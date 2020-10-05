import { Environment, LiquidUnit, TimeUnit, TemperatureUnit, HumidityUnit } from './../../../generated';

/**
 * createEnvironmentFactory() returns a createEnvironment() function with automatic ID incrementing if not overriden with optional param
 * 
 *  *Note* This is a plant's environment. It's atmosphere, it's water cycle(s), etc.
 * 
 * @param nextEnvironmentId 
 */
export const createEnvironmentFactory = 
  (nextEnvironmentId = 1) => 
    (
      name: string,
      description?: string,
      idealWaterAmount?: number,
      idealWaterAmountUnit?: LiquidUnit,
      idealWaterAmountPerTimePeriod?: number,
      idealWaterAmountPerTimePeriodUnit?: TimeUnit,
      idealTemperatureMin?: number,
      idealTemperatueMax?: number,
      idealTemperatureMinUnit?: TemperatureUnit,
      idealTemperatureMaxUnit?: TemperatureUnit,
      idealHumidityMin?: number,
      idealHumidityMax?: number,
      idealHumidityMinUnit?: HumidityUnit,
      idealHumidityMaxUnit?: HumidityUnit,
      lightOnTime?: number,
      lightOnTimeUnit?: TimeUnit,
      lightOnTimePerTimePeriod?: number,
      lightOnTimePerTimePeriodUnit?: TimeUnit,
      id?: number
    ): Environment => { 
      const nextId = typeof id === 'number' ? id : nextEnvironmentId++

      const dateCreated = new Date().getTime();
      const __typename = 'Environment';
      
      return {
        id: nextId,
        __typename,
        dateCreated,
        name,
        description,
        idealWaterAmount,
        idealWaterAmountUnit,
        idealWaterAmountPerTimePeriod,
        idealWaterAmountPerTimePeriodUnit,
        idealTemperatureMin,
        idealTemperatueMax,
        idealTemperatureMinUnit,
        idealTemperatureMaxUnit,
        idealHumidityMin,
        idealHumidityMax,
        idealHumidityMinUnit,
        idealHumidityMaxUnit,
        lightOnTime,
        lightOnTimeUnit,
        lightOnTimePerTimePeriod,
        lightOnTimePerTimePeriodUnit
      }
    };