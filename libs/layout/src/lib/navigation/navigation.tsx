import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { HomeIcon, SeedlingIcon } from '@gardn/ui';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.ul`
  list-style: none;
  padding-right: .5rem;
  li {
    display: inline-block;
    margin-left: 1rem;
    a {
      text-decoration: none;
    }
  }
`;

export const Navigation = (props: NavigationProps) => {
  return (
    <StyledNavigation>
      <li>
        <Link to="/">
          <HomeIcon />
        </Link>
      </li>
      <li>
        <Link to="/plants">
          <SeedlingIcon />
        </Link>
      </li>
      {/* <li>
        <Link to="/containers">Containers</Link>
      </li>
      <li>
        <Link to="/container">Container</Link>
      </li> */}
    </StyledNavigation>
  );
};

export default Navigation;
