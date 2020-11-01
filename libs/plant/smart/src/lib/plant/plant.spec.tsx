import React from 'react';
import { render } from '@testing-library/react';

import Plant from './plant';

describe('Plant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Plant />);
    expect(baseElement).toBeTruthy();
  });
});
