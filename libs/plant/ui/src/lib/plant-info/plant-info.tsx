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
  console.log('plant info = ', plant)

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



  // todo future switch out name for temperature icon + last temperature reading
  //  also add a water droplet icon if its been recently watered
  // both icons have tooltips for click/hover for information as to what they mean
  //  maybe reserve name & species for plant drawer info tab panel
  return (
    <StyledPlantInfo>
      <h3>{ name }</h3>
      <h6>{ subName }</h6>
      { plant?.dateGerminated ? <p>Germinated: { new Date(plant.dateGerminated).toDateString()} </p> : ''}
      { plant?.datePlanted ? <p>Planted: { new Date(plant.datePlanted).toDateString()} </p> : ''}
      { plant?.dateSprouted ? <p>Sprouted: { new Date(plant.dateSprouted).toDateString()} </p> : ''} 
    </StyledPlantInfo>
  );
};

export default PlantInfo;
