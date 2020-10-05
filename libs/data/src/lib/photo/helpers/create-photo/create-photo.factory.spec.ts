import { createPhotoFactory } from './create-photo.factory'

describe('Create Plant Factory method returns a method to create a plant type based on the Plant schema type', () => {
  const __typename = 'Photo';

  it('should create a function that can create plant instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createPhotoIdStartAt5 = createPhotoFactory(5)

    expect(createPhotoIdStartAt5('http://example.com')).toEqual({
      id: 5,
      url: 'http://example.com',
      __typename,
      title: undefined,
      dateCreated: expect.any(Number)
    })

    expect(createPhotoIdStartAt5('http://example.com')).toEqual({
      id: 6,
      url: 'http://example.com',
      __typename,
      title: undefined,
      dateCreated: expect.any(Number)
    })

    const createPlantDefault = createPhotoFactory()

    expect(createPlantDefault('http://example.com')).toEqual({
      id: 1,
      url: 'http://example.com',
      __typename,
      title: undefined,
      dateCreated: expect.any(Number)
    })
  })

  it('should create a function that can create plant instances with an overriden ID', () => {
    const createPlantDefault = createPhotoFactory()

    expect(createPlantDefault('http://example.com', 'title', -72)).toEqual({
      id: -72,
      title: 'title', 
      url: 'http://example.com',
      __typename,
      dateCreated: expect.any(Number)
    })
  })
})