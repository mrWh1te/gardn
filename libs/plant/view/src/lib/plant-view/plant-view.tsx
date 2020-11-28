import React from 'react';

import styled from '@emotion/styled';

import { PlantCoverPhoto, PlantRecentEventsIcons } from '@gardn/plant/smart';
import { GoBack, StyledGoBackTopLeftCorner } from '@gardn/utility';
import { CoverView, logoLightGreen } from '@gardn/ui';

const StyledPlantRecentEvents = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  zoom: 1.13;
  padding: .9rem 1rem;
  
  ol {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: rgba(255,255,255,.6);
    border: 1px solid transparent;
    border-radius: .2rem;
    padding: .2rem 1rem;
    height: 2rem;
    li {
      flex: 0 1 auto;
      display: flex;
      align-items: center;
      span {
        font-size: .75rem;
        margin-right: .25rem;
      }
    }
  }
`;

const StyledGoBackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const PlantView = () => {
  return (
    <CoverView backgroundColor={logoLightGreen}>

      <StyledGoBackContainer>
        <StyledGoBackTopLeftCorner>
          <GoBack />
        </StyledGoBackTopLeftCorner>
      </StyledGoBackContainer>

      <PlantCoverPhoto />

      <StyledPlantRecentEvents>
        <PlantRecentEventsIcons />
      </StyledPlantRecentEvents>

    </CoverView>
  );
};

export default PlantView;
