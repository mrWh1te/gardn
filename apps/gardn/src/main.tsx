import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import { eventTypePolicies } from '@gardn/data';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[700], // speeddial bg color
      dark: green[600], // speeddial bg color hover
    },
    secondary: {
      light: green[700],
      main: green[700],
      dark: green[700],
    },
  },
  // zIndex: {
  //   drawer: 1000
  // } // did not work, value stayed at 1300 (docs https://material-ui.com/customization/z-index/ say should be 1200).. maybe bug? try again in future
});

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      ...eventTypePolicies
    },
  })
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
