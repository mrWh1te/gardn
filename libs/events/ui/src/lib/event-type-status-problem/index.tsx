import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { EventType, EventStatusProblem } from '@gardn/data';

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
      switch(statusProblem) {
        case 'low':
          suggestedActions.push('There is a deficiency of micronutrients such as calcium and magnesium, which you will to determine and add')
          break;
        case 'high':
          suggestedActions.push('Add osmosis filters to filter the water before feeding the plants')
          suggestedActions.push('Measure the EC of the feeding water to see if adding distilled water may lower EC')
          suggestedActions.push('Distilled water has an EC of 0')
          break;
      }
      break;
    case 'TEMPERATURE_READING':
      warningEnvironmentFactor = 'temperature'
      switch(statusProblem) {
        case 'low':
          suggestedActions.push('Add a small room heater')
          suggestedActions.push('Add insulation to the space such as blankets')
          suggestedActions.push('Add reflective silver to your space such as Mylar Film')
          break;
        case 'high':
          suggestedActions.push('Add a fan to increase air circulation')
          suggestedActions.push('Add a vent near the heat sources such as the lights to remove heat from the space')
          break;
      }
      break;
    case 'HUMIDITY_READING':
      warningEnvironmentFactor = 'humidity'
      switch (statusProblem) {
        case 'high':
          suggestedActions.push('Decrease humidity with a Dehumidifier')
          break;
        case 'low':
          suggestedActions.push('Increase humidity with a Humidifier')
          suggestedActions.push('Note its not uncommon for a rise in humidity to cause a slight rise in temperature, depends on your air circulation')
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
          suggestedActions.push('Add alkaline material to your soil such as crushed limestone')
          suggestedActions.push('Try adding baking soda into the soil and around the plant')
          suggestedActions.push('Try sprinkling about 1/2″ of wood ash over the soil then mix it in between 6 to 8 inches deep')
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