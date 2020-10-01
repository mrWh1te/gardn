import React from 'react';
import { render } from '@testing-library/react';

import CloseIcon from './close-icon';
import { exampleNoParams, widthParam, widthAndRotateParams, allParams } from './close-icon.stories';

describe('CloseIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloseIcon />);
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

  it('should render with `width`, `rotate`, `color` set', () => {
    const { baseElement } = render( allParams() );
    expect(baseElement).toBeTruthy();
  })
});
