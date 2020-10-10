import React from 'react';
import { render } from '@testing-library/react';

import PhotosGrid from './photos-grid';

describe('Photos Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotosGrid />);
    expect(baseElement).toBeTruthy();
  });
});
