import React from 'react';
import { render } from '@testing-library/react';

import WaterEventData from './';

describe('WaterEventData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WaterEventData />);
    expect(baseElement).toBeTruthy();
  });
});
