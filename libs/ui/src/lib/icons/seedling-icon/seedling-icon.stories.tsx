import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import SeedlingIcon from './seedling-icon';

export default { title: 'Icons/SeedlingIcon' };

export const exampleNoParams = () => (
  <SeedlingIcon />
);

export const widthParam = () => (
  <SeedlingIcon width={text('Width', '5rem')} />
);

export const widthAndRotateParams = () => (
  <SeedlingIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} />
);

export const allParams = () => (
  <SeedlingIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} primaryColor={color('Primary Color', 'green')} secondaryColor={color('Secondary Color', 'green')} />
);
