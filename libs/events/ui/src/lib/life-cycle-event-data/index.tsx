import React from 'react';

import styled from '@emotion/styled';

import { LifeCycleEventData as LifeCycleEventDataModel } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface LifeCycleEventDataProps {
  data: {
    previousLifeCycle?: Omit<LifeCycleEventDataModel['previousLifeCycle'], 'dateCreated'>,
    nextLifeCycle?: Omit<LifeCycleEventDataModel['previousLifeCycle'], 'dateCreated'>,
    eventTime: number
  }
}

const StyledLifeCycleEventData = styled.div`
  color: purple;
`;

export const LifeCycleEventData = ({ data }: LifeCycleEventDataProps) => {
  let lifeCycleInfoText = data.nextLifeCycle?.name ? data.nextLifeCycle.name + '' : undefined

  return (
    <StyledLifeCycleEventData>
      { lifeCycleInfoText ? <p>{lifeCycleInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledLifeCycleEventData>
  );
};

export default LifeCycleEventData;