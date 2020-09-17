import React from 'react';
import { render } from '@testing-library/react';

import PlantUi from './plant-ui';

describe('PlantUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlantUi />);
    expect(baseElement).toBeTruthy();
  });
});
