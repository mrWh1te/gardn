import React from 'react';
import { render } from '@testing-library/react';

import VialIcon from './vial';
import { noParams, widthParam, allParams } from './vial.stories';

describe('VialIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VialIcon />);
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
