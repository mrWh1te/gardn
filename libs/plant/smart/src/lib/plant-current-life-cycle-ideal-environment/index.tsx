import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantCurrentLifeCycleEnvironmentLazyQuery } from '@gardn/data';
import { PlantCurrentLifeCycleIdealEnvironment as PlantCurrentLifeCycleIdealEnvironmentUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantCurrentLifeCycleIdealEnvironment = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantCurrentLifeCycleEnvironment, { data, loading, error }] = useGetPlantCurrentLifeCycleEnvironmentLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getPlantCurrentLifeCycleEnvironment() }, [getPlantCurrentLifeCycleEnvironment])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantCurrentLifeCycleIdealEnvironmentUi plant={data.plant} /> 
};

export default PlantCurrentLifeCycleIdealEnvironment;
