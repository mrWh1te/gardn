import { DeepPartial } from '@gardn/helpers';
import { Event, EventType } from '../../../generated';


export const filterEventsByType = (eventType: EventType) => (event: DeepPartial<Event>): boolean => 
  event.type === eventType