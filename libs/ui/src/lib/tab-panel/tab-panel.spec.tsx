import React from 'react';
import { render } from '@testing-library/react';

import TabPanel from './tab-panel';
import { exampleWithChildElement, exampleWithAllProps, exampleWithPropsAndChildNode } from './tab-panel.stories';

describe('TabPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabPanel />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without params', () => {
    const { baseElement } = render( exampleWithChildElement() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with all props set, including a children prop for child node', () => {
    const { baseElement } = render( exampleWithAllProps() );
    expect(baseElement).toBeTruthy();
  })

  it('should render with props set and having a child node', () => {
    const { baseElement } = render( exampleWithPropsAndChildNode() );
    expect(baseElement).toBeTruthy();
  })

});
