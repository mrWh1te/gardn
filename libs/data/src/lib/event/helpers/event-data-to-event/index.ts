import { Event, EventData, EventTarget, EventType } from '../../../generated'

/**
 * This requires `__typename` to be present in the event data !
 * @param eventData 
 * @param targets 
 */
export const eventDataToEvent = (eventData: EventData, type: EventType, targets?: EventTarget[]): Event => {
  const data = {...eventData}
  
  const { id } = data

  delete data.dateCreated

  return {
    id,
    data,
    type,
    targets
  }
}