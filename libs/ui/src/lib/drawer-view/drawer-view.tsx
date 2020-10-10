import styled from '@emotion/styled';

/**
 * Reusable Container for "Tab Panel's" in the ActionMenu drawer for a standard size with optional vertical scrolling
 */
export const DrawerView = styled.section<{noScrolling?: boolean}>`
  height: 40vh;
  ${props => props.noScrolling === undefined || props.noScrolling === false ? 'overflow-y: auto;': 'overflow-y: hidden;'}
  padding: 1rem;
`;

export default DrawerView;
