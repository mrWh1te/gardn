import React from 'react';
import { render } from '@testing-library/react';

import PhotoTitle from './photo-title';

describe('Photo Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoTitle />);
    expect(baseElement).toBeTruthy();
  });
});
