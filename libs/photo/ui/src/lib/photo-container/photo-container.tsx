import styled from '@emotion/styled';
import { black } from '@gardn/ui';

/* eslint-disable-next-line */
export interface PhotoContainerProps {
  imgBorderRadius?: string,
  imgBorder?: string,
  hoverMouseEffect?: boolean
}
export const PhotoContainer = styled.div<PhotoContainerProps>`
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({imgBorderRadius}) => imgBorderRadius ? imgBorderRadius : '0.25rem'};
    border: ${({imgBorder}) => imgBorder ? imgBorder : '1px solid '+black};
    box-sizing: border-box;
    ${
      ({ hoverMouseEffect }) => hoverMouseEffect ? `
      &:hover {
        cursor: pointer;
      }
      ` : ''
    }
  }

`;

export default PhotoContainer;