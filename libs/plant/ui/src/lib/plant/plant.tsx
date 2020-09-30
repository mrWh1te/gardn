import React from 'react';

import styled from '@emotion/styled';
import { Plant as PlantModel } from '@gardn/data';
import { white } from '@gardn/ui';

/* eslint-disable-next-line */
export interface PlantProps {
  plant: PlantModel
}

const StyledPlant = styled.div`
  padding: 1rem;
  color: ${white};
  h3 {
    margin: 0;
  }
`;

export const Plant = (props: PlantProps) => {
  return (
    <StyledPlant>
      <h3>{ props.plant.name }</h3>
      <p>{ props.plant.species?.name }</p>
    </StyledPlant>
  );
};

export default Plant;
