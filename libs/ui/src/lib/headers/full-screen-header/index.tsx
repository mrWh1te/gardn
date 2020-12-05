import styled from '@emotion/styled';
import React from 'react';

import GoBack from '../../go-back/go-back';

export const FullScreenHeaderHeight = '4rem';
export const FullScreenHeaderGutter = '1.35rem';

const StyledFullScreenHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: ${FullScreenHeaderHeight};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding-right: ${FullScreenHeaderGutter};

  button.go-back {
    margin-left: ${FullScreenHeaderGutter};
  }
`;

/* eslint-disable-next-line */
export interface FullScreenHeaderProps {
  left?: JSX.Element
  right?: JSX.Element
  goBackColor?: string
}

/**
 * This Header is for Full-Screen content pages where the Logo is covered with a fallback "Go back" icon or what is set with `left` prop
 */
export const FullScreenHeader = ({left, right, goBackColor}: FullScreenHeaderProps) => {

  return (
    <StyledFullScreenHeader>
      { left ? left : <GoBack color={goBackColor && goBackColor} />}
      { right && right }
    </StyledFullScreenHeader>
  )
}

export default FullScreenHeader