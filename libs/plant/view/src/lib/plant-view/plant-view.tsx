import React from 'react';

import styled from '@emotion/styled';

import { Plant } from '@gardn/plant/smart';
import { GoBack } from '@gardn/utility';

const StyledPlantView = styled.div`
  background-color: green;

  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const PositionedGoBack = styled.div`
  position: absolute;
  left: 1.35rem;
  top: 1.35rem;
  height: 1rem;
  width: 1rem;
`;

export const PlantView = () => {
  return (
    <StyledPlantView>
      <PositionedGoBack>
        <GoBack />
      </PositionedGoBack>
      <Plant />
    </StyledPlantView>
  );
};

export default PlantView;
