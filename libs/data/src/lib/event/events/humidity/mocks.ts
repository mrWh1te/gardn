import { HumidityUnit } from '../../../generated'
import { createDBHumidityEventData } from './helpers/create-db-humidity-event-data'

export const mockDBHumidityEventData1 = createDBHumidityEventData({
  humidity: 62.3,
  humidityUnit: HumidityUnit.Percentage,
  eventTime: new Date().getTime()
})
export const mockDBHumidityEventData2 = createDBHumidityEventData({
  humidity: 45.8,
  humidityUnit: HumidityUnit.Percentage,
  eventTime: new Date().getTime()
})