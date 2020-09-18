import React from 'react';

import { Plant } from '@gardn/data';

import { PlantCard } from '@gardn/plant/ui';

import styled from '@emotion/styled';


/* eslint-disable-next-line */
export interface PlantsListProps {
  plants: Plant[]
}

const StyledPlantsList = styled.div`
  margin: 1rem;
  padding: 1rem 0;
  PlantCard {
    margin-bottom: 1rem;
  }
`;

export const PlantsList = (props: PlantsListProps) => {
  return (
    <StyledPlantsList>
      { props.plants.map( plant => <PlantCard plant={plant} /> ) }
    </StyledPlantsList>
  );
};

export default PlantsList;
