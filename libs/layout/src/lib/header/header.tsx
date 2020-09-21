import React from 'react';

import styled from '@emotion/styled';
import Box from '@material-ui/core/Box';

import { Logo, white } from '@gardn/ui';

import { Navigation } from '../navigation/navigation';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  background-color: ${white};
`;

export const Header = () => {
  return (
    <StyledHeader role="navigation">
      <Box display="flex" alignItems="center">
        <Box>
          <Logo />
        </Box>
        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          <Navigation />
        </Box>
      </Box>
    </StyledHeader>
  );
};

export default Header;
