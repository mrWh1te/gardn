import React, { useState } from 'react';

import { Photo } from '@gardn/data';
import { Grid, FlexBox } from '@gardn/ui';

import PhotoContainer from '../photo-container/photo-container';
import PhotoDialog from '../photo-dialog/photo-dialog';

/* eslint-disable-next-line */
export interface PhotoGridProps {
  photos?: Photo[],
  columns?: number
}
/* eslint-disable-next-line */
export interface PhotosGridState {
  photoModalOpen: boolean,
  clickedPhoto?: Photo
}

export const PhotosGrid = (props: PhotoGridProps) => {
  const [photosGridState, setPhotosGridState] = useState<PhotosGridState>({photoModalOpen: false});

  const openPhotoDialog = (clickedPhotoIndex: number) => () => {
    setPhotosGridState({
      ...photosGridState,
      photoModalOpen: true,
      clickedPhoto: props.photos[clickedPhotoIndex]
    });
  };

  const closePhotoDialog = () => {
    setPhotosGridState({
      ...photosGridState,
      photoModalOpen: false
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
              <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} onClick={openPhotoDialog(i)} />
            </PhotoContainer>
          )}
        </Grid>
        <PhotoDialog closeHandler={closePhotoDialog} dialogOpen={photosGridState.photoModalOpen} photo={photosGridState.clickedPhoto} />
      </>
    );
  }

  return (
    <FlexBox>
      <h5 style={{fontWeight: 300}}>No Photos</h5>
    </FlexBox>
  )
};

export default PhotosGrid;
