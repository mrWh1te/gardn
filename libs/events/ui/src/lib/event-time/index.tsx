import React from 'react';

import styled from '@emotion/styled';

import { formatDate } from '@gardn/helpers';
import { gray } from '@gardn/ui';

/* eslint-disable-next-line */
export interface EventTimeProps {
  eventTime: number
}

const StyledEventTime = styled.div`
  sub {
    font-size: .75rem;
    color: ${gray};
  }
`;

export const EventTime = ({ eventTime }: EventTimeProps) => {
  return (
    <StyledEventTime>
      <sub>{ formatDate(eventTime) }</sub>
    </StyledEventTime>
  );
};

export default EventTime;