/**
 * SeedingIcon from SVG
 */
import React from 'react';

/* eslint-disable-next-line */
export interface SeedlingIconProps {
  width?: string,
  rotate?: string,
  primaryColor?: string,
  secondaryColor?: string
}

/**
 * @param props 
 */
export const SeedlingIcon = (props: SeedlingIconProps) => {
  const defaultWidth = '1rem';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
      width: props.width || defaultWidth,
      rotate: props.rotate
    }}>
      <path d="M288 320v144a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320C100.3 320 0 219.7 0 96h64c123.7 0 224 100.3 224 224z" style={{
        fill: props.primaryColor || 'green'
      }} />
      <path d="M512 32c0 115.9-88 211.1-200.7 222.8a256.38 256.38 0 0 0-59-107.6C290.6 78.5 363.8 32 448 32z" style={{
        opacity: .4, 
        fill: props.secondaryColor || props.primaryColor || 'green'
      }} />
    </svg>
  )
}

export default SeedlingIcon;