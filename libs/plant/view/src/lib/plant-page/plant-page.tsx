import React from 'react';
import { useParams } from "react-router-dom";

import styled from '@emotion/styled';

/* eslint-disable-next-line */
interface PlantPageParams {
  id: string
}

const StyledPlantPage = styled.div`
  background-color: green;
`;

export const PlantPage = () => {
  let { id } = useParams<PlantPageParams>()

  return (
    <StyledPlantPage>
      <h1>Plant id={id}</h1>
    </StyledPlantPage>
  );
};

export default PlantPage;
