import '@storybook/addon-knobs/register';

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
});

addons.setConfig({
  theme
});