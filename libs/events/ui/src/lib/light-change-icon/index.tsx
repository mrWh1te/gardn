import React from 'react';

import { MoonStarsIcon, SunIcon } from '@gardn/ui';

/* eslint-disable-next-line */
interface LightChangeIconProps {
  lightOn?: boolean
}

export const LightChangeIcon = ({lightOn}: LightChangeIconProps) => {
  if (lightOn === true || lightOn === undefined) {
    // by default show Sun (light on)
    return <SunIcon />
  }

  return <MoonStarsIcon />
}

export default LightChangeIcon;