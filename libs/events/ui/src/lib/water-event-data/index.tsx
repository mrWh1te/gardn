import React from 'react';

import styled from '@emotion/styled';

import { WaterEventData as WaterEventDataModel, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface WaterEventDataProps {
  data: Omit<WaterEventDataModel, 'dateCreated'>
}

const StyledWaterEventData = styled.div`
  color: blue;
`;

export const WaterEventData = ({ data }: WaterEventDataProps) => {
  let waterInfoText = data.amount ? data.amount + '' : undefined;
  
  if (waterInfoText && data.amountUnit) {
    waterInfoText += abbreviate(data.amountUnit);
  }

  let temperature = data.temperature ? data.temperature + '' : undefined;
  if (temperature && data.temperatureUnit) {
    temperature += abbreviate(data.temperatureUnit);
  }

  if (temperature) {
    waterInfoText += ' at ' + temperature
  }

  return (
    <StyledWaterEventData>
      { waterInfoText ? <p>{waterInfoText}</p> : ''}
      <EventTime eventTime={data.eventTime} />
    </StyledWaterEventData>
  );
};

export default WaterEventData;