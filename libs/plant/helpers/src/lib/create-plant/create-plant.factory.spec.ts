import { createPlantFactory } from './create-plant.factory'

describe('Create Plant Factory method returns a method to create a plant type based on the Plant schema type', () => {
  it('should create a function that can create plant instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createPlantIdStartAt5 = createPlantFactory(5)

    expect(createPlantIdStartAt5('peter')).toEqual({
      id: 5,
      name: 'peter'
    })

    expect(createPlantIdStartAt5('parker')).toEqual({
      id: 6,
      name: 'parker'
    })

    const createPlantDefault = createPlantFactory()

    expect(createPlantDefault('sam')).toEqual({
      id: 1,
      name: 'sam'
    })
  })

  it('should create a function that can create plant instances with an overriden ID', () => {
    const createPlantDefault = createPlantFactory()

    expect(createPlantDefault('sam', -72)).toEqual({
      id: -72,
      name: 'sam'
    })
  })
})