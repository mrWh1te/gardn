import React from 'react';
import { number } from '@storybook/addon-knobs';

import TabPanel from './tab-panel';

export default { title: 'TabPanel' };

export const exampleWithChildElement = () => (
  <TabPanel>
    <p>Example Content</p>
  </TabPanel>
);

export const exampleWithAllProps = () => (
  <TabPanel children={<p>Test</p>} index={number('Index', 1)} value={number('Value', 1)} />
);

export const exampleWithPropsAndChildNode = () => (
  <TabPanel index={number('Index', 1)} value={number('Value', 1)}>
    <p>Test3</p>
  </TabPanel>
);
