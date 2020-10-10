import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import HumidityIcon from './humidity';
import { black } from '../../colors';

export default { title: 'Icons/HumidityIcon' };

export const noParams = () => (
  <HumidityIcon />
);

export const widthParam = () => (
  <HumidityIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <HumidityIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={color('Color', black)} />
);
