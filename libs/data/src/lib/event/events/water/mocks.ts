import { LiquidUnit, TemperatureUnit } from '../../../generated'
import { createDBWaterEventData } from './helpers/create-db-water-event-data'

export const mockDBWaterEventData1 = createDBWaterEventData({
  amount: 100,
  amountUnit: LiquidUnit.Milliliter,
  eventTime: new Date().getTime() // recently
})
export const mockDBWaterEventData2 = createDBWaterEventData({
  amount: 100,
  amountUnit: LiquidUnit.Milliliter,
  temperature: 72,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime() - 16 * 60 * 60 * 1000 // 16 hours ago
})