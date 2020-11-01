import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantEventsLazyQuery, GetPlantEventsQuery } from '@gardn/data';
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

  // sort in reverse order (newest first -> to oldest last)
  let events: GetPlantEventsQuery['plant']['events'] = []
  if (data?.plant?.events.length > 0) {
    events = [...data.plant.events]
    events.sort((a,b) => b.data.eventTime - a.data.eventTime)
  }

  return <PlantEventsTimelineUi events={events} />
};

export default PlantEventsTimeline;
