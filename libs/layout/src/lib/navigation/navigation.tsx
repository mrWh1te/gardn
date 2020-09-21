import React from 'react';

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { SeedlingIcon } from '@gardn/ui';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.div`
  display: flex;
  align-content: stretch;
  width: 3rem;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-decoration: none;    

    border-bottom: 1px solid transparent;
    transition: border-color 0.5s ease;

    &.active {
      border-color: green;
    }
  }
`;

const NavLabel = styled.div`
  font-size: .7rem;
  transition: all 0.5s ease;
  
  margin-top: 0.5rem;

  .active & {
    color: green;
    font-weight: 500;
  }
`;

export const Navigation = (props: NavigationProps) => {
  return (
    <StyledNavigation>
      <NavLink to="/plants">
        <SeedlingIcon width="1.5rem" />
        <NavLabel>
          Plants
        </NavLabel>
      </NavLink>
    </StyledNavigation>
  );
};

export default Navigation;
