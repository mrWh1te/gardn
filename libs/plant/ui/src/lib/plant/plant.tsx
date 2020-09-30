import React from 'react';

import styled from '@emotion/styled';
import { GetPlantQuery } from '@gardn/data';
import { white } from '@gardn/ui';

const StyledPlant = styled.div`
  padding: 1rem;
  color: ${white};
  h3 {
    margin: 0;
  }
`;

export const Plant = (props: GetPlantQuery) => {
  return (
    <StyledPlant>
      <h3>{ props.plant.name }</h3>
      <p>{ props.plant.species?.name }</p>
    </StyledPlant>
  );
};

export default Plant;
