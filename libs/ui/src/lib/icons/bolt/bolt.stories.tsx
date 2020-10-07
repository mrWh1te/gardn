import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import BoltIcon from './bolt';
import { black } from '../../colors';

export default { title: 'Icons/BoltIcon' };

export const noParams = () => (
  <BoltIcon />
);

export const widthParam = () => (
  <BoltIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <BoltIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={color('Color', black)} />
);
