import React from 'react';
import { render } from '@testing-library/react';

import { Plant } from '@gardn/data';

import PlantCard from './plant-card';

describe('PlantCard', () => {
  it('should render successfully', () => {
    const mockPlant: Plant = {
      id: 5,
      name: 'Parsley'
    }

    const { baseElement } = render(<PlantCard plant={mockPlant} />);
    expect(baseElement).toBeTruthy();
  });
});
