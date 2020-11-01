import React, { useEffect } from 'react';

import { useGetPlantsLazyQuery } from '@gardn/data';

import { PlantsList as PlantsListUi } from '@gardn/plants/ui';

export const PlantsList = () => {
  const [getPlants, { data, loading, error }] = useGetPlantsLazyQuery();

  useEffect(() => { getPlants() }, [getPlants])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }
  
  return <PlantsListUi plants={data.plants} />;
};

export default PlantsList;
