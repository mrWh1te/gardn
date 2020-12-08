import { LooseEnvironment } from './../../../../../environment/types'
import { sortEventsByEventTime } from '../../../../helpers/sort-events-by-event-time'
import { EventStatusProblem, LooseEvent } from '../../../../types'
import { SortDirection } from './../../../../../generated'
import { getLightEventsTotalLightOnInMilliSeconds } from '../get-light-events-total-light-on-in-milliseconds'

/**
 * @param lightChangeEvents
 * @param idealEnvironment 
 */
export const doesLightNeedAttention = (lightChangeEvents: Partial<LooseEvent>[], idealEnvironment: Partial<LooseEnvironment>): boolean|EventStatusProblem => {
  if (typeof idealEnvironment.lightOnTime !== 'number') {
    return false
  }

  const events = [...lightChangeEvents]

  // events.sort(sortEventsByEventTime(SortDirection.Ascending))

  // off -> on (cut off 24 hours ago for difference to add)
  const hoursAgo24 = new Date().getTime() - (24 * 60 * 60 * 1000)

  // todo future record eventTime within the minute, not seconds or milliseconds (floor it)

  // event (previousLightOn: false, lightOn: true, eventTime: 4am) 24 hours ago is 1am, therefore 3 hours of no light, now light on, therefore 0 hours of light in 24 hours period thus far
  // event (previousLightOn: true, lightOn: true, eventTime: 6am) from 1am (last eventTime) to this eventTime is 2hours, therefore 2 hours of light
  // event (previousLightOn: true, lightOn: false, eventTime: 9am) 9am - 6am = 3hours of light, therefore 5 hours of light
  // event (previousLightOn: false, lightOn: true, eventTime: 4pm) 4pm - 9am = 7hrs (no light), therefore 5 hours of light
  // event (previousLightOn: true, lightOn: false, eventTime: 11pm) 11pm - 4pm = 7hrs (light), therfore 12 hours of light
  // event (previousLightOn: false, lightOn: false, eventTime: 1am) 11pm - 1am = 2hrs (no light), therefore 12 hours of light
  const totalLightOnInMilliSeconds = getLightEventsTotalLightOnInMilliSeconds(events, hoursAgo24)
  const totalLightOnInHours = totalLightOnInMilliSeconds / 1000 / 60 / 60;

  // current limitation to be built into UI (limitation will be lack of edge-case support in code, not db)
  // limit TimeUnit to hours for both
  // x hours / 24 hours
  const marginOfError = .08 // 8%

  const lightOnTimeCushion = idealEnvironment.lightOnTime * marginOfError
  if (totalLightOnInHours < idealEnvironment.lightOnTime - lightOnTimeCushion) {
    return 'low'
  } else if (totalLightOnInHours > idealEnvironment.lightOnTime + lightOnTimeCushion) {
    return 'high'
  } else {
    return false; // sweet spot
  }  
}
