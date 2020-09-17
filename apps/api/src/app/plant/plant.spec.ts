import { makeExecutableSchema } from 'graphql-tools'
import { graphql, print } from 'graphql'

import { GetPlantDocument, GetPlantsDocument } from '@gardn/data'

import { typeDefs } from '../schema'
import { resolvers, mockPlant1, mockPlant2 } from '../resolvers'

// a nice structure for test cases
// found at https://hackernoon.com/extensive-graphql-testing-57e8760f1c25
const allPlantsTestCase = {
    id: 'Generated getPlants',
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
  id: 'Generated getPlant',
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
    const schema = makeExecutableSchema({ typeDefs, resolvers: resolvers() as any })
    
    // running the test for each case in the cases array
    cases.forEach(obj => {
        const { id, query, variables, context, expected } = obj

        test(`query: ${id}`, async () => {
            const result = await graphql(schema, query, null, context, variables)
            return expect(result).toEqual(expected)
        })
    })
})