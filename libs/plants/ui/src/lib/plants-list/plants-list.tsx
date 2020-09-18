import React from 'react';

import { Plant } from '@gardn/data';

import styled from '@emotion/styled';


/* eslint-disable-next-line */
export interface PlantsListProps {
  plants: Plant[]
}

const StyledPlantsList = styled.div`
  color: pink;
`;

export const PlantsList = (props: PlantsListProps) => {
  return (
    <StyledPlantsList>
      <ul>
        { props.plants.map( plant => <li>{ plant.name }</li> ) }
      </ul>
    </StyledPlantsList>
  );
};

export default PlantsList;
