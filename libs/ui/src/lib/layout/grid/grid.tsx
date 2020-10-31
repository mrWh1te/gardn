import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GridProps {
  columns?: number,
  gridTemplateColumns?: string, // overrides repeat(columns) if columns used
  columnWidth?: string,
  rows?: number,
  gridTemplateRows?: string, // overrides repeat(rows) if rows used
  rowHeight?: string,
  columnGap?: string,
  rowGap?: string,
  gap?: string, // can set columnGap & rowGap with this `gap` property
  margin?: string
}
export const Grid = styled.section<GridProps>`
  display: grid;
  grid-template-columns: ${({gridTemplateColumns, columns, columnWidth}) => calculateGridTemplateColumnsValue({gridTemplateColumns, columns, columnWidth})};
  grid-template-rows: ${({gridTemplateRows, rows, rowHeight}) => calculateGridTemplateRowsValue({gridTemplateRows, rows, rowHeight})};
  column-gap: ${({ columnGap, gap }) => columnGap ? columnGap : gap ? gap : '0.5rem'};
  row-gap: ${({ rowGap, gap }) => rowGap ? rowGap : gap ? gap : '1rem'};
  margin: ${({ margin }) => margin ? margin : '0 0 1rem 0'};
`;

//
// Helpers
const calculateGridTemplateColumnsValue = ({gridTemplateColumns, columns, columnWidth}: Pick<GridProps, 'gridTemplateColumns' | 'columns' | 'columnWidth'>): string => {
  if (gridTemplateColumns) {
    return gridTemplateColumns
  }

  return `repeat(${columns ? columns : 3}, ${columnWidth ? columnWidth : '1fr'})`
}
const calculateGridTemplateRowsValue = ({gridTemplateRows, rows, rowHeight}: Pick<GridProps, 'gridTemplateRows' | 'rows' | 'rowHeight'>): string => {
  if (gridTemplateRows) {
    return gridTemplateRows
  }

  return `repeat(${rows ? rows : 2}, ${rowHeight ? rowHeight : '1fr'})`
}


export default Grid;