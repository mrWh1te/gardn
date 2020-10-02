import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GridProps {
  columns?: number,
  columnWidth?: string,
  rows?: number,
  rowHeight?: string,
  columnGap?: string,
  rowGap?: string,
  gap?: string, // can set columnGap & rowGap with this `gap` property
  margin?: string
}
export const Grid = styled.section<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns ? columns : 3}, ${({ columnWidth }) => columnWidth ? columnWidth : '1fr'});
  grid-template-rows: repeat(${({ rows }) => rows ? rows : 2}, ${({ rowHeight }) => rowHeight ? rowHeight : '1fr'});
  column-gap: ${({ columnGap, gap }) => columnGap ? columnGap : gap ? gap : '0.5rem'};
  row-gap: ${({ rowGap, gap }) => rowGap ? rowGap : gap ? gap : '1rem'};
  margin: ${({ margin }) => margin ? margin : '0 0 1rem 0'};
`;

export default Grid;