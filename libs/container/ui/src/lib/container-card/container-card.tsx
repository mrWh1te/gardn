import React from 'react';
import Paper from '@material-ui/core/Paper';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ContainerCardProps {}

const InnerContainerCard = styled.div`
  color: blue;
`;

export const ContainerCard = (props: ContainerCardProps) => {
  return (
    <Paper>
      <InnerContainerCard>
        <h1>Welcome to a Container Card</h1>
      </InnerContainerCard>
    </Paper>
  );
};

export default ContainerCard;
