import { EventType } from '@gardn/data';
import React, { Fragment } from 'react';

export type EventStatusProblem = 'high' | 'low'

/* eslint-disable-next-line */
interface EventTypeStatusProblemProps {
  eventType: EventType
  statusProblem: EventStatusProblem
}

export const EventTypeStatusProblem = ({ eventType, statusProblem }: EventTypeStatusProblemProps) => {
  let warningEnvironmentFactor, warningEnvironmentFactorAdverb
  const suggestedActions = []

  // Increase humidity with a humidifier

  switch (eventType) {
    case 'EC_READING':
      warningEnvironmentFactor = 'electrical conductivity'
      switch (statusProblem) {
        case 'high':

          break;
        case 'low':

          break;
      }
      break;
    case 'TEMPERATURE_READING':
      warningEnvironmentFactor = 'temperature'
      break;
    case 'HUMIDITY_READING':
      warningEnvironmentFactor = 'humidity'
      break;
    case 'WATER':
      warningEnvironmentFactor = 'watering'
      break;
    case 'PH_READING':
      warningEnvironmentFactor = 'pH'
      break;
    case 'LIGHT_CHANGE':
      warningEnvironmentFactor = 'lighting'
      break;
  }

  switch (statusProblem) {
    case 'high':
      warningEnvironmentFactorAdverb = 'above'
      break;
    case 'low':
      warningEnvironmentFactorAdverb = 'below'
      break;
    default:
      warningEnvironmentFactorAdverb = 'not within'
  }

  const warning = `The recorded ${warningEnvironmentFactor} is ${warningEnvironmentFactorAdverb} recommended levels.`

  return (
    <Fragment>
      <p>{ warning }</p>
      {suggestedActions.length > 0 && 
        <Fragment>
          <p>Suggested action{suggestedActions.length > 1 && 's'}:</p>
          <ul>
            {
              suggestedActions.map(suggestedAction =>
                <li>{ suggestedAction }</li>
              )
            }
          </ul>
        </Fragment>
      }
    </Fragment>
  )
}