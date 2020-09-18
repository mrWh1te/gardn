import React from 'react';
import { render } from '@testing-library/react';

import ContainersList from './containers-list';

describe('ContainersList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainersList />);
    expect(baseElement).toBeTruthy();
  });
});
