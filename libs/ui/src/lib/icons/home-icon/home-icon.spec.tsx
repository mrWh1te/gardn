import React from 'react';
import { render } from '@testing-library/react';

import HomeIcon from './home-icon';
import { exampleNoParams, widthParam, widthAndRotateParams, allParams } from './home-icon.stories';

describe('HomeIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeIcon />);
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

  it('should render with `width`, `rotate`, `primaryColor`, `secondaryColor` set', () => {
    const { baseElement } = render( allParams() );
    expect(baseElement).toBeTruthy();
  })
});
