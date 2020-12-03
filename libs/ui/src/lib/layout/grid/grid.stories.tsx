import React from 'react';

import { number } from '@storybook/addon-knobs';

import Grid from './grid';

export default { title: 'Layout/Grid' };

export const example6x1 = () => (
  <Grid rows={number('Rows', 6)} columns={number('Columns', 1)}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Grid>
);

export const example1x1 = () => (
  <Grid rows={number('Rows', undefined)} columns={number('Columns', undefined)}>
    <div>1</div>
  </Grid>
);