import { TemperatureUnit } from '../../../generated'
import { createDBTemperatureEventData } from './helpers/create-db-temperature-event-data'

export const mockTemperatureEventData1 = createDBTemperatureEventData({
  temperature: 80,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})
export const mockTemperatureEventData2 = createDBTemperatureEventData({
  temperature: 72,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})
export const mockTemperatureEventData3 = createDBTemperatureEventData({
  temperature: 32,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})
