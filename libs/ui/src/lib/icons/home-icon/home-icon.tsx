/**
 * SeedingIcon from SVG
 */
import React from 'react';

/* eslint-disable-next-line */
export interface HomeIconProps {
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
export const HomeIcon = (props: HomeIconProps) => {
  const defaultWidth = '1rem';
  const defaultColor = 'green';

  if (props.light) {
    return (
      <svg style={{
        transform: props.rotate ? `rotate(${props.rotate})` : undefined,
        width: props.width || defaultWidth
      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M573.48 219.91L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM240 480V320h96v160zm240 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z" style={{
          fill: props.primaryColor || defaultColor
        }} />
      </svg>
    )
  }

  if (props.regular) {
    return (
      <svg style={{
        transform: props.rotate ? `rotate(${props.rotate})` : undefined,
        width: props.width || defaultWidth
      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M570.24 215.42L323.87 13a56 56 0 0 0-71.75 0L5.76 215.42a16 16 0 0 0-2 22.54L14 250.26a16 16 0 0 0 22.53 2L64 229.71V288h-.31v208a16.13 16.13 0 0 0 16.1 16H496a16 16 0 0 0 16-16V229.71l27.5 22.59a16 16 0 0 0 22.53-2l10.26-12.3a16 16 0 0 0-2.05-22.58zM464 224h-.21v240H352V320a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v144H111.69V194.48l.31-.25v-4L288 45.65l176 144.62z" style={{
            fill: props.primaryColor || defaultColor
          }} />
      </svg>
    )
  }

  return (
    <svg style={{
      transform: props.rotate ? `rotate(${props.rotate})` : undefined,
      width: props.width || defaultWidth
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M527.92 283.91L298.6 81.64a16 16 0 0 0-21.17 0L48.11 283.92a16 16 0 0 1-22.59-1.21L4.1 258.89a16 16 0 0 1 1.21-22.59l256-226a39.85 39.85 0 0 1 53.45 0l255.94 226a16 16 0 0 1 1.22 22.59l-21.4 23.82a16 16 0 0 1-22.6 1.2z" style={{
        fill: props.primaryColor || defaultColor
      }} />
      <path d="M352 496V368a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v128a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V311.07c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 0 1-16 16H368a16 16 0 0 1-16-16z" style={{
        opacity: .4,
        fill: props.secondaryColor || props.primaryColor || defaultColor
      }} />
    </svg>
  )
}

export default HomeIcon;