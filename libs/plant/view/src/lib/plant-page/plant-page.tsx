import React from 'react';
import { useParams } from "react-router-dom";

import styled from '@emotion/styled';

import { useGetPlantQuery } from '@gardn/data';

/* eslint-disable-next-line */
interface PlantPageParams {
  id: string
}

const StyledPlantPage = styled.div`
  background-color: green;
`;

export const PlantPage = () => {
  const { id } = useParams<PlantPageParams>()

  const { data, loading, error } = useGetPlantQuery({
    variables: {
      id: parseInt(id)
    }
  });

  return (
    <StyledPlantPage>
      {
        loading ? <div>Loading</div> : 
        error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> : 
          <h1>{ data.plant.name }</h1>
      }
      
      {
        // Todo: couple smart components
        //      1) plant info
        //
        //    Future:
        //        Events Feed, Schedule, Container belonging too (if one), plant group belonging too (if one)
      }
    </StyledPlantPage>
  );
};

export default PlantPage;
