import React from 'react';
import { render } from '@testing-library/react';

import PlantsList from './plants-list';

describe('PlantsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlantsList />);
    expect(baseElement).toBeTruthy();
  });
});
