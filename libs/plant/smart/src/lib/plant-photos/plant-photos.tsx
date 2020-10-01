import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantPhotosQuery } from '@gardn/data';
import { PhotosGrid } from '@gardn/photo/ui'

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

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PhotosGrid photos={data.plant.photos} columns={3} /> 
  )
};

export default PlantPhotos;
