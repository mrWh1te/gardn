import React from 'react';

import styled from '@emotion/styled';
import { Plant } from '@gardn/data';
import { Card } from '@gardn/ui';

/* eslint-disable-next-line */
export interface PlantCardProps {
  plant: Plant
}

const InnerPlantCard = styled.div`
  color: green;
  h3 {
    margin: 0;
  }
`;

export const PlantCard = (props: PlantCardProps) => {
  return (
    <Card>
      <InnerPlantCard>
        <h3>{ props?.plant?.name }</h3>
        <p>Plant can be in a Container, but doesn't have to be in one, for users with minimal app feature requirements, who don't care about containers</p>
      </InnerPlantCard>
    </Card>
  );
};

export default PlantCard;
