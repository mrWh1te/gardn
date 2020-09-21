import React from 'react';

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import { SeedlingIcon } from '@gardn/ui';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.div`
  a {
    text-decoration: none;
  }
`;

const NavLabel = styled.div`
  font-size: .7rem;
  .active & {
    color: green;
    font-weight: 500;
  }
`;

export const Navigation = (props: NavigationProps) => {
  return (
    <Box display="flex" alignItems="center" style={{minHeight: '4rem'}}>
      <NavLink to="/plants">
        <Box flexDirection="column" alignItems="center" style={{textAlign: 'center'}}>
          <SeedlingIcon width="1.5rem" />
          <NavLabel>
            Plants
          </NavLabel>
        </Box>
      </NavLink>
    </Box>
  );
};

export default Navigation;
