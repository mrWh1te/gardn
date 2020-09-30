import React from 'react';

import styled from '@emotion/styled';

import { Plant } from '@gardn/plant/smart';

const StyledPlantPage = styled.div`
  background-color: green;
`;

export const PlantPage = () => {
  return (
    <StyledPlantPage>
      <Plant />
    </StyledPlantPage>
  );
};

export default PlantPage;
