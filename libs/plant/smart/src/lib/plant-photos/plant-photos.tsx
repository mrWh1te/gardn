import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantPhotosQuery } from '@gardn/data';
import { PhotosSlider } from '@gardn/photo/ui'

/**
 * This smart component reads in the Page's properties to display a Plant UI for one specific Plant given the ID in the URL
 * @param props 
 */
export const PlantPhotos = () => {
  const { id } = useParams<{id: string}>()

  const { data, loading, error } = useGetPlantPhotosQuery({
    variables: {
      id: parseInt(id)
    }
  });

  // PlantPhotos -> UI:PhotosSlider axis{'y'} -> SwipeableViews axis{'y'} 2 rows | 3 columns per slide - virtualize

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PhotosSlider photos={data.plant.photos} /> 
  )
};

export default PlantPhotos;
