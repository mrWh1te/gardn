import { makeExecutableSchema } from 'graphql-tools'
import { graphql, print } from 'graphql'

import { GetPlantDocument, GetPlantsDocument } from '@gardn/data'

// todo reduce scope to plant
import { typeDefs } from 'apps/api/src/app/schema'
import { resolvers } from 'apps/api/src/app/resolvers'

import { mockPlant1, mockPlant2 } from '@gardn/plant/helpers'

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
    const schema = makeExecutableSchema({ typeDefs, resolvers })
    
    // running the test for each case in the cases array
    cases.forEach(obj => {
        const { id, query, variables, context, expected } = obj

        test(`query: ${id}`, async () => {
            const result = await graphql(schema, query, null, context, variables)
            return expect(result).toEqual(expected)
        })
    })
})