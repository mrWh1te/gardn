import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantInfoQuery } from '@gardn/data';
import { PlantInfo as PlantInfoUi } from '@gardn/plant/ui';

/**
 * This smart component reads in the Page's properties to display a Plant UI for one specific Plant given the ID in the URL
 * @param props 
 */
export const PlantInfo = () => {
  const { id } = useParams<{id: string}>()

  const { data, loading, error } = useGetPlantInfoQuery({
    variables: {
      id: parseInt(id)
    }
  });

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PlantInfoUi plant={data.plant} /> 
  )
};

export default PlantInfo;
