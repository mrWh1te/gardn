import React from 'react';

import styled from '@emotion/styled';
import { Logo } from '@gardn/ui';

import { Navigation } from '../navigation/navigation';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.section``;

export const Header = (props: HeaderProps) => {
  return (
    <header role="navigation">
      <StyledHeader>
        <Logo />
        <Navigation />
      </StyledHeader>
    </header>
  );
};

export default Header;
