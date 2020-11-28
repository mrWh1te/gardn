import styled from '@emotion/styled';

export const CoverView = styled.div<{backgroundColor?: string}>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  ${({backgroundColor}) => backgroundColor ? 'background-color: ' + backgroundColor + ';' : ''}
`;

export default CoverView;