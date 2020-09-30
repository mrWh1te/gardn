import React from 'react';
import { render } from '@testing-library/react';

import PhotosSlider from './photos-slider';

describe('Photos Slider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotosSlider />);
    expect(baseElement).toBeTruthy();
  });
});
