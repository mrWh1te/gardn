import React from 'react';

import styled from '@emotion/styled';

import { PhEventData as PhEventDataModel } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface PhEventDataProps {
  data: Omit<PhEventDataModel, 'dateCreated'>
}

const StyledPhEventData = styled.div`
  color: red;
`;

export const PhEventData = ({ data }: PhEventDataProps) => {
  let pHInfoText = data.pH ? data.pH + 'pH' : undefined

  return (
    <StyledPhEventData>
      { pHInfoText ? <p>{pHInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledPhEventData>
  );
};

export default PhEventData;