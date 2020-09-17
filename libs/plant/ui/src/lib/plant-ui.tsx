import React from 'react';

import styled from '@emotion/styled';
import { Plant } from '@gardn/data';
import { Card } from '@gardn/ui';

/* eslint-disable-next-line */
export interface PlantUiProps {
  plant: Plant
}

const InnerPlantCard = styled.div`
  color: green;
  h3 {
    margin: 0;
  }
`;

export const PlantUi = (props: PlantUiProps) => {
  return (
    <Card>
      <InnerPlantCard>
        <h3>{ props?.plant?.name }</h3>
      </InnerPlantCard>
    </Card>
  );
};

export default PlantUi;
