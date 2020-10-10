import { createEnvironmentsLightSourcesFactory } from './create-environments-light-sources.factory'

describe('Create EnvironmentLightSources Factory method returns a method to create an plant EnvironmentLightSources type based on the EnvironmentLightSources schema type', () => {

  it('should create a function that can create Environment<->LightSources relationship instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createEnvironmentLightSourcesIdStartAt5 = createEnvironmentsLightSourcesFactory(5)

    expect(createEnvironmentLightSourcesIdStartAt5(3, 6)).toEqual({
      id: 5,
      dateCreated: expect.any(Number),
      environmentId: 3,
      lightSourceId: 6
    })

    expect(createEnvironmentLightSourcesIdStartAt5(2, 4)).toEqual({
      id: 6,
      dateCreated: expect.any(Number),
      environmentId: 2,
      lightSourceId: 4
    })

    const createEnvironmentLightSourcesNoParams = createEnvironmentsLightSourcesFactory()

    expect(createEnvironmentLightSourcesNoParams(7, 9)).toEqual({
      id: 1,
      dateCreated: expect.any(Number),
      environmentId: 7,
      lightSourceId: 9
    })
  })

  it('should create a function that can create EnvironmentLightSources instances with an overriden ID', () => {
    const createEnvironmentLightSourcesNoParams = createEnvironmentsLightSourcesFactory()

    expect(createEnvironmentLightSourcesNoParams(13, 16, -72)).toEqual({
      id: -72,
      dateCreated: expect.any(Number),
      environmentId: 13,
      lightSourceId: 16
    })
  })
})