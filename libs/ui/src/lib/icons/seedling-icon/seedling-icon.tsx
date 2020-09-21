/**
 * SeedingIcon from SVG
 */
import React from 'react';

/* eslint-disable-next-line */
export interface SeedlingIconProps {
  width?: string,
  rotate?: string,
  primaryColor?: string,
  secondaryColor?: string,
  light?: boolean,
  regular?: boolean
}

/**
 * @param props 
 */
export const SeedlingIcon = (props: SeedlingIconProps) => {
  const defaultWidth = '1rem';

  if (props.light) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
        width: props.width || defaultWidth,
        transform: props.rotate ? `rotate(${props.rotate})` : undefined
      }}>
        <path d="M442.7 32c-95.9 0-176.4 79.4-197.2 185.7C210.5 145.1 144.8 96 69.3 96H0v16c0 132.3 90.9 240 202.7 240H240v120c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V288h37.3C421.1 288 512 180.3 512 48V32h-69.3zm-240 288C113 320 39.2 235.2 32.5 128h36.8c89.7 0 163.4 84.8 170.2 192h-36.8zm106.6-64h-36.8C279.2 148.8 353 64 442.7 64h36.8c-6.7 107.2-80.5 192-170.2 192z" style={{
          fill: props.primaryColor || 'green'
        }} />
      </svg>
    )
  }

  if (props.regular) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
        width: props.width || defaultWidth,
        transform: props.rotate ? `rotate(${props.rotate})` : undefined
      }}>
        <path d="M436.4 32c-91 0-168.3 67.9-194.7 161.4C204.6 134.6 144 96 75.6 96H0v24c0 127.9 91.7 232 204.4 232H232v112c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V288h27.6C420.3 288 512 183.9 512 56V32h-75.6zm-232 272c-79.3 0-145.1-69.8-155.1-160h26.2c79.3 0 145.1 69.8 155.1 160h-26.2zm103.2-64h-26.2c10-90.2 75.8-160 155.1-160h26.2c-10 90.2-75.8 160-155.1 160z" style={{
          fill: props.primaryColor || 'green'
        }} />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
      width: props.width || defaultWidth,
      transform: props.rotate ? `rotate(${props.rotate})` : undefined
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