import React from 'react';

import CoverView from './';

import { color } from '@storybook/addon-knobs';

export default { title: 'Views/CoverView' };

export const example = () => (
  <CoverView>
    <p>
      Example Text
    </p>
  </CoverView>
);

export const exampleWithBackgroundColor = () => (
  <CoverView backgroundColor={color('Background color', '#c3f092')}>
    <p>
      Example Text
    </p>
  </CoverView>
);