import React from 'react';
import { render } from '@testing-library/react';

import Plants from './plants';

jest.mock('@gardn/data', () => ({
  esModule: true,
  useGetPlantsQuery: () => ({
    data: [],
    loading: true,
    error: null
  })
}))

describe('Plants', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Plants />);
    expect(baseElement).toBeTruthy();
  });

  afterAll(() => {
    jest.unmock('@garn/data');
  })
});
