/**
 * LogoIcon from SVG
 */
import React from 'react';

import { black } from '../../colors';

/* eslint-disable-next-line */
export interface VialIconProps {
  width?: string,
  rotate?: string,
  primaryColor?: string,
  secondaryColor?: string
}

/**
 * @param props 
 */
export const VialIcon = ({width, rotate, primaryColor, secondaryColor}: VialIconProps) => {
  const defaultWidth = '1rem';

  return (
    <svg style={{
      transform: rotate ? `rotate(${rotate})` : undefined, 
      width: width || defaultWidth
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
      <path style={{
        fill: secondaryColor || primaryColor || black,
        opacity: .4
      }} d="M318 256L138.61 435.44a55.46 55.46 0 0 1-78.39.06 55.46 55.46 0 0 1-.09-78.44L161 256z" />
      <path style={{
        fill: primaryColor || black
      }} d="M477.65 186.12L309.45 18.33a8 8 0 0 0-11.3 0l-34 33.9a8 8 0 0 0 0 11.29l11.2 11.1L33 316.53c-38.8 38.69-45.1 102-9.4 143.5a102.44 102.44 0 0 0 78 35.9h.4a102.75 102.75 0 0 0 72.9-30.09l246.3-245.71 11.2 11.1a8 8 0 0 0 11.3 0l34-33.89a7.92 7.92 0 0 0-.05-11.22zM141 431.84a54.65 54.65 0 0 1-38.95 16h-.36A54.09 54.09 0 0 1 60 428.76c-8.67-10.08-12.85-23.53-11.76-37.86a64.77 64.77 0 0 1 18.61-40.4l242.4-241.9 78 77.54z" />
    </svg>
  )
}

export default VialIcon;