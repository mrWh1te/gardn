import React from 'react';
import { render } from '@testing-library/react';

import PlantView from './plant-view';

jest.mock('react-router-dom', () => {

  function useParams<R>() {
    return {
      id: 5
    }
  }

  return {
    esModule: true,
    useParams
  }
})

describe('PlantPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlantView />);
    expect(baseElement).toBeTruthy();
  });
});
