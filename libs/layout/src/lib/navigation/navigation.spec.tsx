import React from 'react';
import { render } from '@testing-library/react';

import Navigation from './navigation';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('@apollo/client')

  return {
    __esModule: true,
    ...originalModule,
    // Route: () => <div></div>,
    Link: () => <div></div>
  }
})

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeTruthy();
  });

  afterAll(() => {
    jest.unmock('react-router-dom');
  })
});
