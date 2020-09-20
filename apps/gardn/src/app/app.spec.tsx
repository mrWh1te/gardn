import { render } from '@testing-library/react';
import React from 'react';
import App from './app';

// todo common library for jest mocks
// jest.mock('@apollo/client', () => {
//   const originalModule = jest.requireActual('@apollo/client')

//   return {
//     __esModule: true,
//     ...originalModule,
//     ApolloClient: class mockClient {
//       constructor() {}
//       then() {}
//       query() {
//         return this
//       }
//     } 
//   }
// })

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('@apollo/client')

  return {
    __esModule: true,
    ...originalModule,
    Route: () => <div></div>,
    Link: () => <div></div>
  }
})

describe('App', () => {

  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy()
  });

  // Clean up
  afterAll(async() => {
    // jest.unmock('@apollo/client')
    jest.unmock('react-router-dom');
  })

});
