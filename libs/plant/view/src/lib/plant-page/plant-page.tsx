import React from 'react';

import styled from '@emotion/styled';

import { Plant } from '@gardn/plant/smart';
import { GoBack } from '@gardn/utility';


const StyledPlantPage = styled.div`
  background-color: green;

  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const PlantPage = () => {
  return (
    <StyledPlantPage>
      <GoBack />
      <Plant />
    </StyledPlantPage>
  );
};

export default PlantPage;
