import { LooseEvent } from '../../../types'
import { EventType } from "./../../../../generated"

export const eventsSelectOneByType = (events: Partial<LooseEvent>[], eventType: EventType): Partial<LooseEvent> => 
  events.find(event => event.type === eventType)