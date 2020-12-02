import styled from '@emotion/styled';
import React from 'react';


import GoBack from '../../go-back/go-back';

export const FullScreenHeaderHeight = '4rem';

const StyledFullScreenHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: ${FullScreenHeaderHeight};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  button.go-back {
    margin-left: 1.35rem;
  }
`;

interface FullScreenHeaderProps {
  left?: JSX.Element
  right?: JSX.Element
  goBackColor?: string
}

export const FullScreenHeader = ({left, right, goBackColor}: FullScreenHeaderProps) => {

  return (
    <StyledFullScreenHeader>
      { left ? left : <GoBack color={goBackColor && goBackColor} />}
      { right && right }
    </StyledFullScreenHeader>
  )
}

export default FullScreenHeader