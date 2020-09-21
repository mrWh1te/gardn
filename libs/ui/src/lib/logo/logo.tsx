import React from 'react';

import styled from '@emotion/styled';
import LogoIcon from '../icons/logo-icon/logo-icon';

/* eslint-disable-next-line */
export interface LogoProps {}

const StyledLogo = styled.h1`
  svg {
    transition: transform 0.4s ease;
    transform-origin: bottom left;
  }
  &:hover svg {
    transform: rotate(10deg);
  }
`;

export const Logo = (props: LogoProps) => {
  return (
    <StyledLogo>
      gardn
      <LogoIcon width="1.75rem" />
    </StyledLogo>
  );
};

export default Logo;
