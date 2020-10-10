import { render } from '@testing-library/react';

import { noChild, withChild } from './header.stories'

describe('Header', () => {
  it('should render successfully without child element', () => {
    const { baseElement } = render(noChild());
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with child element in navigation area (right side)', () => {
    const { baseElement } = render(withChild());
    expect(baseElement).toBeTruthy();
  });
});
