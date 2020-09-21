import React from 'react';
import { render } from '@testing-library/react';

import SeedlingIcon from './seedling-icon';
import { exampleNoParams, widthParam, widthAndRotateParams, allParams } from './seedling-icon.stories';

describe('SeedlingIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeedlingIcon />);
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
