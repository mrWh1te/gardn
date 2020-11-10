import React from 'react';

import styled from '@emotion/styled';

import { PlantCoverPhoto, PlantRecentEventsIcons } from '@gardn/plant/smart';
import { GoBack } from '@gardn/utility';

const StyledPlantView = styled.div`
  background-color: green;

  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const StyledGoBack = styled.div`
  position: absolute;
  left: 1.35rem;
  top: 1.35rem;
  height: 1rem;
  width: 1rem;
`;

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

export const PlantView = () => {
  return (
    <StyledPlantView>

      <StyledGoBack>
        <GoBack />
      </StyledGoBack>

      <PlantCoverPhoto />

      <StyledPlantRecentEvents>
        <PlantRecentEventsIcons />
      </StyledPlantRecentEvents>

    </StyledPlantView>
  );
};

export default PlantView;
