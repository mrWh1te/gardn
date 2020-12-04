
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EventTypeFriendlyUrl, useGetPlantCurrentEnvironmentLazyQuery } from '@gardn/data';
import { DataPoint } from '@gardn/ui';

export const PlantEventTypeIdealDataPoint = () => {
  const { eventType, id: plantId } = useParams<{eventType: EventTypeFriendlyUrl, id: string}>()

  // ideal values of the environment in regards to this eventType for this Plant
  const [getCurrentIdealEnvironment, { data, loading, error }] = useGetPlantCurrentEnvironmentLazyQuery({
    variables: {
      id: parseInt(plantId)
    }
  });

  useEffect(() => { getCurrentIdealEnvironment() }, [getCurrentIdealEnvironment])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  let dataPointValue = ''

  const { currentSpeciesPlantStage, currentPlantStage } = data.plant

  if (typeof data.plant.currentSpeciesPlantStage === 'object' && data.plant.currentSpeciesPlantStage)

  return <DataPoint label={'ideal'} value={ dataPointValue } />
}