import { makeExecutableSchema } from 'graphql-tools'
import { graphql, print } from 'graphql'

import { GetPlantDocument, GetPlantsDocument } from '@gardn/data'

// TypeDefs for this data feature
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
const typesArray = loadFilesSync('libs/data/src/lib/**/*schema.graphql');
const typeDefs = mergeTypeDefs(typesArray);

// resolvers for this data feature
import { plantResolversFactory } from './resolvers';

// mocked data used in the development in-memory db
import { mockPlant1, mockPlant2 } from './mocks';

// a nice structure for test cases
// found at https://hackernoon.com/extensive-graphql-testing-57e8760f1c25
const allPlantsTestCase = {
    id: 'Generated getPlants -> plants',
    query: print(GetPlantsDocument),
    variables: { },

    context: { },

    expected: { data: { 
      plants: [
        mockPlant1,
        mockPlant2 
      ] 
    } }
}

const plantId2TestCase = {
  id: 'Generated getPlant -> plant',
  query: print(GetPlantDocument),
  variables: { 
    id: 2
  },

  context: { },

  expected: { data: { 
    plant: {
      name: mockPlant2.name
    }
  } }
}

describe('Plant Types & Resolvers', () => {
    // array of all test cases, just 1 for now
    const cases = [allPlantsTestCase, plantId2TestCase]

    // reading the actual schema
    // make the actual schema and resolvers executable
    const schema = makeExecutableSchema({ typeDefs, resolvers: plantResolversFactory() as any })
    
    // running the test for each case in the cases array
    cases.forEach(obj => {
        const { id, query, variables, context, expected } = obj

        test(`query: ${id}`, async () => {
            const result = await graphql(schema, query, null, context, variables)
            return expect(result).toEqual(expected)
        })
    })
})