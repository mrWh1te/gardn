import React from 'react';

import Card from './card';

export default { title: 'Card' };

export const empty = () => (
  <Card />
);

export const hasText = () => (
  <Card>
    Text
  </Card>
);