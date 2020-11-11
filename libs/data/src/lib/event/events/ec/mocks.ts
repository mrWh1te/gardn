import { ElectricalConductivityUnit } from '../../../generated'
import { createDBECEventData } from './helpers/create-db-ec-event-data'

export const mockECEventData1 = createDBECEventData({
  electricalConductivity: 0.9,
  electricalConductivityUnit: ElectricalConductivityUnit.MillisiemensPerMeter,
  eventTime: new Date().getTime()
})
export const mockECEventData2 = createDBECEventData({
  electricalConductivity: 1.3,
  electricalConductivityUnit: ElectricalConductivityUnit.MillisiemensPerMeter,
  eventTime: new Date().getTime()
})