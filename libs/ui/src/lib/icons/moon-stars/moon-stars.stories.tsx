import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import MoonStarsIcon from './';
import { black } from '../../colors';

export default { title: 'Icons/MoonStarsIcon' };

export const noParams = () => (
  <MoonStarsIcon />
);

export const widthParam = () => (
  <MoonStarsIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <MoonStarsIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} primaryColor={color('Primary Color', black)} secondaryColor={color('Secondary Color', black)} />
);
