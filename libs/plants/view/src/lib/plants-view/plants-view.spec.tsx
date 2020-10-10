import React from 'react';
import { render } from '@testing-library/react';

import PlantsView from './plants-view';

describe('PlantsView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlantsView />);
    expect(baseElement).toBeTruthy();
  });
});
