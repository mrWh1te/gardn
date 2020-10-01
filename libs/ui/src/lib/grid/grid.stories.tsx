import React from 'react';

import { number } from '@storybook/addon-knobs';

import Grid from './grid';

export default { title: 'Grid' };

export const example1x6 = () => (
  <Grid rows={number('Rows', 6)} columns={number('Columns', 1)}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Grid>
);

export const exampleNoParams = () => (
  <Grid>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Grid>
);
