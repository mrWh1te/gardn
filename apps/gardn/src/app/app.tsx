import React from 'react';
import { Route } from 'react-router-dom';

import { PlantView } from '@gardn/plant/view';
import { PlantsList } from '@gardn/plants/smart';

import { ContainerCard } from '@gardn/container/ui';
import { ContainersList } from '@gardn/containers/ui';

import { ActionMenu } from '@gardn/layout'; // todo move * into new librar(y|ies) & delete layout library
import { Header } from '@gardn/ui';

import { Navigation } from './navigation/navigation';

export const App = () => (
  <>
    <Header>
      <Navigation />
    </Header>

    <ActionMenu /> { /* todo move ActionMenu into another library, maybe Event:Smart ? Utility? */ }

    <Route
      path="/"
      exact
      render={() => <div>This app is under development. </div>}
    />
    <Route path="/plants" component={PlantsList} />
    <Route path="/plant/:id" component={PlantView} />
    <Route path="/containers" component={ContainersList} />
    <Route path="/container" component={ContainerCard} />
  </>
);

export default App;
