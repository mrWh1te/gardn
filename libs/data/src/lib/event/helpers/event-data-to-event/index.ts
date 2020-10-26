import { Event, EventData, EventTarget, EventType } from '../../../generated'

export const eventDataToEvent = (eventData: EventData, type: EventType, targets?: EventTarget[]): Event => {
  const id = eventData.id
  const dateCreated = eventData.dateCreated

  delete eventData.id
  delete eventData.dateCreated
  const data = eventData

  return {
    id,
    dateCreated,
    data,
    type,
    targets
  }
}