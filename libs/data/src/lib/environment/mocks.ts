import { createEnvironment } from './helpers/create-environment/create-environment';
import { LiquidUnit, TimeUnit, TemperatureUnit, HumidityUnit, ElectricalConductivityUnit, Environment } from './../generated'

const mockEnvironmentSeedConditions: Partial<Environment> = {
  idealWaterAmount: 100,
  idealWaterAmountUnit: LiquidUnit.Milliliter,
  idealWaterAmountPerTimePeriod: 2,
  idealWaterAmountPerTimePeriodUnit: TimeUnit.Day,
  idealTemperatureMin: 74,
  idealTemperatueMax: 80,
  idealTemperatureMinUnit: TemperatureUnit.Fahrenheit,
  idealTemperatureMaxUnit: TemperatureUnit.Fahrenheit,
  idealHumidityMin: 65,
  idealHumidityMax: 80,
  idealHumidityMinUnit: HumidityUnit.Percentage,
  idealHumidityMaxUnit: HumidityUnit.Percentage,
  lightOnTime: 0,
  lightOnTimeUnit: TimeUnit.Hour,
  lightOnTimePerTimePeriod: 1,
  lightOnTimePerTimePeriodUnit: TimeUnit.Day,
  desiredPH: undefined,
  phMinimum: 5.2,
  phMaximum: 6.0,
  desiredElectricalConductivity: undefined,
  desiredElectricalConductivityUnit: undefined,
  electricalConductivityMin: 1.0,
  electricalConductivityMax: 1.4, 
  electricalConductivityMinUnit: ElectricalConductivityUnit.MillisiemensPerMeter,
  electricalConductivityMaxUnit: ElectricalConductivityUnit.MillisiemensPerMeter
}

// Seed (during germination, pre-sprouting to sprouting, plenty of water and humidity, and no light)
export const mockEnvironmentSeed = createEnvironment(
  'Rain Forest',
  'A warm, humid, dark climate with plenty of rain',
  mockEnvironmentSeedConditions
);

const mockEnvironmentSproutConditions: Partial<Environment> = {
  idealWaterAmount: 50,
  idealWaterAmountUnit: LiquidUnit.Milliliter,
  idealWaterAmountPerTimePeriod: 2,
  idealWaterAmountPerTimePeriodUnit: TimeUnit.Day,
  idealTemperatureMin: 70,
  idealTemperatueMax: 78,
  idealTemperatureMinUnit: TemperatureUnit.Fahrenheit,
  idealTemperatureMaxUnit: TemperatureUnit.Fahrenheit,
  idealHumidityMin: 60,
  idealHumidityMax: 75,
  idealHumidityMinUnit: HumidityUnit.Percentage,
  idealHumidityMaxUnit: HumidityUnit.Percentage,
  lightOnTime: 18,
  lightOnTimeUnit: TimeUnit.Hour,
  lightOnTimePerTimePeriod: 1,
  lightOnTimePerTimePeriodUnit: TimeUnit.Day,
  desiredPH: undefined,
  phMinimum: 6.0,
  phMaximum: 7.0,
  desiredElectricalConductivity: undefined,
  electricalConductivityMin: 1.0,
  electricalConductivityMax: 1.4,
  electricalConductivityMinUnit: ElectricalConductivityUnit.MillisiemensPerMeter,
  electricalConductivityMaxUnit: ElectricalConductivityUnit.MillisiemensPerMeter
}

// Seedling/Sprout (fragile little plant, need to slowly spread watering with increasing radius to encourage wide root growth, and light - 18/6)
export const mockEnvironmentSprout = createEnvironment(
  'Forest',
  'A warm, humid climate with a light cycle and plenty of rain',
  mockEnvironmentSproutConditions
);

const mockEnvironmentVegingConditions: Partial<Environment> = {
  idealWaterAmount: 50,
  idealWaterAmountUnit: LiquidUnit.Milliliter,
  idealWaterAmountPerTimePeriod: 2,
  idealWaterAmountPerTimePeriodUnit: TimeUnit.Day,
  idealTemperatureMin: 65,
  idealTemperatueMax: 78,
  idealTemperatureMinUnit: TemperatureUnit.Fahrenheit,
  idealTemperatureMaxUnit: TemperatureUnit.Fahrenheit,
  idealHumidityMin: 55,
  idealHumidityMax: 70,
  idealHumidityMinUnit: HumidityUnit.Percentage,
  idealHumidityMaxUnit: HumidityUnit.Percentage,
  lightOnTime: 18,
  lightOnTimeUnit: TimeUnit.Hour,
  lightOnTimePerTimePeriod: 1,
  lightOnTimePerTimePeriodUnit: TimeUnit.Day,
  desiredPH: 7.0,
  phMinimum: undefined,
  phMaximum: undefined,
  desiredElectricalConductivity: undefined,
  electricalConductivityMin: 1.0,
  electricalConductivityMax: 1.4,
  electricalConductivityMinUnit: ElectricalConductivityUnit.MillisiemensPerMeter,
  electricalConductivityMaxUnit: ElectricalConductivityUnit.MillisiemensPerMeter
}

// Veg'ing
export const mockEnvironmentVeg = createEnvironment(
  'Late Spring',
  'A slightly humid climate with enough warm heat, rain and sunshine to encourage plant growth',
  mockEnvironmentVegingConditions
);

const mockEnvironmentEarlyFlowerConditions: Partial<Environment> = {
  idealWaterAmount: 50,
  idealWaterAmountUnit: LiquidUnit.Milliliter,
  idealWaterAmountPerTimePeriod: 2,
  idealWaterAmountPerTimePeriodUnit: TimeUnit.Day,
  idealTemperatureMin: 65,
  idealTemperatueMax: 78,
  idealTemperatureMinUnit: TemperatureUnit.Fahrenheit,
  idealTemperatureMaxUnit: TemperatureUnit.Fahrenheit,
  idealHumidityMin: 45,
  idealHumidityMax: 55,
  idealHumidityMinUnit: HumidityUnit.Percentage,
  idealHumidityMaxUnit: HumidityUnit.Percentage,
  lightOnTime: 18,
  lightOnTimeUnit: TimeUnit.Hour,
  lightOnTimePerTimePeriod: 1,
  lightOnTimePerTimePeriodUnit: TimeUnit.Day,
  desiredPH: 7.0,
  phMinimum: undefined,
  phMaximum: undefined,
  desiredElectricalConductivity: 1.2,
  desiredElectricalConductivityUnit: ElectricalConductivityUnit.MillisiemensPerMeter
}

// Early Flower
export const mockEnvironmentEarlyFlower = createEnvironment(
  'Early Spring',
  'A warming climate with soft conditions',
  mockEnvironmentEarlyFlowerConditions
);

const mockEnvironmentLateFlowerConditions: Partial<Environment> = {
  idealWaterAmount: 50,
  idealWaterAmountUnit: LiquidUnit.Milliliter,
  idealWaterAmountPerTimePeriod: 2,
  idealWaterAmountPerTimePeriodUnit: TimeUnit.Day,
  idealTemperatureMin: 64,
  idealTemperatueMax: 75,
  idealTemperatureMinUnit: TemperatureUnit.Fahrenheit,
  idealTemperatureMaxUnit: TemperatureUnit.Fahrenheit,
  idealHumidityMin: 30,
  idealHumidityMax: 40,
  idealHumidityMinUnit: HumidityUnit.Percentage,
  idealHumidityMaxUnit: HumidityUnit.Percentage,
  lightOnTime: 18,
  lightOnTimeUnit: TimeUnit.Hour,
  lightOnTimePerTimePeriod: 1,
  lightOnTimePerTimePeriodUnit: TimeUnit.Day,
  desiredPH: 7.0,
  phMinimum: undefined,
  phMaximum: undefined,
  desiredElectricalConductivity: 1.2,
  desiredElectricalConductivityUnit: ElectricalConductivityUnit.MillisiemensPerMeter
}

// Late Flower
export const mockEnvironmentLateFlower = createEnvironment(
  'After Winter\'s Last Frost',
  'A neutral warming climate with softest conditions to let plant complete flowering',
  mockEnvironmentLateFlowerConditions
);