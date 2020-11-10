import { Environment, EcEventData } from './../../../../../generated'
import { doesECNeedAttention } from './'

describe('doesECNeedAttention method returns TRUE if the params lastECDataEvent does not place within the boundaries of the ideal EC conditions set for the param idealEnvironment', () => {
  const mockEcEventDataFailLow: Partial<EcEventData> = {
    electricalConductivity: .2 
  }
  const mockEcEventDataFailHigh: Partial<EcEventData> = {
    electricalConductivity: 8
  }

  const mockEcEventDataDesiredPass: Partial<EcEventData> = {
    electricalConductivity: 1.1
  }
  const mockEcEventDataMinMaxPass: Partial<EcEventData> = {
    electricalConductivity: 1.0
  }

  const mockIdealEnvironmentDesiredSetting: Partial<Environment> = {
    desiredElectricalConductivity: 1.1
  }
  const mockIdealEnvironmentMinMaxSettings: Partial<Environment> = {
    electricalConductivityMin: .8,
    electricalConductivityMax: 1.4
  }

  // todo add more test-cases for the exact boundaries (<=, >=)

  it('should return TRUE (needs attention) when event data EC is off desired environment EC levels by more than 8% +/-', () => {
    expect(doesECNeedAttention(mockEcEventDataFailLow, mockIdealEnvironmentDesiredSetting)).toEqual(true)
    expect(doesECNeedAttention(mockEcEventDataFailHigh, mockIdealEnvironmentDesiredSetting)).toEqual(true)
  })

  it('should return TRUE (needs attention) when event data EC is greater than the maximum EC level or lass than the minimum EC level in the ideal environment', () => {
    expect(doesECNeedAttention(mockEcEventDataFailLow, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
    expect(doesECNeedAttention(mockEcEventDataFailHigh, mockIdealEnvironmentMinMaxSettings)).toEqual(true)
  })

  it('should return FALSE (no attention needed) when event data EC is between (or equal) to the minimum and maximum EC levels from the ideal environment', () => {
    expect(doesECNeedAttention(mockEcEventDataMinMaxPass, mockIdealEnvironmentMinMaxSettings)).toEqual(false)
  })

  it('should return FALSE (no attention needed) when event data EC is within desired environment EC level by an 8% margin of error +/-', () => {
    expect(doesECNeedAttention(mockEcEventDataDesiredPass, mockIdealEnvironmentDesiredSetting)).toEqual(false)
  })
})