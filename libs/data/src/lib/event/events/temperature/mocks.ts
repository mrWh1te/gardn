import { TemperatureUnit } from '../../../generated'
import { createDBTemperatureEventData } from './helpers/create-db-temperature-event-data'

export const mockDBTemperatureEventData1 = createDBTemperatureEventData({
  temperature: 80,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})
export const mockDBTemperatureEventData2 = createDBTemperatureEventData({
  temperature: 72,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})
export const mockDBTemperatureEventData3 = createDBTemperatureEventData({
  temperature: 32,
  temperatureUnit: TemperatureUnit.Fahrenheit,
  eventTime: new Date().getTime()
})
