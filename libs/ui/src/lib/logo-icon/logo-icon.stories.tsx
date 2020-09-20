import React from 'react';

import { text } from '@storybook/addon-knobs';

import LogoIcon from './logo-icon';

export default { title: 'LogoIcon' };

export const defaultNoParams = () => (
  <LogoIcon />
);

export const widthParam = () => (
  <LogoIcon width={text('Width', '5rem')} />
);

export const widthAndRotateParams = () => (
  <LogoIcon width={text('Width', '5rem')} rotate={text('Rotate', '20deg')} />
);
