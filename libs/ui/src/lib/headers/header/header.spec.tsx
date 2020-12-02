import { render } from '@testing-library/react';
import React from 'react';

import { noChild, withChild } from './header.stories'

jest.mock('react-router-dom', () => {
  const originalReactRouterDOMModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalReactRouterDOMModule,
    Link: (props) => <div>{props.children}</div>
  }
})

describe('Header', () => {
  it('should render successfully without child element', () => {
    const { baseElement } = render(noChild());
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with child element in navigation area (right side)', () => {
    const { baseElement } = render(withChild());
    expect(baseElement).toBeTruthy();
  });

  afterAll(() => {
    jest.unmock('react-router-dom');
  })
});
