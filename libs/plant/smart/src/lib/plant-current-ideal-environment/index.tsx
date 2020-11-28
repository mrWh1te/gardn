import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantCurrentEnvironmentLazyQuery } from '@gardn/data';
import { PlantCurrentIdealEnvironment as PlantCurrentIdealEnvironmentUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantCurrentIdealEnvironment = () => {
  const { id } = useParams<{id: string}>()

  const [getCurrentIdealEnvironment, { data, loading, error }] = useGetPlantCurrentEnvironmentLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getCurrentIdealEnvironment() }, [getCurrentIdealEnvironment])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantCurrentIdealEnvironmentUi plant={data.plant} />
};

export default PlantCurrentIdealEnvironment;
