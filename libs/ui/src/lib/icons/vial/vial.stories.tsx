import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import VialIcon from './vial';
import { black } from '../../colors';

export default { title: 'Icons/VialIcon' };

export const noParams = () => (
  <VialIcon />
);

export const widthParam = () => (
  <VialIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <VialIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} primaryColor={color('Primary Color', black)} secondaryColor={color('Secondary Color', black)} />
);
