import React from 'react';

import styled from '@emotion/styled';

import { 
  CoverView,
  Grid,
  HumidityIcon,
  white,
  logoLightGreen,
  GoBack, 
  StyledGoBackTopLeftCorner
} from '@gardn/ui';

const StyledTopRightCorner = styled.div`
  position: absolute;
  right: 1.35rem;
  top: 1.35rem;
  height: 1rem;
  width: 1rem;
`;

const StyledEventTypeHeader = styled.h1`
  display: inline-block;
  font-size: 1.1rem;
  text-decoration: underline;
`;

const StyledPlantEventTypeView = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

export const PlantEventTypeView = () => {
  return (
    <CoverView backgroundColor={white}>

      <StyledGoBackTopLeftCorner>
        <GoBack color={logoLightGreen} />
        <StyledEventTypeHeader>
          Humidity
        </StyledEventTypeHeader>
      </StyledGoBackTopLeftCorner>
      <StyledTopRightCorner>
        <HumidityIcon width={'1.25rem'} />
      </StyledTopRightCorner>

      <StyledPlantEventTypeView>
        <Grid rows={1} columns={2}>
          <div>
            <h3>Basil (Sprout)</h3>
            <p>ideal: 65-75%</p>
          </div>
          <div>
            <h2>
              71%
            </h2>
          </div>
        </Grid>
        <Grid>
          Graph TBI  
        </Grid>
        <Grid>
          Dynamic "!" Action(s) Section TBI
        </Grid>
      </StyledPlantEventTypeView>

    </CoverView>
  );
};

export default PlantEventTypeView;
