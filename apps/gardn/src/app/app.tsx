

import React from 'react';
import { Route } from 'react-router-dom';

import { PlantPage } from '@gardn/plant/view';
import { PlantsList } from '@gardn/plants/smart';

import { ContainerCard } from '@gardn/container/ui';
import { ContainersList } from '@gardn/containers/ui';

import { Header, ActionMenu } from '@gardn/layout';

export const App = () => (
  <>
    <Header />
    <ActionMenu />

    <Route
      path="/"
      exact
      render={() => <div>This app is under development. </div>}
    />
    <Route path="/plants" component={PlantsList} />
    <Route path="/plant/:id" component={PlantPage} />
    <Route path="/containers" component={ContainersList} />
    <Route path="/container" component={ContainerCard} />
  </>
);

export default App;
