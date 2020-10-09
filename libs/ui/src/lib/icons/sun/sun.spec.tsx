import React from 'react';
import { render } from '@testing-library/react';

import SunIcon from './sun';
import { noParams, widthParam, allParams } from './sun.stories';

describe('SunIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SunIcon />);
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
