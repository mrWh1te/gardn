import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantQuery } from '@gardn/data';
import { Plant as PlantUi } from '@gardn/plant/ui'

/**
 * This smart component reads in the Page's properties to display a Plant UI for one specific Plant given the ID in the URL
 * @param props 
 */
export const Plant = () => {
  const { id } = useParams<{id: string}>()

  const { data, loading, error } = useGetPlantQuery({
    variables: {
      id: parseInt(id)
    }
  });

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PlantUi plant={data.plant} /> 
  )
};

export default Plant;
