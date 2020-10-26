import { makeExecutableSchema } from 'graphql-tools'
import { graphql, print } from 'graphql'

import { GetPlantDocument, GetPlantsDocument } from './../generated'
import { plantDataSourceFactory } from './../plant/data-source';
import { store } from './../store';


// TypeDefs for this data feature
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
const typesArray = loadFilesSync('libs/data/src/lib/**/*schema.graphql');
const typeDefs = mergeTypeDefs(typesArray);

// resolvers for this data feature
import { plantResolvers as resolvers } from './resolvers';

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

    // TODO find new testing strategy that checks the resolvers, data-sources, queries, and mutations
      //    preferably with graphql (in/out) for a more e2e coverage

    // const dataSources = (): any => ({
    //   plant: plantDataSourceFactory(store),
    // });

    // reading the actual schema
    // make the actual schema and resolvers executable
    const schema = makeExecutableSchema({ typeDefs, resolvers }) // does not sup dataSources
    
    // running the test for each case in the cases array
    cases.forEach(obj => {
        const { id, query, variables, context, expected } = obj

        test(`query: ${id}`, async () => {
            const result = await graphql(schema, query, null, context, variables)
            return expect(result).toEqual(expected)
        })
    })
})