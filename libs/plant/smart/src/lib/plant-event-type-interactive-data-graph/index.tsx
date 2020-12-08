import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { 
  EventTypeFriendlyUrl,
  eventTypeFriendlyUrlToEnum,
  getEventsLowHighRecentValuesByType,
  useGetPlantEventsLazyQuery
} from '@gardn/data';
import { DataPoint, Grid } from '@gardn/ui';

export const PlantEventTypeInteractiveDataGraph = () => {
  const { eventType, id } = useParams<{eventType: EventTypeFriendlyUrl, id: string}>()
  const eventTypeEnum = eventTypeFriendlyUrlToEnum(eventType)

  // todo default brushed area should be last 24 hours
  // user will be able to brush the child graph to expand upon the data displayed in the main graph by up to 28 days (4weeks)
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
  const { low, high, recent } = getEventsLowHighRecentValuesByType(events, eventTypeEnum)

  // todo add support for special edge-case of "light change" event type
  // instead of "low" it's total "dark" hours
  // instead of "high" it's total "light" hours
  // "recent" is not a numerical value but "Light on" vs "Light off"
  return (
    <Fragment>
      <Grid columns={3} style={{textAlign: 'center', alignItems: 'flex-end'}}>
        <DataPoint label={'low'} value={low} />
        <DataPoint label={'recent'} value={recent} large={true} />
        <DataPoint label={'high'} value={high} />
      </Grid>
      <Grid>
        Graph TBI  
      </Grid>
    </Fragment>
  )
}