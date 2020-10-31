import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantCurrentLifeCycleEnvironmentQuery } from '@gardn/data';
import { PlantCurrentLifeCycleIdealEnvironment as PlantCurrentLifeCycleIdealEnvironmentUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantCurrentLifeCycleIdealEnvironment = () => {
  const { id } = useParams<{id: string}>()

  const { data, loading, error } = useGetPlantCurrentLifeCycleEnvironmentQuery({
    variables: {
      id: parseInt(id)
    }
  });

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PlantCurrentLifeCycleIdealEnvironmentUi plant={data.plant} /> 
  )
};

export default PlantCurrentLifeCycleIdealEnvironment;
