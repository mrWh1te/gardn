import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import SunIcon from './sun';
import { black } from '../../colors';

export default { title: 'Icons/SunIcon' };

export const noParams = () => (
  <SunIcon />
);

export const widthParam = () => (
  <SunIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <SunIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} primaryColor={color('Primary Color', black)} secondaryColor={color('Secondary Color', black)} />
);
