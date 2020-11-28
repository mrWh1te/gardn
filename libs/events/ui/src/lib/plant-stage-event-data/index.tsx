import React from 'react';

import styled from '@emotion/styled';

import { PlantStageEventData as PlantStageEventDataModel } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface PlantStageEventDataProps {
  data: {
    plantStage?: Omit<PlantStageEventDataModel['plantStage'], 'dateCreated'>,
    eventTime: number
  }
}

const StyledPlantStageEventData = styled.div`
  color: purple;
`;

export const PlantStageEventData = ({ data }: PlantStageEventDataProps) => {
  let lifeCycleInfoText = data.plantStage?.name ? data.plantStage.name + '' : undefined

  return (
    <StyledPlantStageEventData>
      { lifeCycleInfoText ? <p>{lifeCycleInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledPlantStageEventData>
  );
};

export default PlantStageEventData;