import { createPhotoFactory } from './create-photo.factory'

describe('Create Plant Factory method returns a method to create a plant type based on the Plant schema type', () => {
  it('should create a function that can create plant instances with incrementing ID that starts with the given value or fallback of 1', () => {
    const createPlantIdStartAt5 = createPhotoFactory(5)

    expect(createPlantIdStartAt5('http://example.com')).toEqual({
      id: 5,
      title: 'http://example.com'
    })

    expect(createPlantIdStartAt5('http://example.com')).toEqual({
      id: 6,
      title: 'http://example.com'
    })

    const createPlantDefault = createPhotoFactory()

    expect(createPlantDefault('http://example.com')).toEqual({
      id: 1,
      title: 'http://example.com'
    })
  })

  it('should create a function that can create plant instances with an overriden ID', () => {
    const createPlantDefault = createPhotoFactory()

    expect(createPlantDefault('http://example.com', 'title', -72)).toEqual({
      id: -72,
      title: 'title',
      url: 'http://example.com'
    })
  })
})