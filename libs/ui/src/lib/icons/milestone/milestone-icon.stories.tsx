import React from 'react';

import { text, color } from '@storybook/addon-knobs';

import MilestoneIcon from './';

export default { title: 'Icons/MilestoneIcon' };

export const exampleNoParams = () => (
  <MilestoneIcon />
);

export const widthParam = () => (
  <MilestoneIcon width={text('Width', '5rem')} />
);

export const widthAndRotateParams = () => (
  <MilestoneIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} />
);

export const allParams = () => (
  <MilestoneIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} color={color('Color', 'green')} />
);
