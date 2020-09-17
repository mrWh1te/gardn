import React from 'react';

import styled from '@emotion/styled';
import { Plant } from '@gardn/data';

/* eslint-disable-next-line */
export interface PlantUiProps {
  plant: Plant
}

const StyledPlantUi = styled.div`
  color: pink;
`;

export const PlantUi = (props: PlantUiProps) => {
  return (
    <StyledPlantUi>
      <h3>{ props?.plant?.name }</h3>
    </StyledPlantUi>
  );
};

export default PlantUi;
