import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { SeedlingIcon } from '@gardn/ui';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    margin-left: .5rem;
    &:first-of-type {
      margin-left: 0;
    }
    a {
      text-decoration: none;
    }
  }
`;

export const Navigation = (props: NavigationProps) => {
  return (
    <StyledNavigation>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/plants">
          <SeedlingIcon />
        </Link>
      </li>
      <li>
        <Link to="/containers">Containers</Link>
      </li>
      <li>
        <Link to="/container">Container</Link>
      </li>
    </StyledNavigation>
  );
};

export default Navigation;
