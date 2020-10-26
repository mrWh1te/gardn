import { LiquidUnit, TemperatureUnit } from '../../../generated'
import { createDBWaterEventData } from './helpers/create-db-water-event-data'

export const mockDBWaterEventData1 = createDBWaterEventData({
  amount: 100,
  amountUnit: LiquidUnit.Milliliter,
  eventTime: new Date().getTime()
})
export const mockDBWaterEventData2 = createDBWaterEventData({
  amount: 100,
  amountUnit: LiquidUnit.Milliliter,
  temperature: 72,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})