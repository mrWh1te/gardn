import React from 'react';

import styled from '@emotion/styled';

import { GetPlantHeaderQuery } from '@gardn/data';
import { FlexBox } from '@gardn/ui';

const StyledPlantHeader = styled.div`
  h6 {
    font-size: 1.2rem;
    margin-bottom: .25rem;
    text-align: right;
  }
`;

export const PlantHeader = ({ plant }: GetPlantHeaderQuery) => {
  if (!plant) {
    return (
      <FlexBox>
        404 / Missing Plant
      </FlexBox>
    )
  }

  return (
    <StyledPlantHeader>
      <h6>{ plant.species?.name ? plant.species.name : plant.name }</h6>
    </StyledPlantHeader>
  );
};

export default PlantHeader;
