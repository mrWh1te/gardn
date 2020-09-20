import React from 'react';
import Paper from '@material-ui/core/Paper';

import styled from '@emotion/styled';
import { Plant } from '@gardn/data';

/* eslint-disable-next-line */
export interface PlantCardProps {
  plant: Plant
}

const InnerPlantCard = styled.div`
  padding: 1rem;
  color: green;
  h3 {
    margin: 0;
  }
`;

export const PlantCard = (props: PlantCardProps) => {
  return (
    <Paper>
      <InnerPlantCard>
        <h3>{ props?.plant?.name }</h3>
        <p>Plant can be in a Container, but doesn't have to be in one, for users with minimal app feature requirements, who don't care about containers</p>
      </InnerPlantCard>
    </Paper>
  );
};

export default PlantCard;
