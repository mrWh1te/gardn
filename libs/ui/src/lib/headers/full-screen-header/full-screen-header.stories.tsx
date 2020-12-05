import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { color } from '@storybook/addon-knobs';

import { logoLightGreen } from './../../colors'

import FullScreenHeader from './';

export default {
  component: FullScreenHeader,
  decorators: [
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ],
  title: 'Headers/FullScreenHeader'
}

export const noChild = () => (
  <FullScreenHeader goBackColor={color('GoBack Color', logoLightGreen)} />
);

export const leftChild = () => (
  <FullScreenHeader left={<div>hello</div>} />
);

export const rightChild = () => (
  <FullScreenHeader goBackColor={color('GoBack Color', logoLightGreen)} right={<div>hello</div>} />
);

export const bothChildren = () => (
  <FullScreenHeader left={<div>hello</div>} right={<div>world</div>} />
);
