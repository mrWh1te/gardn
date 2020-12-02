import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { color } from '@storybook/addon-knobs';

import GoBack from './go-back';

export default {
  component: GoBack,
  decorators: [
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ],
  title: 'GoBack'
}

export const example = () => (
  <GoBack color={color('Icon Color', '#000')} />
);
