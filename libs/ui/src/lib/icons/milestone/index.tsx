

/**
 * MilestoneIcon from SVG
 */
import React from 'react';

import { black } from './../../colors';

/* eslint-disable-next-line */
export interface MilestoneIconProps {
  width?: string,
  rotate?: string,
  color?: string
}

/**
 * @param props 
 */
export const MilestoneIcon = (props: MilestoneIconProps) => {
  const defaultWidth = '1rem';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
      width: props.width || defaultWidth,
      transform: props.rotate ? `rotate(${props.rotate})` : undefined
    }}>
      <path fillRule="evenodd" d="M11.75 1a.75.75 0 01.75.75V4h6.532c.42 0 .826.15 1.143.425l3.187 2.75a1.75 1.75 0 010 2.65l-3.187 2.75a1.75 1.75 0 01-1.143.425H12.5v9.25a.75.75 0 01-1.5 0V13H3.75A1.75 1.75 0 012 11.25v-5.5C2 4.783 2.784 4 3.75 4H11V1.75a.75.75 0 01.75-.75zm0 4.5h7.282a.25.25 0 01.163.06l3.188 2.75a.25.25 0 010 .38l-3.188 2.75a.25.25 0 01-.163.06H3.75a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25h8z" style={{
        fill: props.color || black
      }}/>
    </svg>
  )
}

export default MilestoneIcon;