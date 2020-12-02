import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'

import styled from '@emotion/styled';

import { white } from './../colors';
import { ChevronIcon } from './../icons/chevron-icon/chevron-icon';

const StyledBackButton = styled.div`
  button {
    background: none;
    border: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

/* eslint-disable-next-line */
export interface GoBackProps extends RouteComponentProps {
  disableClickHandler?: boolean,
  color?: string
} 

export const GoBack = withRouter<GoBackProps, any>(({ history, disableClickHandler, color }) => {
  if (disableClickHandler) {
    return (
      <StyledBackButton>
        <button className={'go-back'}>
          <ChevronIcon color={color ? color : white} />
        </button>
      </StyledBackButton>
    );
  }

  return (
    <StyledBackButton>
      <button onClick={() => history.goBack()} className={'go-back'}>
        <ChevronIcon color={color ? color : white} />
      </button>
    </StyledBackButton>
  );
});

export default GoBack;
