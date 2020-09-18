import React from 'react';
import { render } from '@testing-library/react';

import PlantPage from './plant-page';

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
    const { baseElement } = render(<PlantPage />);
    expect(baseElement).toBeTruthy();
  });
});
