import React from 'react';

import styled from '@emotion/styled';
import { GetPlantCoverPhotoQuery } from '@gardn/data';
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
    text-align: right;
    padding-right: 1rem;
  }
`;

const StyledPlantInner = styled.div`
  padding-top: 2rem;
`

export const Plant = (props: GetPlantCoverPhotoQuery) => {
  // todo future switch out name for temperature icon + last temperature reading
  //  also add a water droplet icon if its been recently watered
  // both icons have tooltips for click/hover for information as to what they mean
  //  maybe reserve name & species for plant drawer info tab panel
  return (
    <StyledPlant style={{backgroundImage: `url(${props.plant.coverPhoto?.url})`}}>
      <StyledPlantInner>
        {/* <ul>
          <li>
            Needs Water Icon
          </li>
          <li>
            Temperature Icon with Reading
          </li>
        </ul> */}
      </StyledPlantInner>
    </StyledPlant>
  );
};

export default Plant;
