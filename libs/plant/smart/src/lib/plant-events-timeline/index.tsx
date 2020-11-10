import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantEventsLazyQuery } from '@gardn/data';
import { PlantEventsTimeline as PlantEventsTimelineUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantEventsTimeline = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantEvents, { data, loading, error }] = useGetPlantEventsLazyQuery({
    variables: {
      id: parseInt(id)
    }
  });

  useEffect(() => { getPlantEvents() }, [getPlantEvents])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantEventsTimelineUi events={data.events} />
};

export default PlantEventsTimeline;
