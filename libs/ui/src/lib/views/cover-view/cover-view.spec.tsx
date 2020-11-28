import { render } from '@testing-library/react';

import { example, exampleWithBackgroundColor } from './cover-view.stories'

describe('CoverView', () => {
  it('should render successfully without params', () => {
    const { baseElement } = render(example());
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with background-color param set', () => {
    const { baseElement } = render(exampleWithBackgroundColor());
    expect(baseElement).toBeTruthy();
  });
});
