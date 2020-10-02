import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FlexBoxProps {
  width?: string,
  height?: string,
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string
}

/**
 * default no params will make a flexbox row direction with 100% width & height that center/center children
 */
export const FlexBox = styled.section<FlexBoxProps>`
  display: flex;
  ${({flexDirection}) => flexDirection && flexDirection !== 'row' ? 'flex-direction: ' + flexDirection + ';' : ''}
  height: ${({height}) => height ? height : '100%'};
  width: ${({width}) => width ? width : '100%'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
`;

export default FlexBox;