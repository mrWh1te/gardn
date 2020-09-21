import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import Box from '@material-ui/core/Box';

import { Logo, white, gray, greenishBlack } from '@gardn/ui';

import { Navigation } from '../navigation/navigation';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
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

export const Header = () => {
  return (
    <StyledHeader role="navigation">
      <Box display="flex" alignItems="center" style={{minHeight: '4rem'}}>
        <Box>
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          <Navigation />
        </Box>
      </Box>
    </StyledHeader>
  );
};

export default Header;
