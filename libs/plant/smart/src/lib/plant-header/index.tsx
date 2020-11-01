import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantHeaderLazyQuery } from '@gardn/data';
import { PlantHeader as PlantHeaderUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantHeader = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantHeader, { data, loading, error }] = useGetPlantHeaderLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getPlantHeader() }, [getPlantHeader])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantHeaderUi plant={data.plant} /> 
};

export default PlantHeader;
