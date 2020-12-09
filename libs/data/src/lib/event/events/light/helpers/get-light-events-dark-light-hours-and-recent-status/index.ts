import { DeepPartial } from '@gardn/helpers';

import { getLightEventsTotalLightOnInMilliSeconds } from '../get-light-events-total-light-on-in-milliseconds';
import { Event } from './../../../../../generated';

interface DarkLightRecentValues {
  dark: string,
  light: string,
  recent: JSX.Element|string
}

/**
 * @description   Events should be pre-sorted by eventTime descending before using this function
 * @param events 
 */
export const getLightEventsDarkLightHoursAndRecentStatus = (events: DeepPartial<Event>[], calculateLightOnSinceUnixTimestamp: number): DarkLightRecentValues => {
  let dark, light, recent;

  const totalLightOnInMilliSeconds = getLightEventsTotalLightOnInMilliSeconds(events, calculateLightOnSinceUnixTimestamp);

  const now = new Date().getTime()
  light = Math.round(totalLightOnInMilliSeconds / 1000 / 60 / 60);
  dark = Math.round((now - calculateLightOnSinceUnixTimestamp - totalLightOnInMilliSeconds) / 1000 / 60 / 60);
  recent = events[0].data['lightOn'] === true ? 'On' : 'Off'

  return { dark, light, recent }
}