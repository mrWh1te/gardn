import React from 'react';
import { render } from '@testing-library/react';

import MilestoneIcon from './';
import { exampleNoParams, widthParam, widthAndRotateParams, allParams } from './milestone-icon.stories';

describe('MilestoneIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MilestoneIcon />);
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
