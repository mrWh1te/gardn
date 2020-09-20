import React from 'react';

import styled from '@emotion/styled';
import LogoIcon from '../logo-icon/logo-icon';

/* eslint-disable-next-line */
export interface LogoProps {}

const StyledLogo = styled.ul`
  h1 {
    text-align: center;
  }
`;

export const Logo = (props: LogoProps) => {
  return (
    <StyledLogo>
      <h1>
        gardn
        <LogoIcon width="2rem" />
      </h1>
    </StyledLogo>
  );
};

export default Logo;
