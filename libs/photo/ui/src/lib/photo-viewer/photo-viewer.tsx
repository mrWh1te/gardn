import styled from '@emotion/styled';
import { white } from '@gardn/ui';

export const PhotoViewer = styled.div`
  background-color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  img {
    max-width: 100%;
  }
`;

export default PhotoViewer;