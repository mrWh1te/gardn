import React, { useMemo, Fragment } from 'react';

import { number, boolean, color, object } from '@storybook/addon-knobs';

import appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';
import { scaleTime, scaleLinear } from '@visx/scale';
import { max, extent } from 'd3-array';

import AreaChart from './';

export default { title: 'Charts/AreaChart' };

const getDate = (d: AppleStock): number => new Date(d.date) as any as number;
const getStockValue = (d: AppleStock) => d.close;

export const example = () => {
  const yMax = number('yMax', 100, {}, 'Chart')
  const xMax = number('xMax', 373, {}, 'Chart')

  const width = number('Width', 400, {}, 'Chart')

  const getDateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xMax],
        domain: extent(appleStock, getDate) as [Date, Date],
      }),
    [xMax, appleStock],
  );
  const getStockScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        domain: [0, max(appleStock, getStockValue) || 0],
        nice: true,
      }),
    [yMax, appleStock],
  );
  
  return (
    <Fragment>
      <svg width={width}>
        <AreaChart
          hideBottomAxis={boolean('Hide Bottom Axis', false, 'Chart')}
          hideLeftAxis={boolean('Hide Left Axis', false, 'Chart')}
          data={object('Data', appleStock, 'Data') as any as AppleStock[]}
          xValueAccessor={getDate}
          yValueAccessor={getStockValue}
          xScale={getDateScale}
          yScale={getStockScale}
          width={width}
          topMargin={number('Margin-top', 1, {}, 'Chart')}
          leftMargin={number('Margin-left', 27, {}, 'Chart')}
          yMax={yMax}
          gradientColor={color('Gradient', '#af8baf', 'Chart')}
          axisColor={color('Axis Color', '#fff', 'Chart')}
        />
      </svg>
      <p>Change to "dark mode" to see the left & bottom axis</p>
    </Fragment>
  );
}
