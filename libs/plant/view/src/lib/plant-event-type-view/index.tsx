import React from 'react';

import styled from '@emotion/styled';

import { 
  CoverView,
  Grid,
  white,
  logoLightGreen,
  FullScreenHeader,
  FullScreenHeaderHeight,
  DataPoint
} from '@gardn/ui';
import { PlantEventTypeLabel } from '@gardn/plant/smart';

const StyledPlantEventTypeView = styled.div`
  height: 100vh - ${FullScreenHeaderHeight};
  margin-top: ${FullScreenHeaderHeight};
  overflow-y: auto;
`;

export const PlantEventTypeView = () => {
  return (
    <CoverView backgroundColor={white}>

      <FullScreenHeader 
        right={<PlantEventTypeLabel />}
        goBackColor={logoLightGreen} />

      <StyledPlantEventTypeView>
        <Grid rows={1} columns={3} style={{textAlign: 'center', alignItems: 'flex-end'}}>
          <DataPoint label={'low'} value={'41.7%'} />
          <DataPoint label={'recent'} value={'68.5%'} large={true} />
          <DataPoint label={'high'} value={'82.1%'} />
        </Grid>
        <Grid>
          Graph TBI  
        </Grid>
        <Grid rows={1} columns={2}>
          <h3>Basil (Sprout)</h3>
          <p>ideal: 65-75%</p>
        </Grid>
        <Grid>
          Dynamic "!" Action(s) Section TBI
        </Grid>
      </StyledPlantEventTypeView>

    </CoverView>
  );
};

export default PlantEventTypeView;
