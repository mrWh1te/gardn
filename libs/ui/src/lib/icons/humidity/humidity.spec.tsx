import React from 'react';
import { render } from '@testing-library/react';

import HumidityIcon from './humidity';
import { noParams, widthParam, allParams } from './humidity.stories';

describe('HumidityIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HumidityIcon />);
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
