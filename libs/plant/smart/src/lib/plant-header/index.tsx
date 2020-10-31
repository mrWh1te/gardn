import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantHeaderQuery } from '@gardn/data';
import { PlantHeader as PlantHeaderUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantHeader = () => {
  const { id } = useParams<{id: string}>()

  const { data, loading, error } = useGetPlantHeaderQuery({
    variables: {
      id: parseInt(id)
    }
  });

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PlantHeaderUi plant={data.plant} /> 
  )
};

export default PlantHeader;
