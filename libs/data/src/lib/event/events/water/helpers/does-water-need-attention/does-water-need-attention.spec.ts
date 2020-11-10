import { Environment, WaterEventData, TimeUnit, LiquidUnit } from './../../../../../generated'
import { doesWaterNeedAttention } from './'
import { LooseEvent } from '../../../../types'

describe('doesWaterNeedAttention method returns TRUE if the params lastWaterDataEvent does not place within the boundaries of the ideal light conditions set for the param idealEnvironment', () => {
  const wrapInLooseEvent = (data: Partial<WaterEventData>): Partial<LooseEvent> => ({ data })

  const mockWaterEventData1: Partial<WaterEventData> = {
    amount: 10,
    amountUnit: LiquidUnit.Milliliter,
    eventTime: new Date().getTime() - (22 * 60 * 60 * 1000)
  }
  const mockWaterEventData2: Partial<WaterEventData> = {
    amount: 20,
    amountUnit: LiquidUnit.Milliliter,
    eventTime: new Date().getTime() - (18 * 60 * 60 * 1000)
  }
  const eventsNotEnoughWater = [wrapInLooseEvent(mockWaterEventData1), wrapInLooseEvent(mockWaterEventData2)]


  const mockWaterEventData3: Partial<WaterEventData> = {
    amount: 60,
    amountUnit: LiquidUnit.Milliliter,
    eventTime: new Date().getTime() - (22 * 60 * 60 * 1000)
  }
  const mockWaterEventData4: Partial<WaterEventData> = {
    amount: 60,
    amountUnit: LiquidUnit.Milliliter,
    eventTime: new Date().getTime() - (2 * 60 * 60 * 1000)
  }
  const eventsTooMuchWater = [wrapInLooseEvent(mockWaterEventData3), wrapInLooseEvent(mockWaterEventData4)]


  const mockWaterEventData5: Partial<WaterEventData> = {
    amount: 101.2, // there's an 8% +/- margin of error cushion, it doesn't have to be exact
    amountUnit: LiquidUnit.Milliliter,
    eventTime: new Date().getTime() - (22 * 60 * 60 * 1000)
  }
  const mockWaterEventData6: Partial<WaterEventData> = {
    amount: 99.8,
    amountUnit: LiquidUnit.Milliliter,
    eventTime: new Date().getTime() - (4 * 60 * 60 * 1000)
  }
  const eventsRightAmountOfWater = [wrapInLooseEvent(mockWaterEventData5), wrapInLooseEvent(mockWaterEventData6)]

  const mockIdealEnvironment100mlTwiceADay: Partial<Environment> = {
    idealWaterAmount: 100,
    idealWaterAmountUnit: LiquidUnit.Milliliter,
    idealWaterAmountPerTimePeriod: 2,
    idealWaterAmountPerTimePeriodUnit: TimeUnit.Day
  } 

  // todo add more test-cases for the exact boundaries (<=, >=)

  it('should return TRUE (needs attention) when event data light is greater than the maximum light level or less than the minimum light level in the ideal environment', () => {
    expect(doesWaterNeedAttention(eventsNotEnoughWater, mockIdealEnvironment100mlTwiceADay)).toEqual(true)
    expect(doesWaterNeedAttention(eventsTooMuchWater, mockIdealEnvironment100mlTwiceADay)).toEqual(true)
  })

  it('should return FALSE (no attention needed) when event data light is between (or equal) to the minimum and maximum light levels from the ideal environment', () => {
    expect(doesWaterNeedAttention(eventsRightAmountOfWater, mockIdealEnvironment100mlTwiceADay)).toEqual(false)
  })
})