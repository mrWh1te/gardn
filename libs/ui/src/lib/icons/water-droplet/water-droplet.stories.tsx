import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import WaterDropletIcon from './water-droplet';
import { black } from '../../colors';

export default { title: 'Icons/WaterDropletIcon' };

export const noParams = () => (
  <WaterDropletIcon />
);

export const widthParam = () => (
  <WaterDropletIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <WaterDropletIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={color('Color', black)} />
);
