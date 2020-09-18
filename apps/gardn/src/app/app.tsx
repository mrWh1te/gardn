import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import React from 'react';
import { Route, Link } from 'react-router-dom';

import { PlantCard } from '@gardn/plant/ui';
import { Plant } from '@gardn/data';

import { ContainerCard } from '@gardn/container/ui';
import { ContainersList } from '@gardn/containers/ui';

import { PlantsList } from '@gardn/plants/ui';

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
  name: 'Parsley',
};

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
          <Link to="/plants">Plants</Link>
        </li>
        <li>
          <Link to="/containers">Containers</Link>
        </li>
        <li>
          <Link to="/plant">Plant</Link>
        </li>
        <li>
          <Link to="/container">Container</Link>
        </li>
      </ul>
    </div>
    <Route
      path="/"
      exact
      render={() => <div>This app is under development. </div>}
    />
    <Route path="/plants" component={PlantsList} />
    <Route path="/plant" component={() => <PlantCard plant={mockPlant} />} />
    <Route path="/containers" component={ContainersList} />
    <Route path="/container" component={ContainerCard} />
    {/* END: routes */}
  </ApolloProvider>
);

export default App;
