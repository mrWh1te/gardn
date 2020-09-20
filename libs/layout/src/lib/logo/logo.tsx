import React from 'react';

import styled from '@emotion/styled';

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
        <img src="/assets/leaf.svg" width="32" alt="gardn leaf logo" />
      </h1>
    </StyledLogo>
  );
};

export default Logo;
