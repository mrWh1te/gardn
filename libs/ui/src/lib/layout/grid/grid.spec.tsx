import { render } from '@testing-library/react';

import { example1x6, exampleNoParams } from './grid.stories'

describe('Grid', () => {
  it('should render successfully with columns and rows params', () => {
    const { baseElement } = render(example1x6());
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully without params', () => {
    const { baseElement } = render(exampleNoParams());
    expect(baseElement).toBeTruthy();
  });
});
