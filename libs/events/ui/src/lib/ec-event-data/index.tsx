import React from 'react';

import styled from '@emotion/styled';

import { EcEventData as EcEventDataModel, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface ECEventDataProps {
  data: Omit<EcEventDataModel, 'dateCreated'>
}

const StyledECEventData = styled.div`
  color: green;
`;

export const ECEventData = ({ data }: ECEventDataProps) => {
  let ecInfoText = data.electricalConductivity ? data.electricalConductivity + '' : undefined
  
  if (ecInfoText && data.electricalConductivityUnit) {
    ecInfoText += abbreviate(data.electricalConductivityUnit);
  }

  return (
    <StyledECEventData>
      { ecInfoText ? <p>{ecInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledECEventData>
  );
};

export default ECEventData;