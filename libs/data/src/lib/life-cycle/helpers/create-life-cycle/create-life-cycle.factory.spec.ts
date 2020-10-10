import { createLifeCycleFactory } from './create-life-cycle.factory'

describe('Create LifeCycle Factory method returns a method to create a LifeCycle type based on the LifeCycle schema type', () => {

  const __typename = 'LifeCycle';

  it('should create a function that can create LifeCycle instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createLifecycleIdStartAt5 = createLifeCycleFactory(5)

    expect(createLifecycleIdStartAt5('name test')).toEqual({
      id: 5,
      name: 'name test',
      __typename,
      dateCreated: expect.any(Number)
    })

    expect(createLifecycleIdStartAt5('name test 3', 'description')).toEqual({
      id: 6,
      name: 'name test 3',
      __typename,
      description: 'description',
      dateCreated: expect.any(Number)
    })

    const createLifeCycleNoParams = createLifeCycleFactory()

    expect(createLifeCycleNoParams('name 52')).toEqual({
      id: 1,
      name: 'name 52',
      __typename,
      dateCreated: expect.any(Number)
    })
  })

  it('should create a function that can create LifeCycle instances with an overriden ID', () => {
    const createLifeCycleNoParams = createLifeCycleFactory()

    expect(createLifeCycleNoParams('name 56634', 'description 0', -72)).toEqual({
      id: -72,
      name: 'name 56634',
      __typename,
      description: 'description 0',
      dateCreated: expect.any(Number)
    })
  })
})