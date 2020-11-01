import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantPhotosLazyQuery } from '@gardn/data';
import { PhotosGrid } from '@gardn/photo/ui'

/**
 * This smart component reads in the Page's properties to display a Plant UI for one specific Plant given the ID in the URL
 * @param props 
 */
export const PlantPhotos = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantPhotos, { data, loading, error }] = useGetPlantPhotosLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getPlantPhotos() }, [getPlantPhotos])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PhotosGrid photos={data.plant.photos} columns={3} />
};

export default PlantPhotos;
