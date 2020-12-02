import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './header';

export default {
  component: Header,
  decorators: [
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ],
  title: 'Headers/Header'
}

export const noChild = () => (
  <Header />
);

export const withChild = () => (
  <Header>
    <ul style={{listStyle: 'none'}}>
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
    </ul>
  </Header>
);
