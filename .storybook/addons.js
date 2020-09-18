import '@storybook/addon-knobs/register';

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  brandImage: 'https://raw.githubusercontent.com/mrWh1te/gardn/master/.storybook/storybook-logo.png'
});

addons.setConfig({
  theme
});