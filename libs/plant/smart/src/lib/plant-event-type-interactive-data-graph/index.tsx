import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { 
  EventTypeFriendlyUrl,
  eventTypeFriendlyUrlToEnum,
  getEventsLowHighRecentValuesByType,
  useGetPlantEventsLazyQuery,
  getLightEventsDarkLightHoursAndRecentStatus
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

  // special case for "light change" events
  if (eventTypeEnum === 'LIGHT_CHANGE') {
    const hoursAgo24 = new Date().getTime() - (24 * 60 * 60 * 1000)
    const { dark, light, recent } = getLightEventsDarkLightHoursAndRecentStatus(events, hoursAgo24) // todo use brushed area for setting initial timestamp (2nd param)

    return (
      <Fragment>
        <Grid columns={3} style={{textAlign: 'center', alignItems: 'flex-end'}}>
          <DataPoint label={'light'} value={light} />
          <DataPoint label={'recent'} value={recent} large={true} />
          <DataPoint label={'dark'} value={dark} />
        </Grid>
        <Grid>
          Graph TBI  
        </Grid>
      </Fragment>
    )
  }
  
  // regular case for all the other event types (except plant stage change which is not represented here)
  const { low, high, recent } = getEventsLowHighRecentValuesByType(events, eventTypeEnum)
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