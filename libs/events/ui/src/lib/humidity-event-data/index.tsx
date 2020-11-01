import React from 'react';

import styled from '@emotion/styled';

import { HumidityEventData as HumidityEventDataModel, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface HumidityEventDataProps {
  data: Omit<HumidityEventDataModel, 'dateCreated'>
}

const StyledHumidityEventData = styled.div`
  color: gray;
`;

export const HumidityEventData = ({ data }: HumidityEventDataProps) => {
  let humidityInfoText = data.humidity ? data.humidity + '' : undefined
  
  if (humidityInfoText && data.humidityUnit) {
    humidityInfoText += abbreviate(data.humidityUnit);
  }

  return (
    <StyledHumidityEventData>
      { humidityInfoText ? <p>{humidityInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledHumidityEventData>
  );
};

export default HumidityEventData;