import React, { useState } from 'react';

import styled from '@emotion/styled';
import Dialog from '@material-ui/core/Dialog';

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
/* eslint-disable-next-line */
export interface PhotosGridState {
  open: boolean,
  clickedPhoto?: Photo
}

export const PhotoViewer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  img {
    
  }
`;

export const PhotosGrid = (props: PhotoGridProps) => {
  const [photosGridState, setPhotosGridState] = useState<PhotosGridState>({open: false});

  const handleClickOpen = (clickedPhotoIndex: number) => () => {
    setPhotosGridState({
      ...photosGridState,
      open: true,
      clickedPhoto: props.photos[clickedPhotoIndex]
    });
  };

  const handleClose = () => {
    setPhotosGridState({
      ...photosGridState,
      open: false
    });
  };

  if (props.photos?.length > 0) {
    const numberOfColumns = props.columns ? props.columns : 3;

    // Future virtualize
    return (
      <>
        <Grid columns={numberOfColumns} rows={Math.ceil(props.photos.length / numberOfColumns)} >
          { props.photos.map((photo, i) => 
            <PhotoContainer key={i}>
              <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} onClick={handleClickOpen(i)} />
            </PhotoContainer>
          )}
        </Grid>
        <Dialog fullScreen open={photosGridState.open} onClose={handleClose}>
          {/* <GoBack /> */}
          <PhotoViewer onClick={handleClose}>
            {/* <PhotoContainer imgBorderRadius={'0'} imgBorder={'none'}> */}
              <img src={ photosGridState.clickedPhoto?.url } alt={photosGridState.clickedPhoto?.title ? photosGridState.clickedPhoto?.title : photosGridState.clickedPhoto?.id+''} />
            {/* </PhotoContainer> */}
          </PhotoViewer>
          {/* </PhotoContainer> */}
        </Dialog>
      </>
    );
  }

  return (
    <NoPhotosContainer>
      <h5>No Photos</h5>
    </NoPhotosContainer>
  )
};

export default PhotosGrid;
