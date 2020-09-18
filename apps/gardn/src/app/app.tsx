import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import React from 'react';
import { Route, Link } from 'react-router-dom';

import { PlantPage } from '@gardn/plant/view';
import { Plant } from '@gardn/data';

import { ContainerCard } from '@gardn/container/ui';
import { ContainersList } from '@gardn/containers/ui';

import { PlantsList } from '@gardn/plants/smart';

import styled from '@emotion/styled';

const StyledNavigation = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    margin-left: .5rem;
    &:first-child {
      margin-left: 0;
    }
    a {
      text-decoration: none;
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <section style={{ textAlign: 'center' }}>
      <h1>
        gardn
        <img src="/assets/leaf.svg" width="32" />
      </h1>
    </section>

    <div role="navigation">
      <StyledNavigation>
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
          <Link to="/container">Container</Link>
        </li>
      </StyledNavigation>
    </div>

    <hr />
    
    <Route
      path="/"
      exact
      render={() => <div>This app is under development. </div>}
    />
    <Route path="/plants" component={PlantsList} />
    <Route path="/plant/:id" component={PlantPage} />

    <Route path="/containers" component={ContainersList} />
    <Route path="/container" component={ContainerCard} />
  </ApolloProvider>
);

export default App;
