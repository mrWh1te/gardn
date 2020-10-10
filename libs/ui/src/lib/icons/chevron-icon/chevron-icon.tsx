/**
 * SeedingIcon from SVG
 */
import React from 'react';

/* eslint-disable-next-line */
export interface ChevronIconProps {
  width?: string,
  rotate?: string,
  color?: string,
  solid?: boolean
}

/**
 * @param props 
 */
export const ChevronIcon = (props: ChevronIconProps) => {
  const defaultWidth = '1rem';

  if (props.solid) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{
        width: props.width || defaultWidth,
        transform: props.rotate ? `rotate(${props.rotate})` : undefined
      }}>
        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" style={{
          fill: props.color || 'green'
        }} />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style={{
      width: props.width || defaultWidth,
      transform: props.rotate ? `rotate(${props.rotate})` : undefined
    }}>
      <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"  style={{
          fill: props.color || 'green'
        }} />
    </svg>
  )
}

export default ChevronIcon;