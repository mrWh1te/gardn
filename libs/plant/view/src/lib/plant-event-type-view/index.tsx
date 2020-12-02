import React from 'react';

import styled from '@emotion/styled';

import { 
  CoverView,
  Grid,
  HumidityIcon,
  white,
  logoLightGreen,
  FullScreenHeader,
  FullScreenHeaderHeight
} from '@gardn/ui';

const StyledPlantEventTypeView = styled.div`
  height: 100vh - ${FullScreenHeaderHeight};
  margin-top: ${FullScreenHeaderHeight};
  overflow-y: auto;
`;

export const PlantEventTypeView = () => {
  return (
    <CoverView backgroundColor={white}>

      <FullScreenHeader 
        right={<div>Humidity <HumidityIcon width={'1.25rem'} /></div>}
        goBackColor={logoLightGreen} />

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
