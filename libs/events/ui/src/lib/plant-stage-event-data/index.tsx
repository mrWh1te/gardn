import React from 'react';

import styled from '@emotion/styled';

import { PlantStageEventData as PlantStageEventDataModel } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface PlantStageEventDataProps {
  data: {
    previousPlantStage?: Omit<PlantStageEventDataModel['previousPlantStage'], 'dateCreated'>,
    nextPlantStage?: Omit<PlantStageEventDataModel['previousPlantStage'], 'dateCreated'>,
    eventTime: number
  }
}

const StyledPlantStageEventData = styled.div`
  color: purple;
`;

export const PlantStageEventData = ({ data }: PlantStageEventDataProps) => {
  let lifeCycleInfoText = data.nextPlantStage?.name ? data.nextPlantStage.name + '' : undefined

  return (
    <StyledPlantStageEventData>
      { lifeCycleInfoText ? <p>{lifeCycleInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledPlantStageEventData>
  );
};

export default PlantStageEventData;