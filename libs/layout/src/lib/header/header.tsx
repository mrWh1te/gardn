import React from 'react';

import styled from '@emotion/styled';
import Box from '@material-ui/core/Box';

import { Logo, white, gray } from '@gardn/ui';

import { Navigation } from '../navigation/navigation';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  background-color: ${white};
  border-bottom: 1px solid ${gray};
  padding: 0 1rem;
`;

export const Header = () => {
  return (
    <StyledHeader role="navigation">
      <Box display="flex" alignItems="center" style={{minHeight: '2.68rem'}}>
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
