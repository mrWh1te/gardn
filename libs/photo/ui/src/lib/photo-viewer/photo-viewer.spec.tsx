import React from 'react';
import { render } from '@testing-library/react';

import PhotoViewer from './photo-viewer';

describe('Photo Viewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoViewer />);
    expect(baseElement).toBeTruthy();
  });
});
