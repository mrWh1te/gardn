import { render } from '@testing-library/react';

import { example } from './logo.stories'

describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(example());
    expect(baseElement).toBeTruthy();
  });
});
