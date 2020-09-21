import React from 'react';
import { Link } from 'react-router-dom';

import { Plant } from '@gardn/data';

import { PlantCard } from '@gardn/plant/ui';

import styled from '@emotion/styled';


/* eslint-disable-next-line */
export interface PlantsListProps {
  plants: Plant[]
}

const StyledPlantsList = styled.div`
  margin: 1rem;
  padding: 1rem 0;
  .plant-card {
    margin-bottom: 1rem;
  }

  // todo move the following into a global stylesheet
  a {
    text-decoration: none;
  }
`;

export const PlantsList = (props: PlantsListProps) => {
  return (
    <StyledPlantsList>
      { 
        props.plants.map( plant => 
          <article className="plant-card" key={plant.id}>  
            <Link to={`/plant/${plant.id}`}>
              <PlantCard plant={plant} /> 
            </Link>
          </article>
        ) 
      }
    </StyledPlantsList>
  );
};

export default PlantsList;
