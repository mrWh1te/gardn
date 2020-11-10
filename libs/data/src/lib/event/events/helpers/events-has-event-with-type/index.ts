import { LooseEvent } from '../../../types'
import { EventType } from "./../../../../generated"

export const eventsHasEventWithType = (events: Partial<LooseEvent>[], eventType: EventType): boolean => 
  events.findIndex(event => event.type === eventType) > -1