import React from 'react';

import styled from '@emotion/styled';

import { Photo } from '@gardn/data';
import { Grid } from '@gardn/ui';

import PhotoContainer from '../photo-container/photo-container';

const NoPhotosContainer = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

/* eslint-disable-next-line */
export interface PhotoGridProps {
  photos?: Photo[],
  columns?: number
}

export const PhotosGrid = (props: PhotoGridProps) => {
  if (props.photos?.length > 0) {
    const numberOfColumns = props.columns ? props.columns : 3;

    // Future virtualize
    return (
      <Grid columns={numberOfColumns} rows={Math.ceil(props.photos.length / numberOfColumns)} >
        { props.photos.map((photo, i) => 
          <PhotoContainer key={i}>
            <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} />
          </PhotoContainer>
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
