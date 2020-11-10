import { Environment, TemperatureEventData } from './../../../../../generated'
import { doesTemperatureNeedAttention } from './'

describe('doesTemperatureNeedAttention verifies params lastTemperatureDataEvent to place within the boundaries of the ideal temperature conditions set for the param idealEnvironment', () => {
  const mockTemperatureEventDataFailLow: Partial<TemperatureEventData> = {
    temperature: 45 // outside ideal env boundaries
  }
  const mockTemperatureEventDataFailHigh: Partial<TemperatureEventData> = {
    temperature: 81 // outside ideal env boundaries
  }

  const mockTemperatureEventDataMinMaxPass: Partial<TemperatureEventData> = {
    temperature: 72.63 // within min/max boundaries
  }

  const mockIdealEnvironmentMinMaxSettings: Partial<Environment> = {
    idealTemperatureMin: 70,
    idealTemperatueMax: 78
  }

  // todo add more test-cases for the exact boundaries (<=, >=)

  it('should return TRUE (needs attention) when event data temperature is greater than the maximum temperature level or less than the minimum temperature level in the ideal environment', () => {
    expect(doesTemperatureNeedAttention(mockTemperatureEventDataFailLow, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
    expect(doesTemperatureNeedAttention(mockTemperatureEventDataFailHigh, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
  })

  it('should return FALSE (no attention needed) when event data temperature is between (or equal) to the minimum and maximum temperature levels from the ideal environment', () => {
    expect(doesTemperatureNeedAttention(mockTemperatureEventDataMinMaxPass, mockIdealEnvironmentMinMaxSettings)).toEqual(false)
  })
})