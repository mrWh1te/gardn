import React from 'react';
import { render } from '@testing-library/react';

import ActionButton from './';

describe('ActionButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionButton toggleMenu={() => () => {}} open={true} />);
    expect(baseElement).toBeTruthy();
  });
});
