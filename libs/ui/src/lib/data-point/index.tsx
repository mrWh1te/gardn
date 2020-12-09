import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DataPointProps {
  label: string
  value: number | string
  valueUnit?: string
  large?: boolean
}

const StyledDataPoint = styled.div`
  text-align: center;

  h5, p {
    margin: 0;
  }

  h5 {
    font-size: 1.5rem;
    span {
      font-size: .9rem;
      font-weight: 300;
    }
  }
  p {
    font-weight: 300;
    font-size: .9rem;
  }

  &.large {
    h5 {
      font-size: 2.5rem;
      span {
        font-size: 1.74rem;
      }
    }
  }
`;

export const DataPoint = ({label, value, valueUnit, large}: DataPointProps) => {
  return (
    <StyledDataPoint className={large === true && 'large'}>
      <h5>{ value }{ valueUnit && <span>{ valueUnit }</span> }</h5>
      <p>{ label }</p>
    </StyledDataPoint>
  )
}

export default DataPoint