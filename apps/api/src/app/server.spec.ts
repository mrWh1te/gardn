import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

import App from './server';
import { mockPlant1, mockPlant2 } from '@gardn/data';

describe('Server', () => {
  const port = 1337;

  let api:any; 

  /**
   * Plant.name in GQL obj type schema is nullable, therefore if undefined, it's returned as null
   * @param name 
   */
  const getObjectTypeFieldNameValue = (name?: string): string | null => {
    if (name) {
      return name
    }

    return null
  }

  beforeAll(() => {
    api = App.server.listen({ port });
  })

  it('should initiate a GraphQL server with our schema, queries and mutations', async() => {
    const client = new ApolloClient({
      link: new HttpLink({ uri: `http://localhost:${port}/graphql`, fetch }),
      cache: new InMemoryCache()
    });

    const result = await client.query({
      query: gql`
        query getPlants {
          plants {
            name
          }
        }
      `,
    })

    expect(result).toEqual({ 
      data: { 
        plants: [
          {"__typename": "Plant", name: getObjectTypeFieldNameValue(mockPlant1.name)},
          {"__typename": "Plant", name: getObjectTypeFieldNameValue(mockPlant2.name)}
        ]
      },
      loading: false,
      networkStatus: 7
    });
      
  })

  afterAll(() => {
    api.close();
  })
})