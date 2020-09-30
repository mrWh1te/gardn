import React from 'react';

import styled from '@emotion/styled';

import { Plant } from '@gardn/plant/smart';

import { withRouter } from 'react-router-dom'
const StyledBackButton = styled.div`
  background-color: green;

  position: absolute;
  left: .5rem;
  top: .5rem;
  height: 1rem;
  width: 1rem;
`;
export const GoBack = withRouter(({ history }) => {
  return (
    <StyledBackButton>
      <button onClick={() => history.goBack()}>
        &#x3C;
      </button>
    </StyledBackButton>
  )
});


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
