import { render } from '@testing-library/react';

import { noScrollExample, scrollingExample } from './drawer-view.stories'

describe('DrawerView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(scrollingExample());
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(noScrollExample());
    expect(baseElement).toBeTruthy();
  });
});
