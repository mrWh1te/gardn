import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import React from 'react';
import { Route, Link } from 'react-router-dom';

import { PlantUi } from '@gardn/plant/ui';
import { Plant } from '@gardn/data';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query getPlants {
        plants {
          name
        }
      }
    `,
  })
  .then((result) => console.log(result));

const mockPlant: Plant = {
  id: -1,
  name: 'Parsley'
}

export const App = () => (
  <ApolloProvider client={client}>
    <section style={{ textAlign: 'center' }}>
      <h1>
        gardn
        <img src="/assets/leaf.svg" width="32" />
      </h1>
    </section>

    {/* START: routes */}
    {/* These routes and navigation have been generated for you */}
    {/* Feel free to move and update them to fit your needs */}
    <br />
    <hr />
    <br />
    <div role="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plant">Plant</Link>
        </li>
      </ul>
    </div>
    <Route
      path="/"
      exact
      render={() => (
        <div>
          This is the generated root route.{' '}
        </div>
      )}
    />
    <Route path="/plant" component={() => <PlantUi plant={mockPlant} />} />
    {/* END: routes */}
  </ApolloProvider>
);

export default App;
