import { LightBulbColor, LightBulbType } from '../../../generated';
import { createDBLightEventData } from './helpers/create-db-light-event-data';

export const mockLightEventData1 = createDBLightEventData({
  lightOn: false,
  bulbType: LightBulbType.Mh,
  wattage: 1000,
  color: LightBulbColor.FarRed,
  eventTime: new Date().getTime() - (2 * 60 * 60 * 1000) // 2 hours ago
})
export const mockLightEventData2 = createDBLightEventData({
  previousLightOn: false,
  lightOn: true,
  bulbType: LightBulbType.Mh,
  wattage: 1200,
  color: LightBulbColor.Blue,
  eventTime: new Date().getTime() - (8 * 60 * 60 * 1000) // 8 hours ago
})