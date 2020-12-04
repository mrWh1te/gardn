
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EventTypeFriendlyUrl, eventTypeFriendlyUrlToEnum, getIdealEnvironmentValueByEventType, useGetPlantCurrentEnvironmentLazyQuery } from '@gardn/data';
import { DataPoint } from '@gardn/ui';

export const PlantEventTypeIdealDataPoint = () => {
  const { eventType: friendlyUrlEventType, id: plantId } = useParams<{eventType: EventTypeFriendlyUrl, id: string}>()

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

  const { currentSpeciesPlantStage, currentPlantStage } = data.plant
  const eventType = eventTypeFriendlyUrlToEnum(friendlyUrlEventType)

  let dataPointValue

  if (currentSpeciesPlantStage?.idealEnvironment && currentSpeciesPlantStage?.idealEnvironment !== null) {
    dataPointValue = getIdealEnvironmentValueByEventType(currentSpeciesPlantStage.idealEnvironment, eventType)
  } else if (currentPlantStage?.defaultEnvironment && currentPlantStage?.defaultEnvironment !== null) {
    dataPointValue = getIdealEnvironmentValueByEventType(currentSpeciesPlantStage.idealEnvironment, eventType)
  } else {
    dataPointValue = ''
  }
  
  return <DataPoint label={'ideal'} value={ dataPointValue } />
}