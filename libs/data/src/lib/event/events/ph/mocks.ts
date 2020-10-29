import { createDBpHEventData } from './helpers/create-db-ph-event-data'

export const mockDBpHEventData1 = createDBpHEventData({
  pH: 5.2,
  eventTime: new Date().getTime()
})
export const mockDBpHEventData2 = createDBpHEventData({
  pH: 6.1,
  eventTime: new Date().getTime()
})