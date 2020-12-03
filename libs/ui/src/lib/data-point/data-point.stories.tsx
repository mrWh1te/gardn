import React from 'react';

import { text, boolean } from '@storybook/addon-knobs';

import DataPoint from './';

export default { title: 'DataPoint' };

export const minimumParams = () => (
  <DataPoint label={text('Label', 'Low')} value={text('Value', '42.1%')} />
);

export const allParams = () => (
  <DataPoint label={text('Label', 'Low')} value={text('Value', '42.1%')} large={boolean('Large', true)} />
);
