import React from 'react';

import { text } from '@storybook/addon-knobs';

import Card from './card';

export default { title: 'Card' };

export const empty = () => (
  <Card />
);

export const hasText = () => (
  <Card>
    { text('Text', 'Hi world') }
  </Card>
);
