import { createDBModelInstanceFactory } from './'
import { BaseDbModel } from './../../generated';

describe('Create createDBModelInstanceFactory method returns a method to create a Model instance that extends BaseDbModel', () => {
  interface User extends BaseDbModel {
    name: string
  } 

  it('should create a function that can create a Model with required data beyond BaseDbModel that auto-increments ID', () => {
    const createUser = createDBModelInstanceFactory<User>()

    const mockUser1 = createUser({name: 'peter'})

    expect(mockUser1).toEqual({
      id: 1,
      dateCreated: expect.any(Number),
      name: 'peter'
    })

    const mockUser2 = createUser({name: 'sarah'})

    expect(mockUser2).toEqual({
      id: 2,
      dateCreated: expect.any(Number),
      name: 'sarah'
    })
  })
})