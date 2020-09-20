import React from 'react';
import { render } from '@testing-library/react';

import LogoIcon from './logo-icon';
import { exampleNoParams, widthParam, widthAndRotateParams } from './logo-icon.stories';

describe('LogoIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without params', () => {
    const { baseElement } = render( exampleNoParams() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with `width` set', () => {
    const { baseElement } = render( widthParam() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with `width` and `rotate` set', () => {
    const { baseElement } = render( widthAndRotateParams() );
    expect(baseElement).toBeTruthy();
  })
});
