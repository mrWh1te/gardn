import { Environment, HumidityEventData } from './../../../../../generated'
import { doesHumidityNeedAttention } from './'

describe('doesHumidityNeedAttention method returns TRUE if the params lastHumidityDataEvent does not place within the boundaries of the ideal humidity conditions set for the param idealEnvironment', () => {
  const mockHumidityEventDataFailLow: Partial<HumidityEventData> = {
    humidity: 2 // outside ideal env boundaries
  }
  const mockHumidityEventDataFailHigh: Partial<HumidityEventData> = {
    humidity: 75 // outside ideal env boundaries
  }

  const mockHumidityEventDataMinMaxPass: Partial<HumidityEventData> = {
    humidity: 52.63 // within min/max boundaries
  }

  const mockIdealEnvironmentMinMaxSettings: Partial<Environment> = {
    idealHumidityMin: 45,
    idealHumidityMax: 70
  }

  // todo add more test-cases for the exact boundaries (<=, >=)

  it('should return TRUE (needs attention) when event data humidity is greater than the maximum humidity level or less than the minimum humidity level in the ideal environment', () => {
    expect(doesHumidityNeedAttention(mockHumidityEventDataFailLow, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
    expect(doesHumidityNeedAttention(mockHumidityEventDataFailHigh, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
  })

  it('should return FALSE (no attention needed) when event data humidity is between (or equal) to the minimum and maximum humidity levels from the ideal environment', () => {
    expect(doesHumidityNeedAttention(mockHumidityEventDataMinMaxPass, mockIdealEnvironmentMinMaxSettings)).toEqual(false)
  })
})