import React from 'react';
import { render } from '@testing-library/react';

import PlantsList from './plants-list';

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
    const { baseElement } = render(<PlantsList />);
    expect(baseElement).toBeTruthy();
  });

  afterAll(() => {
    jest.unmock('@garn/data');
  })
});
