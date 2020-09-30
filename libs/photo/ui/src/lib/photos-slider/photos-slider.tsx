import React from 'react';

import styled from '@emotion/styled';

import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';


import { Photo } from '@gardn/data';
import { black } from '@gardn/ui';

const NoPhotosContainer = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Grid2x3Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 0.5rem;
  row-gap: 1rem;
  margin-bottom: 1rem;
  height: 40vh;
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


/* eslint-disable-next-line */
export interface TabPanelProps {
  children: any,
  index: any,
  value: any
}
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
const slideRenderer = (photos: Photo[]) => ({key, index}) => (
  <Grid2x3Container key={key}>
    { photos.slice(6*index, (6*index)+6).map((photo, i) => 
      <ImgContainer key={i}>
        <img src={photo.url} alt={photo.title ? photo.title : photo.id+''} />
      </ImgContainer>
    )}
  </Grid2x3Container>
);

export const PhotosSlider = (props: PhotosSliderProps) => {
  if (props.photos?.length > 0) {
    return (
      <VirtualizeSwipeableViews enableMouseEvents slideCount={Math.ceil(props.photos.length / 6)} slideRenderer={slideRenderer(props.photos)} axis={'y'} />
    );
  }

  //  x  x  x
  //  x  x  x

  return (
    <NoPhotosContainer>
      <h5>No Photos</h5>
    </NoPhotosContainer>
  )
};

export default PhotosSlider;
