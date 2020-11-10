import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantCoverPhotoLazyQuery } from '@gardn/data';
import { PlantCoverPhoto as PlantCoverPhotoUi } from '@gardn/plant/ui'

/**
 * This smart component reads in the Page's properties to display a Plant UI for one specific Plant given the ID in the URL
 * @param props 
 */
export const PlantCoverPhoto = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantCoverPhoto, { data, loading, error }] = useGetPlantCoverPhotoLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getPlantCoverPhoto() }, [getPlantCoverPhoto])

  return (
    error ? <div>Error :( { error?.graphQLErrors[0]?.message } </div> :
    loading || !data ? <div>Loading</div> : 
    <PlantCoverPhotoUi plant={data.plant} /> 
  )
};

export default PlantCoverPhoto;
