import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DataPointProps {
  label: string
  value: number | string
  large?: boolean
}

const StyledDataPoint = styled.div`
  text-align: center;

  h5, p {
    margin: 0;
  }

  h5 {
    font-size: 1.5rem;
  }
  p {
    font-weight: 300;
    font-size: .9rem;
  }

  &.large {
    h5 {
      font-size: 2.5rem;
    }
  }
`;

export const DataPoint = ({label, value, large}: DataPointProps) => {
  return (
    <StyledDataPoint className={large === true && 'large'}>
      <h5>{ value }</h5>
      <p>{ label }</p>
    </StyledDataPoint>
  )
}

export default DataPoint