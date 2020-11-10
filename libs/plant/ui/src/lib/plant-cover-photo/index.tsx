import React from 'react';

import styled from '@emotion/styled';
import { GetPlantCoverPhotoQuery } from '@gardn/data';

const StyledPlant = styled.div`
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const PlantCoverPhoto = (props: GetPlantCoverPhotoQuery) => {
  return <StyledPlant style={{backgroundImage: `url(${props.plant.coverPhoto?.url})`}} />
};

export default PlantCoverPhoto;
