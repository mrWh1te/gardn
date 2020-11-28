import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PlantEventTypeView, PlantView } from '@gardn/plant/view';
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

    <Switch>  
      <Route
        path="/"
        exact
        render={() => <div>This app is under development. </div>}
      />
      <Route path="/plants" component={PlantsView} />
      <Route path="/plant/:id/event-type/:eventType" component={PlantEventTypeView} />
      <Route path="/plant/:id" component={PlantView} />
      <Route component={() => <p>404</p>} />
    </Switch>
  </>
);

export default App;
