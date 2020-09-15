import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import React from 'react';
// import { Message } from '@gardn/api-interfaces';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query getPlants {
        plants {
          name
        }
      }
    `
  })
  .then(result => console.log(result));

export const App = () => (
  <ApolloProvider client={client}>
    <section style={{ textAlign: 'center' }}>
      <h1>gardn</h1>
      <ul></ul>
    </section>
  </ApolloProvider>
);

export default App;
