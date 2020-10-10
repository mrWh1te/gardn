/**
 * LogoIcon from SVG
 */
import React from 'react';

import { black } from '../../colors';

/* eslint-disable-next-line */
export interface ThermometerIconProps {
  width?: string,
  rotate?: string,
  color?: string
}

/**
 * @param props 
 */
export const ThermometerIcon = ({width, rotate, color}: ThermometerIconProps) => {
  const defaultWidth = '1rem';

  return (
    <svg style={{
      transform: rotate ? `rotate(${rotate})` : undefined, 
      width: width || defaultWidth
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
      <path style={{fill: color ? color : black}} d="M176 384c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-20.898 13.359-38.667 32-45.258V272c0-8.837 7.163-16 16-16s16 7.163 16 16v66.742c18.641 6.591 32 24.36 32 45.258zm48-84.653c19.912 22.564 32 52.195 32 84.653 0 70.696-57.302 128-128 128-.299 0-.61-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.756 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM224 384c0-39.894-22.814-62.144-32-72.553V96c0-35.29-28.71-64-64-64S64 60.71 64 96v215.447c-9.467 10.728-31.797 32.582-31.999 72.049-.269 52.706 42.619 96.135 95.312 96.501L128 480c52.935 0 96-43.065 96-96z"/>
    </svg>
  )
}

export default ThermometerIcon;