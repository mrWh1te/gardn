import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetPlantSpeciesAndCurrentStageLazyQuery } from '@gardn/data';
import { PlantSpeciesStageLabel as PlantSpeciesStageLabelUi } from '@gardn/plant/ui';

export const PlantSpeciesStageLabel = () => {
  const { id: plantId } = useParams<{id: string}>()

  // ideal values of the environment in regards to this eventType for this Plant
  const [getPlantSpeciesNameAndCurrentStageName, { data, loading, error }] = useGetPlantSpeciesAndCurrentStageLazyQuery({
    variables: {
      plantId: parseInt(plantId)
    }
  });

  useEffect(() => { getPlantSpeciesNameAndCurrentStageName() }, [getPlantSpeciesNameAndCurrentStageName])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  return <PlantSpeciesStageLabelUi plant={data.plant}></PlantSpeciesStageLabelUi>
}