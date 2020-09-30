import React from 'react';
import { withRouter } from 'react-router-dom'

import styled from '@emotion/styled';

import { ChevronIcon, darkGray } from '@gardn/ui';

const StyledBackButton = styled.div`
  button {
    background: none;
    border: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const GoBack = withRouter(({ history }) => {
  return (
    <StyledBackButton>
      <button onClick={() => history.goBack()}>
        <ChevronIcon color={darkGray} />
      </button>
    </StyledBackButton>
  )
});

export default GoBack;
