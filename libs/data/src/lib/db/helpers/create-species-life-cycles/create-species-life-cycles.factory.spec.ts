import { createSpeciesLifeCyclesFactory } from './create-species-life-cycles.factory'

describe('Create SpeciesLifeCycles Factory method returns a method to create an plant SpeciesLifeCycles type based on the SpeciesLifeCycles schema type', () => {

  it('should create a function that can create Species<->LifeCycles relationship instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createSpeciesLifeCyclesIdStartAt5 = createSpeciesLifeCyclesFactory(5)

    expect(createSpeciesLifeCyclesIdStartAt5(3, 6)).toEqual({
      id: 5,
      speciesId: 3,
      lifeCycleId: 6,
      dateCreated: expect.any(Number)
    })

    expect(createSpeciesLifeCyclesIdStartAt5(2, 4)).toEqual({
      id: 6,
      speciesId: 2,
      lifeCycleId: 4,
      dateCreated: expect.any(Number)
    })

    const createSpeciesLifeCyclesNoParams = createSpeciesLifeCyclesFactory()

    expect(createSpeciesLifeCyclesNoParams(7, 9)).toEqual({
      id: 1,
      speciesId: 7,
      lifeCycleId: 9,
      dateCreated: expect.any(Number)
    })
  })

  it('should create a function that can create SpeciesLifeCycles instances with an overriden ID', () => {
    const createSpeciesLifeCyclesNoParams = createSpeciesLifeCyclesFactory()

    expect(createSpeciesLifeCyclesNoParams(13, 16, -72)).toEqual({
      id: -72,
      speciesId: 13,
      lifeCycleId: 16,
      dateCreated: expect.any(Number)
    })
  })
})