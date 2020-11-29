import styled from '@emotion/styled';

export const CoverView = styled.div<{backgroundColor?: string}>`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  ${({backgroundColor}) => backgroundColor ? 'background-color: ' + backgroundColor + ';' : ''}
`;

export default CoverView;