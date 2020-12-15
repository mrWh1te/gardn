import React from 'react';
import { Group } from '@visx/group';
import { AreaClosed } from '@visx/shape';
import { AxisLeft, AxisBottom, AxisScale } from '@visx/axis';
import { LinearGradient } from '@visx/gradient';
import { curveMonotoneX } from '@visx/curve';

import { white } from '../../colors';

// Initialize some variables
// const axisColor = white;

interface AreaChartProps<M extends object> {
  data: M[];
  gradientColor: string;

  xScale: AxisScale<number>;
  yScale: AxisScale<number>;
  xValueAccessor: (m: M) => number;
  yValueAccessor: (m: M) => number;

  width: number;
  yMax: number;
  hideBottomAxis?: boolean;
  hideLeftAxis?: boolean;
  topMargin?: number;
  leftMargin?: number;
  children?: React.ReactNode;

  axisColor?: string;
}

/**
 * M is the Model for which has data to graph through instances of it
 * M will have at least two properties (unknown to this component)
 *    that represent the x-axis and y-axis values (x, y) to graph
 * @param param0 
 *    xValueAccessor = accessor method to get the x-axis value from an instance of M
 *    yValueAccessor = accessor method to get the y-axis value from an instance of M
 */
export default function AreaChart<M extends object>({
  data,
  gradientColor,
  width,
  yMax,
  xScale,
  yScale,
  xValueAccessor,
  yValueAccessor,
  hideBottomAxis = false,
  hideLeftAxis = false,
  topMargin,
  leftMargin,
  children,
  axisColor
}: AreaChartProps<M>) {
  // colors
  axisColor = axisColor ?? white

  // label styling
  const axisBottomTickLabelProps = {
    textAnchor: 'middle' as const,
    fontFamily: 'Arial',
    fontSize: 10,
    fill: axisColor
  };
  const axisLeftTickLabelProps = {
    dx: '-0.25em',
    dy: '0.25em',
    fontFamily: 'Arial',
    fontSize: 10,
    textAnchor: 'end' as const,
    fill: axisColor
  };

  if (width < 10) return null;
  return (
    <Group left={leftMargin} top={topMargin}>
      <LinearGradient
        id="gradient"
        from={gradientColor}
        fromOpacity={1}
        to={gradientColor}
        toOpacity={0.2}
      />
      <AreaClosed<M>
        data={data}
        x={d => xScale(xValueAccessor(d)) || 0}
        y={d => yScale(yValueAccessor(d)) || 0}
        yScale={yScale}
        strokeWidth={1}
        stroke="url(#gradient)"
        fill="url(#gradient)"
        curve={curveMonotoneX}
      />
      {!hideBottomAxis && (
        <AxisBottom
          top={yMax}
          scale={xScale}
          numTicks={width > 520 ? 10 : 5}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={() => axisBottomTickLabelProps}
        />
      )}
      {!hideLeftAxis && (
        <AxisLeft
          scale={yScale}
          numTicks={5}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={() => axisLeftTickLabelProps}
        />
      )}
      {children}
    </Group>
  );
}
