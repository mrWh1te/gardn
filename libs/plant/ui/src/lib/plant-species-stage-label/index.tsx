import React from 'react';
import styled from '@emotion/styled';

import { GetPlantSpeciesAndCurrentStageQuery } from '@gardn/data';

const StyledPlantSpeciesStageLabel = styled.h3``;

export const PlantSpeciesStageLabel = ({ plant }: GetPlantSpeciesAndCurrentStageQuery) => {
  let label = ''

  if (plant?.species?.name) {
    label += plant.species.name

    if (plant?.currentPlantStage?.name) {
      label += ' (' + plant.currentPlantStage.name + ')'
    }
  } else if (plant?.currentPlantStage?.name) {
    label += plant?.currentPlantStage?.name
  }

  return <StyledPlantSpeciesStageLabel>{ label }</StyledPlantSpeciesStageLabel>
}