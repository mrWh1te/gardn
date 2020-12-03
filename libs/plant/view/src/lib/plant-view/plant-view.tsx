import React from 'react';

import styled from '@emotion/styled';

import { PlantCoverPhoto, PlantRecentEventsIcons } from '@gardn/plant/smart';
import { CoverView, logoLightGreen, FullScreenHeader } from '@gardn/ui';

const StyledPlantRecentEvents = styled.div`
  zoom: 1.13;
  padding-right: 1rem;
  
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

export const PlantView = () => {
  return (
    <CoverView backgroundColor={logoLightGreen}>

      <FullScreenHeader 
        right={ <StyledPlantRecentEvents>
                  <PlantRecentEventsIcons />
                </StyledPlantRecentEvents> }
      />

      <PlantCoverPhoto />

    </CoverView>
  );
};

export default PlantView;
