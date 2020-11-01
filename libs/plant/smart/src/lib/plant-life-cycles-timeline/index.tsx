import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantLifeCycleEventsLazyQuery, GetPlantLifeCycleEventsQuery } from '@gardn/data';
import { PlantLifeCyclesTimeline as PlantLifeCyclesTimelineUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantLifeCyclesTimeline = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantLifeCycleEvents, { data, loading, error }] = useGetPlantLifeCycleEventsLazyQuery({
    variables: {
      plantId: parseInt(id)
    }
  });

  useEffect(() => { getPlantLifeCycleEvents() }, [getPlantLifeCycleEvents])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  // sort in reverse order (newest first -> to oldest last)
  let events: GetPlantLifeCycleEventsQuery['events'] = []
  if (data?.events) {
    events = [...data.events]
    events.sort((a,b) => b.data.eventTime - a.data.eventTime)
  }

  return <PlantLifeCyclesTimelineUi events={events} />
};

export default PlantLifeCyclesTimeline;
