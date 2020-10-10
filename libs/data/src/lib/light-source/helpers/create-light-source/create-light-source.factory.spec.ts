import { createLightSourceFactory } from './create-light-source.factory'

describe('Create Lightsource Factory method returns a method to create an environment LightSource type based on the LightSource schema type', () => {
  const __typename = 'LightSource';

  it('should create a function that can create LightSource instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createLightSourceIdStartAt5 = createLightSourceFactory(5)

    expect(createLightSourceIdStartAt5('name test 5')).toEqual({
      id: 5,
      name: 'name test 5',
      __typename,
      dateCreated: expect.any(Number)
    })

    expect(createLightSourceIdStartAt5('name test 3', 'description')).toEqual({
      id: 6,
      name: 'name test 3',
      __typename,
      description: 'description',
      dateCreated: expect.any(Number)
    })

    const createLightSourceNoParams = createLightSourceFactory()

    expect(createLightSourceNoParams('name 52')).toEqual({
      id: 1,
      name: 'name 52',
      __typename,
      dateCreated: expect.any(Number)
    })
  })

})