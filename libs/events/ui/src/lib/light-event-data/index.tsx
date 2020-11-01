import React from 'react';

import styled from '@emotion/styled';

import { LightEventData as LightEventDataModel, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';

import { EventTime } from './../event-time';

/* eslint-disable-next-line */
export interface LightEventDataProps {
  data: Omit<LightEventDataModel, 'dateCreated'>
}

const StyledLightEventData = styled.div`
  color: orange;
`;

export const LightEventData = ({ data }: LightEventDataProps) => {
  let lightInfoText = data.lightOn ? 'On' : 'Off'
  
  if (data.wattage) {
    lightInfoText += ' ' + data.wattage + 'W'
  }
  if (data.color) {
    lightInfoText += ' ' + data.color
  }
  if (data.lumens) {
    lightInfoText += ' ' + data.lumens
  }
  if (data.bulbType) {
    lightInfoText += ' ' + data.bulbType
  }

  return (
    <StyledLightEventData>
      <p>{lightInfoText}</p>
      <EventTime eventTime={data.eventTime} />
    </StyledLightEventData>
  );
};

export default LightEventData;