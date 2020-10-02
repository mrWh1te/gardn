import React from 'react';

import styled from '@emotion/styled';
import { GetPlantInfoQuery } from '@gardn/data';
import { FlexBox, black } from '@gardn/ui';

const StyledPlantInfo = styled.div`

  h3 {
    margin: 0;
  }
  h3, p {
    text-align: right;
    padding-right: 1rem;
  }
`;

export const PlantInfo = ({ plant }: GetPlantInfoQuery) => {
  if (!plant) {
    return (
      <FlexBox>
        404 / No Plant
      </FlexBox>
    )
  }

  // name, not species
  // Name
  //   -empty-
  
  // not have a name, not have a species
  // ID   <-- maybe empty instead of ID?
  //   -empty-
  
  // not have a name, but have a species name
  // Species name
  //   -empty-
  
  // name, AND species name
  // Name
  //   species

  const name = plant.name ? plant.name : plant.species?.name ? plant.species.name : plant.id;
  const subName = plant.name && plant.species?.name ? plant.species.name : ''

  return (
    <StyledPlantInfo>
      <h3>{ name }</h3>
      <h6>{ subName }</h6>
      { /* Future timeline of evenhts filter by life cycle changes with most recent event at top and first event at bottom (vertical scroll as needed) */ }
      { /* todo depending on plant current life cycle -> show the info of that life cycle's environment */ }
    </StyledPlantInfo>
  );
};

export default PlantInfo;
