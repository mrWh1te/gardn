import React from 'react';

import styled from '@emotion/styled';

import { 
  CoverView,
  Grid,
  white,
  logoLightGreen,
  FullScreenHeader,
  FullScreenHeaderHeight,
  FullScreenHeaderGutter
} from '@gardn/ui';
import { 
  PlantEventTypeAttentionAlert,
  PlantEventTypeIdealDataPoint,
  PlantEventTypeInteractiveDataGraph,
  PlantEventTypeLabel,
  PlantSpeciesStageLabel
} from '@gardn/plant/smart';

const StyledPlantEventTypeView = styled.div`
  height: 100vh - ${FullScreenHeaderHeight};
  margin-top: ${FullScreenHeaderHeight};
  padding: 0 ${FullScreenHeaderGutter};
  overflow-y: auto;
`;

export const PlantEventTypeView = () => {
  return (
    <CoverView backgroundColor={white}>

      <FullScreenHeader 
        right={<PlantEventTypeLabel />}
        goBackColor={logoLightGreen} />

      <StyledPlantEventTypeView>
        <PlantEventTypeInteractiveDataGraph />
        <Grid columns={2}>
          <PlantSpeciesStageLabel />
          <PlantEventTypeIdealDataPoint />
        </Grid>
        <PlantEventTypeAttentionAlert />
      </StyledPlantEventTypeView>

    </CoverView>
  );
};

export default PlantEventTypeView;
