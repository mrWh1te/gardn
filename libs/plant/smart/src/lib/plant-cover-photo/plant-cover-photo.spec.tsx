import React from 'react';
import { render } from '@testing-library/react';

import PlantCoverPhoto from './';

describe('Plant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlantCoverPhoto />);
    expect(baseElement).toBeTruthy();
  });
});
