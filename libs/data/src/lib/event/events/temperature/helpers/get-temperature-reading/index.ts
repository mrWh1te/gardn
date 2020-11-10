import { EventType } from './../../../../../generated'
import { eventsSelectOneByType } from '../../../helpers/events-select-one-by-type'
import { LooseEvent } from '../../../../types'

export const getTemperatureReading = (events: Partial<LooseEvent>[]): number => {
  const event = eventsSelectOneByType(events, EventType.TemperatureReading)

  if (event.data.__typename === 'TemperatureEventData') {
    return event.data.temperature
  }

  throw new Error('getTemperatureReading() unmatched __typename')
}