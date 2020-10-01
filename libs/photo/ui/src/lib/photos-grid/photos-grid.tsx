import React from 'react';

import styled from '@emotion/styled';

import { Photo } from '@gardn/data';
import { black } from '@gardn/ui';

const NoPhotosContainer = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

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
const Grid = styled.section<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns ? columns : 3}, ${({ columnWidth }) => columnWidth ? columnWidth : '1fr'});
  grid-template-rows: repeat(${({ rows }) => rows ? rows : 2}, ${({ rowHeight }) => rowHeight ? rowHeight : '1fr'});
  column-gap: ${({ columnGap, gap }) => columnGap ? columnGap : gap ? gap : '0.5rem'};
  row-gap: ${({ rowGap, gap }) => rowGap ? rowGap : gap ? gap : '1rem'};
  margin: ${({ margin }) => margin ? margin : '0 0 1rem 0'};
`;

const ImgContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    border: 1px solid ${black};
    box-sizing: border-box;
  }
`;

/* eslint-disable-next-line */
export interface PhotosSliderProps {
  photos?: Photo[],
  columns?: number
}

export const PhotosGrid = (props: PhotosSliderProps) => {
  if (props.photos?.length > 0) {
    const numberOfColumns = props.columns ? props.columns : 3;

    // Future virtualize
    return (
      <Grid columns={numberOfColumns} rows={Math.ceil(props.photos.length / numberOfColumns)} >
        { props.photos.map((photo, i) => 
          <ImgContainer key={i}>
            <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} />
          </ImgContainer>
        )}
      </Grid>
    );
  }

  return (
    <NoPhotosContainer>
      <h5>No Photos</h5>
    </NoPhotosContainer>
  )
};

export default PhotosGrid;
