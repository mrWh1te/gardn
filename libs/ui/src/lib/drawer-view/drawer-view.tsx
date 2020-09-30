// import React from 'react';

import styled from '@emotion/styled';

import { white } from './../colors';

/**
 * Reusable Container for "Tab Panel's" in the ActionMenu drawer for a standard size with optional vertical scrolling
 */
export const DrawerView = styled.section`
  height: 40vh;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${white};
`;

export default DrawerView;
