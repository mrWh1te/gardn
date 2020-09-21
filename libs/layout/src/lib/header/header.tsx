import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Logo, white, gray, greenishBlack } from '@gardn/ui';

import { Navigation } from '../navigation/navigation';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  min-height: 4rem;
  background-color: ${white};
  border-bottom: 1px solid ${gray};
  padding: 0 1rem;

  a {
    text-decoration: none;
    color: ${greenishBlack};
    &:visited {
      color: ${greenishBlack};
    }
  }
`;

const LogoContainer = styled.div`
  padding-left: 0.5rem;
`;

const NavigationContainer = styled.div`
  align-self: stretch;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Header = () => {
  return (
    <StyledHeader role="navigation">
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StyledHeader>
  );
};

export default Header;
