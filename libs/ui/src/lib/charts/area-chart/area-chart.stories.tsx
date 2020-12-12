import React, { useMemo } from 'react';

import { number, boolean, color } from '@storybook/addon-knobs';

import appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';
import { scaleTime, scaleLinear } from '@visx/scale';
import { max, extent } from 'd3-array';

import AreaChart from './';

export default { title: 'Charts/AreaChart' };

const getDate = (d: AppleStock) => new Date(d.date);
const getStockValue = (d: AppleStock) => d.close;

export const example = () => {
  const yMax = number('yMax', 100)
  const xMax = number('xMax', 400)

  const width = number('Width', 400)

  const dateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xMax],
        domain: extent(appleStock, getDate) as [Date, Date],
      }),
    [xMax, appleStock],
  );
  const stockScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        domain: [0, max(appleStock, getStockValue) || 0],
        nice: true,
      }),
    [yMax, appleStock],
  );
  
  return (
    <svg width={width}>
      <AreaChart
        hideBottomAxis={boolean('Hide Bottom Axis', false)}
        data={appleStock}
        width={width}
        margin={{ top: number('Margin-top', 1), right: number('Margin-right', 1), bottom: number('Margin-bottom', 1), left: number('Margin-left', 1) }}
        yMax={yMax}
        xScale={dateScale}
        yScale={stockScale}
        gradientColor={color('Gradient', '#af8baf')}
      />
    </svg>
  );
}
