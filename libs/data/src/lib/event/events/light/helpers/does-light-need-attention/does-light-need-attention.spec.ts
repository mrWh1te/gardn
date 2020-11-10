import { Environment, LightEventData, TimeUnit } from './../../../../../generated'
import { doesLightNeedAttention } from './'
import { LooseEvent } from '../../../../types'

describe('doesLightNeedAttention method returns TRUE if the params lastLightDataEvent does not place within the boundaries of the ideal light conditions set for the param idealEnvironment', () => {
  const wrapInLooseEvent = (data: Partial<LightEventData>): Partial<LooseEvent> => ({ data })

  const mockLightEventData1: Partial<LightEventData> = {
    previousLightOn: false,
    lightOn: true,
    eventTime: new Date().getTime() - (22 * 60 * 60 * 1000)
  }
  const mockLightEventData2: Partial<LightEventData> = {
    previousLightOn: true,
    lightOn: false,
    eventTime: new Date().getTime() - (18 * 60 * 60 * 1000)
  }
  const eventsNotEnoughLight = [wrapInLooseEvent(mockLightEventData1), wrapInLooseEvent(mockLightEventData2)]


  const mockLightEventData3: Partial<LightEventData> = {
    previousLightOn: false,
    lightOn: true,
    eventTime: new Date().getTime() - (22 * 60 * 60 * 1000)
  }
  const mockLightEventData4: Partial<LightEventData> = {
    previousLightOn: true,
    lightOn: false,
    eventTime: new Date().getTime() - (2 * 60 * 60 * 1000)
  }
  const eventsTooMuchLight = [wrapInLooseEvent(mockLightEventData3), wrapInLooseEvent(mockLightEventData4)]


  const mockLightEventData5: Partial<LightEventData> = {
    previousLightOn: false,
    lightOn: true,
    eventTime: new Date().getTime() - (22 * 60 * 60 * 1000)
  }
  const mockLightEventData6: Partial<LightEventData> = {
    previousLightOn: true,
    lightOn: false,
    eventTime: new Date().getTime() - (4 * 60 * 60 * 1000)
  }
  const eventsRightAmountOfLight = [wrapInLooseEvent(mockLightEventData5), wrapInLooseEvent(mockLightEventData6)]

  
  const mockIdealEnvironmentMinMaxSettings: Partial<Environment> = {
    lightOnTime: 18,
    lightOnTimeUnit: TimeUnit.Hour,
    lightOnTimePerTimePeriod: 24,
    lightOnTimePerTimePeriodUnit: TimeUnit.Hour
  }

  // todo add more test-cases for the exact boundaries (<=, >=)

  it('should return TRUE (needs attention) when event data light is greater than the maximum light level or less than the minimum light level in the ideal environment', () => {
    expect(doesLightNeedAttention(eventsNotEnoughLight, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
    expect(doesLightNeedAttention(eventsTooMuchLight, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
  })

  it('should return FALSE (no attention needed) when event data light is between (or equal) to the minimum and maximum light levels from the ideal environment', () => {
    expect(doesLightNeedAttention(eventsRightAmountOfLight, mockIdealEnvironmentMinMaxSettings)).toEqual(false)
  })
})