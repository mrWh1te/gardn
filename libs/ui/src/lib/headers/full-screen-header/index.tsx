import styled from '@emotion/styled';
import React from 'react';


import { logoLightGreen } from '../../colors';
import GoBack from '../../go-back/go-back';

export const FullScreenHeaderHeight = '3rem';

const StyledFullScreenHeader = styled.div`
  height: ${FullScreenHeaderHeight};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

interface FullScreenHeaderProps {
  left?: JSX.Element
  right?: JSX.Element
}

export const FullScreenHeader = ({left, right}: FullScreenHeaderProps) => {

  return (
    <StyledFullScreenHeader>
      { left ? left : <GoBack color={logoLightGreen} />}
      { right && right }
    </StyledFullScreenHeader>
  )
}

export default FullScreenHeader