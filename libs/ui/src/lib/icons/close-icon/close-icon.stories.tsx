import React from 'react';

import { text } from '@storybook/addon-knobs';

import CloseIcon from './close-icon';

export default { title: 'Icons/CloseIcon' };

export const exampleNoParams = () => (
  <CloseIcon />
);

export const widthParam = () => (
  <CloseIcon width={text('Width', '5rem')} />
);

export const widthAndRotateParams = () => (
  <CloseIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} />
);

export const allParams = () => (
  <CloseIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={text('Color', 'green')} />
);
