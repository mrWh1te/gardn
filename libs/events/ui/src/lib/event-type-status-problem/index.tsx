import { EventType } from '@gardn/data';
import React, { Fragment } from 'react';

import styled from '@emotion/styled';

export type EventStatusProblem = 'high' | 'low'

/* eslint-disable-next-line */
interface EventTypeStatusProblemProps {
  eventType: EventType
  statusProblem: EventStatusProblem
}

const StyledEventTypeStatusProblem = styled.div`
  .suggestions {
    margin: .5rem 0;
  }
`;

export const EventTypeStatusProblem = ({ eventType, statusProblem }: EventTypeStatusProblemProps) => {
  let warningEnvironmentFactor, warningEnvironmentFactorAdverb
  const suggestedActions = []

  switch (eventType) {
    case 'EC_READING':
      warningEnvironmentFactor = 'electrical conductivity'
      
      break;
    case 'TEMPERATURE_READING':
      warningEnvironmentFactor = 'temperature'
      break;
    case 'HUMIDITY_READING':
      warningEnvironmentFactor = 'humidity'
      switch (statusProblem) {
        case 'high':
          suggestedActions.push('Decrease humidity with a Dehumidifier')
          break;
        case 'low':
          suggestedActions.push('Increase humidity with a Humidifier')
          break;
      }
      break;
    case 'WATER':
      warningEnvironmentFactor = 'watering'
      break;
    case 'PH_READING':
      warningEnvironmentFactor = 'pH'
      switch (statusProblem) {
        case 'high':
          suggestedActions.push('Add compost, manure or organic soil amendments like alfalfa meal to increase the nitrogen level of the soil, which will gradually decrease pH')
          suggestedActions.push('Sulfur with warm temperatures stimulates bacteria to convert it into sulfuric acid will decrease pH gradually over time')
          suggestedActions.push('Try adding a 50-50 mix of leftover cold coffee and water to quickly lower pH')
          suggestedActions.push('Try adding a 90-10 mix of water and vinegar to lower pH more than coffee mix to more quickly lower pH')
          break;
        case 'low':
          suggestedActions.push('Add alkaline material, known as base, to your soil such as crushed limestone')
          suggestedActions.push('Try adding baking soda into the soil and around the plant')
          suggestedActions.push('Try sprinkling about 1/2″ of wood ash over the soil too then mix it into the top 6 to 8 inches')
          suggestedActions.push('Try mixing in crushed egg shells into the soil')
          break;
      }
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
    <StyledEventTypeStatusProblem>
      <p>{ warning }</p>
      {suggestedActions.length > 0 && 
        <Fragment>
          <p className="suggestions">Suggestion{suggestedActions.length > 1 && 's'}:</p>
          <ul>
            {
              suggestedActions.map(suggestedAction =>
                <li>{ suggestedAction }</li>
              )
            }
          </ul>
        </Fragment>
      }
    </StyledEventTypeStatusProblem>
  )
}