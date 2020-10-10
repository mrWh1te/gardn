import { createEnvironmentFactory } from './create-environment.factory'

describe('Create Environment Factory method returns a method to create an plant Environment type based on the Environment schema type', () => {
  const __typename = 'Environment';

  it('should create a function that can create Environment instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createEnvironmentIdStartAt5 = createEnvironmentFactory(5)

    expect(createEnvironmentIdStartAt5('name test 5')).toEqual({
      id: 5,
      name: 'name test 5',
      __typename,
      dateCreated: expect.any(Number)
    })

    expect(createEnvironmentIdStartAt5('name test 3', 'description')).toEqual({
      id: 6,
      name: 'name test 3',
      __typename,
      description: 'description',
      dateCreated: expect.any(Number)
    })

    const createEnvironmentNoParams = createEnvironmentFactory()

    expect(createEnvironmentNoParams('name 52')).toEqual({
      id: 1,
      name: 'name 52',
      __typename,
      dateCreated: expect.any(Number)
    })
  })

  it('should create a function that can create Environment instances with an overriden ID', () => {
    const createEnvironmentNoParams = createEnvironmentFactory()

    expect(createEnvironmentNoParams('name 56634', 'description 0', -72)).toEqual({
      id: -72,
      name: 'name 56634',
      __typename,
      description: 'description 0',
      dateCreated: expect.any(Number)
    })
  })
})