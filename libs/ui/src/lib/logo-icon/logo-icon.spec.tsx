import React from 'react';
import { render } from '@testing-library/react';

import LogoIcon from './logo-icon';
import { defaultNoParams, width5Rem, width5RemRotate20deg } from './logo-icon.stories';

describe('LogoIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without params', () => {
    const { baseElement } = render( defaultNoParams() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with `width` set', () => {
    const { baseElement } = render( width5Rem() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with `width` and `rotate` set', () => {
    const { baseElement } = render( width5RemRotate20deg() );
    expect(baseElement).toBeTruthy();
  })
});
