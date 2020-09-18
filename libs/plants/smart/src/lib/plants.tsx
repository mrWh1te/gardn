import React from 'react';

import { useGetPlantsQuery } from '@gardn/data';

/* eslint-disable-next-line */
export interface PlantsProps {}

export const Plants = (props: PlantsProps) => {
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
    return (
      <ul>
        { data.plants.map(plant => {
          return (
            <li>{ plant.name }</li>
          );
        }) }
      </ul>
    );
  }

};

export default Plants;
