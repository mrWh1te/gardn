import React from 'react';

import styled from '@emotion/styled';

import { TemperatureEventData as TemperatureEventDataModel, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface TemperatureEventDataProps {
  data: Omit<TemperatureEventDataModel, 'dateCreated'>
}

const StyledTemperatureEventData = styled.div`
  color: pink;
`;

export const TemperatureEventData = ({ data }: TemperatureEventDataProps) => {
  let temperatureInfoText = data.temperature ? data.temperature + '' : undefined
  
  if (temperatureInfoText && data.temperatureUnit) {
    temperatureInfoText += abbreviate(data.temperatureUnit);
  }

  return (
    <StyledTemperatureEventData>
      { temperatureInfoText ? <p>{temperatureInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledTemperatureEventData>
  );
};

export default TemperatureEventData;