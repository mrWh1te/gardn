import React from 'react';
import { render } from '@testing-library/react';

import PlantPhotos from './plant-photos';

describe('Plant Photos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlantPhotos />);
    expect(baseElement).toBeTruthy();
  });
});
