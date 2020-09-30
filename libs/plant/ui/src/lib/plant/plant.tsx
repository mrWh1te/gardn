import React from 'react';

import styled from '@emotion/styled';
import { GetPlantQuery } from '@gardn/data';
import { black } from '@gardn/ui';

const StyledPlant = styled.div`
  
  color: ${black};
  background-size: cover;
  height: 100vh;
  width: 100vw;

  h3 {
    margin: 0;
  }
  h3, p {
    background-color: green;
    text-align: center;
  }
`;

const StyledPlantInner = styled.div`
  padding-top: 2rem;
`

export const Plant = (props: GetPlantQuery) => {
  console.log('props = ', props);
  return (
    <StyledPlant style={{backgroundImage: `url(${props.plant.coverPhoto?.url})`}}>
      <StyledPlantInner>
        <h3>{ props.plant.name }</h3>
        <p>{ props.plant.species?.name }</p>
      </StyledPlantInner>
    </StyledPlant>
  );
};

export default Plant;
