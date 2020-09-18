import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PlantsListProps {}

const StyledPlantsList = styled.div`
  color: pink;
`;

export const PlantsList = (props: PlantsListProps) => {
  return (
    <StyledPlantsList>
      <h1>Welcome to plants</h1>
      <ul>
        <li>plant 1</li>
        <li>plant 2</li>
      </ul>
    </StyledPlantsList>
  );
};

export default PlantsList;
