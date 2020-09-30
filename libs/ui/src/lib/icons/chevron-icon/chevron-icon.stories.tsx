import React from 'react';

import { text, boolean } from '@storybook/addon-knobs';

import ChevronIcon from './chevron-icon';

export default { title: 'Icons/ChevronIcon' };

export const exampleNoParams = () => (
  <ChevronIcon />
);

export const widthParam = () => (
  <ChevronIcon width={text('Width', '5rem')} />
);

export const widthAndRotateParams = () => (
  <ChevronIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} />
);

export const allParams = () => (
  <ChevronIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={text('Color', 'green')} solid={boolean('Solid', true)} />
);
