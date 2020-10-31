import React from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantLifeCycleEventsQuery, GetPlantLifeCycleEventsQuery } from '@gardn/data';
import { PlantLifeCyclesTimeline as PlantLifeCyclesTimelineUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantLifeCyclesTimeline = () => {
  const { id } = useParams<{id: string}>()

  const { data, loading, error } = useGetPlantLifeCycleEventsQuery({
    variables: {
      plantId: parseInt(id)
    }
  });

  // sort in reverse order (newest first -> to oldest last)
  let events: GetPlantLifeCycleEventsQuery['events'] = []
  if (data?.events) {
    events = [...data.events]
    events.sort((a,b) => b.data.eventTime - a.data.eventTime)
  }

  return (
    loading ? <div>Loading</div> : 
    error ? <div>Error :( { error.graphQLErrors[0]?.message } </div> :
    <PlantLifeCyclesTimelineUi events={events} /> 
  )
};

export default PlantLifeCyclesTimeline;
