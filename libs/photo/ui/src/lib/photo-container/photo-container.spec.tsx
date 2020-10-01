import React from 'react';
import { render } from '@testing-library/react';

import PhotoContainer from './photo-container';

describe('Photo Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoContainer />);
    expect(baseElement).toBeTruthy();
  });
});
