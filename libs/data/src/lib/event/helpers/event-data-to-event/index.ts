import { Event, EventData, EventTarget, EventType } from '../../../generated'

export const eventDataToEvent = (eventData: EventData, type: EventType, targets?: EventTarget[]): Event => {
  const id = eventData.id

  delete eventData.id
  delete eventData.dateCreated
  const data = eventData

  return {
    id,
    data,
    type,
    targets
  }
}