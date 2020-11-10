import React from 'react';

import { text, color, number } from '@storybook/addon-knobs';

import AttentionIcon from './';
import { black } from './../../colors';

export default { title: 'Icons/AttentionIcon' };

export const noParams = () => (
  <AttentionIcon />
);

export const widthParam = () => (
  <AttentionIcon width={text('Width', '5rem')} />
);

export const allParams = () => (
  <AttentionIcon 
    width={text('Width', '5rem')}
    rotate={text('Rotate', '20deg')}
    primaryColor={color('Primary Color', black)}
    secondaryColor={color('Secondary Color', black)}
    secondaryColorOpacity={number('Secondary Color Opacity', 0.4)} />
);
