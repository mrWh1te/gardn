import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { EventTypeFriendlyUrl, eventTypeFriendlyUrlToEnum, useGetPlantEventsLazyQuery } from '@gardn/data';
import { DataPoint, Grid } from '@gardn/ui';

export const PlantEventTypeInteractiveDataGraph = () => {
  const { eventType, id } = useParams<{eventType: EventTypeFriendlyUrl, id: string}>()
  const eventTypeEnum = eventTypeFriendlyUrlToEnum(eventType)

  const [brushedArea, setBrushedArea] = useState(undefined)

  const [getPlantRecentEventsByTypeWithIdealEnvironment, { data, loading, error }] = useGetPlantEventsLazyQuery();

  useEffect(() => { 
    const daysAgo28 = new Date().getTime() - (28 * 24 * 60 * 60 * 1000) // 4 weeks ago
  
    getPlantRecentEventsByTypeWithIdealEnvironment({
      variables: {
        id: parseInt(id),
        eventType: eventTypeEnum,
        eventTimeMinimum: daysAgo28
      }
    }) 
  }, [getPlantRecentEventsByTypeWithIdealEnvironment, id, eventType])

  if (error) {
    return <div>Error :( { error.graphQLErrors[0]?.message } </div>
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  const { events } = data

  console.log('events = ', events)

  return (
    <Fragment>
      <Grid columns={3} style={{textAlign: 'center', alignItems: 'flex-end'}}>
        <DataPoint label={'low'} value={'41.7%'} />
        <DataPoint label={'recent'} value={'68.5%'} large={true} />
        <DataPoint label={'high'} value={'82.1%'} />
      </Grid>
      <Grid>
        Graph TBI  
      </Grid>
    </Fragment>
  )
}