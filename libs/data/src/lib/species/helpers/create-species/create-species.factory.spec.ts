import { createSpeciesFactory } from './create-species.factory'

describe('Create Plant Factory method returns a method to create a plant type based on the Plant schema type', () => {
  const __typename = 'Species';

  it('should create a function that can create plant instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createSpeciesIdStartAt5 = createSpeciesFactory(5)

    expect(createSpeciesIdStartAt5('peter')).toEqual({
      id: 5,
      name: 'peter',
      __typename
    })

    expect(createSpeciesIdStartAt5('parker')).toEqual({
      id: 6,
      name: 'parker',
      __typename
    })

    const createSpeciesDefault = createSpeciesFactory()

    expect(createSpeciesDefault('sam')).toEqual({
      id: 1,
      name: 'sam',
      __typename
    })
  })

  it('should create a function that can create plant instances with an overriden ID and set description', () => {
    const createSpeciesDefault = createSpeciesFactory()

    expect(createSpeciesDefault('sam', 'a description', -72)).toEqual({
      id: -72,
      description: 'a description',
      name: 'sam',
      __typename
    })
  })
})