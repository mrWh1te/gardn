import React from 'react';
import { Route } from 'react-router-dom';

import { PlantView } from '@gardn/plant/view';
import { PlantsView } from '@gardn/plants/view';
import { Header } from '@gardn/ui';

import { Navigation } from './navigation/navigation';
import { ActionMenu } from './action-menu';

export const App = () => (
  <>
    <Header>
      <Navigation />
    </Header>

    <ActionMenu />

    <Route
      path="/"
      exact
      render={() => <div>This app is under development. </div>}
    />
    <Route path="/plants" component={PlantsView} />
    <Route path="/plant/:id" component={PlantView} />
  </>
);

export default App;
