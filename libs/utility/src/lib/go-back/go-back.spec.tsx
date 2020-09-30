import React from 'react';
import { render } from '@testing-library/react';

import GoBack from './go-back';

describe('GoBack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoBack />);
    expect(baseElement).toBeTruthy();
  });
});
