import React from 'react';

import { useGetPlantsQuery } from '@gardn/data';

import { PlantsList as PlantsListUi } from '@gardn/plants/ui';

export const PlantsList = () => {
  const { data, loading, error } = useGetPlantsQuery();

  if (loading) {
    return (
      <p>Loading</p>
    );
  } else if (error) {
    return (
      <p>Error :(</p>
    );
  } else {
    return <PlantsListUi plants={data.plants} />;
  }

};

export default PlantsList;
