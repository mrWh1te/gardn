import { LightBulbColor, LightBulbType } from '../../../generated';
import { createDBLightEventData } from './helpers/create-db-light-event-data';

export const mockDBLightEventData1 = createDBLightEventData({
  lightOn: true,
  bulbType: LightBulbType.Mh,
  wattage: 1000,
  color: LightBulbColor.FarRed,
  eventTime: new Date().getTime()
})
export const mockDBLightEventData2 = createDBLightEventData({
  lightOn: false,
  bulbType: LightBulbType.Mh,
  wattage: 1200,
  color: LightBulbColor.Blue,
  eventTime: new Date().getTime()
})