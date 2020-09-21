import React from 'react';
import { render } from '@testing-library/react';

import PhotoHelpers from './photo-helpers';

describe('PhotoHelpers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoHelpers />);
    expect(baseElement).toBeTruthy();
  });
});
