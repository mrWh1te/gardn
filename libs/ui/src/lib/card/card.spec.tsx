import React from 'react';
import { render } from '@testing-library/react';

import Ui from './card';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
