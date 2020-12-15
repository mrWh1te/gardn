import React from 'react';

import { number, color, boolean } from '@storybook/addon-knobs';

import BrushChart from './';

export default { title: 'Charts/BrushChart' };

export const exampleMinimumParams = () => (
  <BrushChart width={number('Width', 400)} height={number('Height', 300)} />
);

export const exampleAllParams = () => (
  <BrushChart 
    width={number('Width', 400)} 
    height={number('Height', 300)} 
    compact={boolean('Compact', undefined)}
    margin={{
      top: number('Margin-top', 20),
      left: number('Margin-left', 50),
      bottom: number('Margin-bottom', 20),
      right: number('Margin-right', 20)
    }}
    backgroundColor={color('Background color', '#584153')}
    backgroundColor2={color('Background color 2', '#af8baf')}
    accentColor={color('Accent color', '#f6acc8')}
  />
);
