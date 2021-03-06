/**
 * LogoIcon from SVG
 */
import React from 'react';

/* eslint-disable-next-line */
export interface LogoIconProps {
  width?: string,
  rotate?: string
}

/**
 * @param props 
 */
export const LogoIcon = (props: LogoIconProps) => {
  const defaultWidth = '1rem';

  return (
    <svg style={{
      transform: props.rotate ? `rotate(${props.rotate})` : undefined, 
      width: props.width || defaultWidth
    }} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 469.333 469.333">
      <path style={{fill:'#4CAF50'}} d="M468.527,6.592c-1.649-3.989-5.54-6.591-9.856-6.592C44.804,0,0.004,171.563,0.004,245.333 c0,95.701,72.875,160,181.333,160c136.981,0,165.675-130.347,181.077-200.384c14.973-71.292,51.151-136.391,103.787-186.752 C469.248,15.153,470.166,10.575,468.527,6.592z"/>
      <path style={{fill:'#388E3C'}} d="M10.671,469.333c-5.891,0-10.667-4.776-10.667-10.667c0-63.424,109.973-266.923,283.349-350.933 c5.302-2.568,11.682-0.353,14.251,4.949c2.568,5.302,0.353,11.682-4.949,14.251l0,0C117.572,211.776,21.337,408.811,21.337,458.667 C21.337,464.558,16.562,469.333,10.671,469.333z"/>
    </svg>
  )
}

export default LogoIcon;