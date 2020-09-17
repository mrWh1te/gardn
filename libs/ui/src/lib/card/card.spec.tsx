import React from 'react';
import { render } from '@testing-library/react';

import Card from './card';

import { empty, hasText } from './card.stories'

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });

  it('should be empty', () => {
    const { baseElement } = render( empty() );
    expect(baseElement.textContent).toEqual('')
  })

  it('should have text', () => {
    const { baseElement } = render( hasText() );
    expect(baseElement.textContent).toEqual('Text')
  })
});
