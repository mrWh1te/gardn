import React from 'react';

import { text, color, number } from '@storybook/addon-knobs';

import ThermometerIcon from './thermometer';
import { black } from '../../colors';

export default { title: 'Icons/ThermometerIcon' };

export const noParams = () => (
  <ThermometerIcon />
);

export const widthParam = () => (
  <ThermometerIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <ThermometerIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={color('Color', black)} temperature={number('Temperature', 74)} />
);
