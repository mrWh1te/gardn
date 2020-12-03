import React from 'react';
import { useParams } from 'react-router-dom';

import { EventTypeFriendlyUrl, eventTypeFriendlyUrlToEnum } from '@gardn/data';
import { PlantEventTypeLabel as PlantEventTypeLabelUi } from '@gardn/plant/ui'

export const PlantEventTypeLabel = () => {
  const { eventType } = useParams<{eventType: EventTypeFriendlyUrl}>()

  return <PlantEventTypeLabelUi eventType={eventTypeFriendlyUrlToEnum(eventType)} />
}

export default PlantEventTypeLabel