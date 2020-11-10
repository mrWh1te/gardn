import { Environment, PhEventData } from './../../../../../generated'
import { doesPHNeedAttention } from './'

describe('doesPHNeedAttention method returns TRUE if the params lastPHDataEvent does not place within the boundaries of the ideal ph conditions set for the param idealEnvironment', () => {
  const mockPHEventDataFailLow: Partial<PhEventData> = {
    pH: 2 // outside ideal env boundaries
  }
  const mockPHEventDataFailHigh: Partial<PhEventData> = {
    pH: 10 // outside ideal env boundaries
  }

  const mockPHEventDataDesiredPass: Partial<PhEventData> = {
    pH: 6.3 // within 8% margin of error boundaries
  }
  const mockPHEventDataMinMaxPass: Partial<PhEventData> = {
    pH: 7 // within min/max boundaries
  }

  const mockIdealEnvironmentDesiredSetting: Partial<Environment> = {
    desiredPH: 6
  }
  const mockIdealEnvironmentMinMaxSettings: Partial<Environment> = {
    phMinimum: 4,
    phMaximum: 7
  }

  // todo add more test-cases for the exact boundaries (<=, >=)

  it('should return TRUE (needs attention) when event data pH is off desired environment pH levels by more than 8% +/-', () => {
    expect(doesPHNeedAttention(mockPHEventDataFailLow, mockIdealEnvironmentDesiredSetting)).toEqual(true)
    expect(doesPHNeedAttention(mockPHEventDataFailHigh, mockIdealEnvironmentDesiredSetting)).toEqual(true)
  })

  it('should return TRUE (needs attention) when event data pH is greater than the maximum pH level or lass than the minimum pH level in the ideal environment', () => {
    expect(doesPHNeedAttention(mockPHEventDataFailLow, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
    expect(doesPHNeedAttention(mockPHEventDataFailHigh, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
  })

  it('should return FALSE (no attention needed) when event data pH is between (or equal) to the minimum and maximum pH levels from the ideal environment', () => {
    expect(doesPHNeedAttention(mockPHEventDataMinMaxPass, mockIdealEnvironmentMinMaxSettings)).toEqual(false)
  })

  it('should return FALSE (no attention needed) when event data pH is within desired environment pH level by an 8% margin of error +/-', () => {
    expect(doesPHNeedAttention(mockPHEventDataDesiredPass, mockIdealEnvironmentDesiredSetting)).toEqual(false)
  })
})