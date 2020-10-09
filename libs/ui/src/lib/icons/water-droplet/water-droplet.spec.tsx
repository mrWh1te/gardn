import React from 'react';
import { render } from '@testing-library/react';

import WaterDropletIcon from './water-droplet';
import { noParams, widthParam, allParams } from './water-droplet.stories';

describe('WaterDropletIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WaterDropletIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without params', () => {
    const { baseElement } = render( noParams() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with `width` set', () => {
    const { baseElement } = render( widthParam() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with all params set', () => {
    const { baseElement } = render( allParams() );
    expect(baseElement).toBeTruthy();
  })
});
