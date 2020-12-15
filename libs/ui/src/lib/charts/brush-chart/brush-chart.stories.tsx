import React from 'react';

import { number, color, boolean } from '@storybook/addon-knobs';

import BrushChart from './';

export default { title: 'Charts/BrushChart' };

export const exampleMinimumParams = () => (
  <BrushChart width={number('Width', 400)} height={number('Height', 300)} />
);

export const exampleAllParams = () => (
  <BrushChart 
    width={number('Width', 400, {}, 'Size')} 
    height={number('Height', 300, {}, 'Size')} 
    compact={boolean('Compact', undefined, 'Size')}
    margin={{
      top: number('Margin-top', 20, {}, 'Margin'),
      left: number('Margin-left', 50, {}, 'Margin'),
      bottom: number('Margin-bottom', 20, {}, 'Margin'),
      right: number('Margin-right', 20, {}, 'Margin')
    }}
    backgroundColor={color('Background color', '#584153', 'Colors')}
    backgroundColor2={color('Background color 2', '#af8baf', 'Colors')}
    accentColor={color('Accent color', '#f6acc8', 'Colors')}
  />
);
