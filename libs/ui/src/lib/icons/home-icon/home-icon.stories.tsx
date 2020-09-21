import React from 'react';

import { text } from '@storybook/addon-knobs';

import HomeIcon from './home-icon';

export default { title: 'Icons/HomeIcon' };

export const exampleNoParams = () => (
  <HomeIcon />
);

export const widthParam = () => (
  <HomeIcon width={text('Width', '5rem')} />
);

export const widthAndRotateParams = () => (
  <HomeIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} />
);

export const allParams = () => (
  <HomeIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} primaryColor={text('Primary Color', 'green')} secondaryColor={text('Secondary Color', 'green')} />
);
