import React from 'react';

import styled from '@emotion/styled';

import { Card } from '@gardn/ui';

/* eslint-disable-next-line */
export interface ContainerCardProps {}

const InnerContainerCard = styled.div`
  color: blue;
`;

export const ContainerCard = (props: ContainerCardProps) => {
  return (
    <Card>
      <InnerContainerCard>
        <h1>Welcome to a Container Card</h1>
      </InnerContainerCard>
    </Card>
  );
};

export default ContainerCard;
