import React, { useState } from 'react';

import styled from '@emotion/styled';
import Dialog from '@material-ui/core/Dialog';

import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

import { Photo } from '@gardn/data';
import { Grid, gray } from '@gardn/ui';

import PhotoContainer from '../photo-container/photo-container';
import PhotoViewer from '../photo-viewer/photo-viewer';
import PhotoTitle from '../photo-title/photo-title';

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

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: rotate(45deg);

  &:hover {
    cursor: pointer;
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

    return (
      <>
        { /* Future: Virtualize */ }
        <Grid columns={numberOfColumns} rows={Math.ceil(props.photos.length / numberOfColumns)} >
          { props.photos.map((photo, i) => 
            <PhotoContainer key={i} hoverMouseEffect={true}>
              <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} onClick={handleClickOpen(i)} />
            </PhotoContainer>
          )}
        </Grid>
        <Dialog fullScreen open={photosGridState.open} onClose={handleClose}>
          <section onClick={handleClose} style={{height: '100%'}}>
            <CloseButton>
              <SpeedDialIcon style={{color: gray}} />
            </CloseButton>
            <PhotoViewer>
              <img src={ photosGridState.clickedPhoto?.url } alt={photosGridState.clickedPhoto?.title ? photosGridState.clickedPhoto?.title : photosGridState.clickedPhoto?.id+''} />
              {
                photosGridState.clickedPhoto?.title ? <PhotoTitle>{ photosGridState.clickedPhoto.title }</PhotoTitle> : ''
              }
            </PhotoViewer>
          </section>
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
