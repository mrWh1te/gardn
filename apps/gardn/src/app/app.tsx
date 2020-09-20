

import React from 'react';
import { Route } from 'react-router-dom';

import { PlantPage } from '@gardn/plant/view';
import { PlantsList } from '@gardn/plants/smart';

import { ContainerCard } from '@gardn/container/ui';
import { ContainersList } from '@gardn/containers/ui';

import { Header } from '@gardn/layout';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

let open = false;

export const App = () => (
  <>
    <Header />

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

    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      direction={'up'}
      open={open}
      style={{position: 'fixed', right: '1rem', bottom: '1rem'}}
    >
      {/* {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))} */}
    </SpeedDial>
  </>
);

export default App;
