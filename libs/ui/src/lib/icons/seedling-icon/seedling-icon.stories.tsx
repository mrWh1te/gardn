import React from 'react';

import { text } from '@storybook/addon-knobs';

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
  <SeedlingIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} primaryColor={text('Primary Color', 'green')} secondaryColor={text('Secondary Color', 'green')} />
);
