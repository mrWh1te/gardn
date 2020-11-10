import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetPlantStageEventsLazyQuery } from '@gardn/data';
import { PlantStagesTimeline as PlantStagesTimelineUi } from '@gardn/plant/ui';

/**
 * @param props 
 */
export const PlantStagesTimeline = () => {
  const { id } = useParams<{id: string}>()

  const [getPlantStageEvents, { data, loading, error }] = useGetPlantStageEventsLazyQuery({
    variables: {
      plantId: parseInt(id)
    }
  });

  useEffect(() => { getPlantStageEvents() }, [getPlantStageEvents])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantStagesTimelineUi events={data.events} />
};

export default PlantStagesTimeline;
