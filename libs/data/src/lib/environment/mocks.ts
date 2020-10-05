import { createEnvironment } from './helpers/create-environment/create-environment';
import { LiquidUnit, TimeUnit, TemperatureUnit, HumidityUnit } from './../generated'

// Seed (during germination, pre-sprouting to sprouting, plenty of water and humidity, and no light)
export const mockEnvironmentSeed = createEnvironment(
  'Rain Forest',
  'A warm, humid, dark climate with plenty of rain',
  100,
  LiquidUnit.Milliliter,
  2,
  TimeUnit.Day,
  74,
  80,
  TemperatureUnit.Fahrenheit,
  TemperatureUnit.Fahrenheit,
  65,
  80,
  HumidityUnit.Percentage,
  HumidityUnit.Percentage,
  0,
  TimeUnit.Hour,
  1,
  TimeUnit.Day
);

// Seedling/Sprout (fragile little plant, need to slowly spread watering with increasing radius to encourage wide root growth, and light - 18/6)
export const mockEnvironmentSprout = createEnvironment(
  'Forest',
  'A warm, humid climate with a light cycle and plenty of rain',
  50,
  LiquidUnit.Milliliter,
  2,
  TimeUnit.Day,
  70,
  78,
  TemperatureUnit.Fahrenheit,
  TemperatureUnit.Fahrenheit,
  60,
  75,
  HumidityUnit.Percentage,
  HumidityUnit.Percentage,
  18,
  TimeUnit.Hour,
  1,
  TimeUnit.Day
);

// Veg'ing
export const mockEnvironmentVeg = createEnvironment(
  'Late Spring',
  'A slightly humid climate with enough warm heat, rain and sunshine to encourage plant growth',
  50,
  LiquidUnit.Milliliter,
  2,
  TimeUnit.Day,
  65,
  78,
  TemperatureUnit.Fahrenheit,
  TemperatureUnit.Fahrenheit,
  55,
  70,
  HumidityUnit.Percentage,
  HumidityUnit.Percentage,
  18,
  TimeUnit.Hour,
  1,
  TimeUnit.Day
);

// Early Flower
export const mockEnvironmentEarlyFlower = createEnvironment(
  'Early Spring',
  'A warming climate with soft conditions',
  50,
  LiquidUnit.Milliliter,
  2,
  TimeUnit.Day,
  65,
  78,
  TemperatureUnit.Fahrenheit,
  TemperatureUnit.Fahrenheit,
  40,
  55,
  HumidityUnit.Percentage,
  HumidityUnit.Percentage,
  18,
  TimeUnit.Hour,
  1,
  TimeUnit.Day
);

// Late Flower
export const mockEnvironmentLateFlower = createEnvironment(
  'After Winter\'s Last Frost',
  'A neutral warming climate with softest conditions to let plant complete flowering',
  50,
  LiquidUnit.Milliliter,
  2,
  TimeUnit.Day,
  64,
  75,
  TemperatureUnit.Fahrenheit,
  TemperatureUnit.Fahrenheit,
  30,
  40,
  HumidityUnit.Percentage,
  HumidityUnit.Percentage,
  18,
  TimeUnit.Hour,
  1,
  TimeUnit.Day
);