import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';

jest.mock('../navigation/navigation', () => {
  return {
    __esModule: true,
    Navigation: () => <div></div>
  }
})

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  afterAll(() => {
    jest.unmock('../navigation/navigation');
  })
});
