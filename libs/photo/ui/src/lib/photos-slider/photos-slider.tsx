import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import styled from '@emotion/styled';

import { Photo } from '@gardn/data';
import { black } from '@gardn/ui';

const NoPhotosContainer = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const Grid2x3Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, 15vh);
  column-gap: 0.5rem;
  row-gap: 1rem;
  align-items: center;
  justify-items: center;
  overflow: hidden;
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
  photos?: Photo[]
}

export const PhotosSlider = (props: PhotosSliderProps) => {
  if (props.photos?.length > 0) {
    return (
      <SwipeableViews axis={'y'}>
        <Grid2x3Container>
          { props.photos.map(photo => 
            <ImgContainer>
              <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} />
            </ImgContainer>
          )}
        </Grid2x3Container>
      </SwipeableViews>
    );
  }

  //  x  x  x
  //  x  x  x

  return (
    <NoPhotosContainer>
      No Photos
    </NoPhotosContainer>
  )
};

export default PhotosSlider;
