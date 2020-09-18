// import React from eact';

import styled from '@emotion/styled';
import { white, black } from '../colors';

export const Card = styled.div`
  position: relative;

  border: .1rem solid transparent;
  border-radius: .3rem;
  background-color: ${white};
  
  padding: 1rem;
  color: ${black};

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`;

export default Card;
