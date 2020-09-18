import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ContainersListProps {}

const StyledContainersList = styled.div`
  color: pink;
`;

export const ContainersList = (props: ContainersListProps) => {
  return (
    <StyledContainersList>
      <h1>Welcome to your containers!</h1>
      <ul>
        <li>
          container 1
        </li>
        <li>
          container 2
        </li>
      </ul>
    </StyledContainersList>
  );
};

export default ContainersList;
