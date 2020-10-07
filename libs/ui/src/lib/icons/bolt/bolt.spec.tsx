import React from 'react';
import { render } from '@testing-library/react';

import BoltIcon from './bolt';
import { noParams, widthParam, allParams } from './bolt.stories';

describe('BoltIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoltIcon />);
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
