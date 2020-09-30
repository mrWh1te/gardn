import { makeExecutableSchema } from 'graphql-tools'
import { graphql, print } from 'graphql'

import { GetPhotoDocument, GetPhotosDocument } from '@gardn/data'

// TypeDefs for this data feature
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
const typesArray = loadFilesSync('libs/data/src/lib/**/*schema.graphql');
const typeDefs = mergeTypeDefs(typesArray);

// resolvers for this data feature
import { photoResolvers } from './resolvers';

// mocked data used in the development in-memory db
import { 
  mockLargePhoto1, 
  mockLargePhoto2,
  mockLargePhoto3,
  mockLargePhoto4,
  mockLargePhoto5
} from './mocks';

// a nice structure for test cases
// found at https://hackernoon.com/extensive-graphql-testing-57e8760f1c25
const allPhotosTestCase = {
    id: 'Generated getPhotos -> photos',
    query: print(GetPhotosDocument),
    variables: { },

    context: { },

    expected: { data: { 
      photos: [
        {...mockLargePhoto1, dateCreated: expect.any(Number)}, 
        {...mockLargePhoto2, dateCreated: expect.any(Number)},
        {...mockLargePhoto3, dateCreated: expect.any(Number)},
        {...mockLargePhoto4, dateCreated: expect.any(Number)},
        {...mockLargePhoto5, dateCreated: expect.any(Number)}
      ] 
    } }
}

const photoId2TestCase = {
  id: 'Generated getPhoto -> photo',
  query: print(GetPhotoDocument),
  variables: { 
    id: 2
  },

  context: { },

  expected: { data: { 
    photo: {
      id: 2,
      title: mockLargePhoto2.title,
      dateCreated: expect.any(Number),
      url: expect.any(String)
    }
  } }
}

describe('Plant Types & Resolvers', () => {
    // array of all test cases, just 1 for now
    const cases = [allPhotosTestCase, photoId2TestCase]

    // reading the actual schema
    // make the actual schema and resolvers executable
    const schema = makeExecutableSchema({ typeDefs, resolvers: photoResolvers })
    
    // running the test for each case in the cases array
    cases.forEach(obj => {
        const { id, query, variables, context, expected } = obj

        test(`query: ${id}`, async () => {
            const result = await graphql(schema, query, null, context, variables)
            return expect(result).toEqual(expected)
        })
    })
})