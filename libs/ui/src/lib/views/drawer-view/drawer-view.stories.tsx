import React from 'react';

import DrawerView from './drawer-view';

export default { title: 'Views/DrawerView' };

export const noScrollExample = () => (
  <DrawerView>
    <p>
      Example Drawer View Content
    </p>
  </DrawerView>
);

export const scrollingExample = () => (
  <DrawerView>
    <p>
      Scroll down to see more:
      <br /><br /><br /><br /><br /><br /><br />
      Example Drawer View Content
    </p>
  </DrawerView>
);
