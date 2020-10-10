import React from 'react';
import { render } from '@testing-library/react';

import ThermometerIcon from './thermometer';
import { noParams, widthParam, allParams } from './thermometer.stories';

describe('ThermometerIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThermometerIcon />);
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
