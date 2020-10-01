import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'

import styled from '@emotion/styled';

import { ChevronIcon, white } from '@gardn/ui';

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
  disableClickHandler?: boolean
} 

export const GoBack = withRouter<GoBackProps, any>(({ history, disableClickHandler }) => {
  if (disableClickHandler) {
    return (
      <StyledBackButton>
        <button>
          <ChevronIcon color={white} />
        </button>
      </StyledBackButton>
    );
  }

  return (
    <StyledBackButton>
      <button onClick={() => history.goBack()}>
        <ChevronIcon color={white} />
      </button>
    </StyledBackButton>
  );
});

export default GoBack;
