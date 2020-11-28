import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { 
  EventType,
  GetPlantRecentEventsAndCurrentIdealEnvironmentQuery,
  eventsHasEventWithType,
  eventsSelectOneByType,
  getTemperatureReading,
  getLightOnReading,
  measurementUnitToAbbreviation as abbreviate,
  doesWaterNeedAttention,
  doesECNeedAttention,
  doesHumidityNeedAttention,
  doesPHNeedAttention,
  doesTemperatureNeedAttention,
  doesLightNeedAttention
} from '@gardn/data';
import { 
  BoltIcon,
  HumidityIcon,
  ThermometerIcon,
  VialIcon,
  WaterDropletIcon,
  AttentionIcon,
  white, 
  black,
  logoDarkGreen
} from '@gardn/ui';
import { LightChangeIcon } from '@gardn/events/ui';

import { getCurrentPlantEnvironment } from '@gardn/plant/helpers';

const StyledPlantRecentEventsIcons = styled.div`
  ol {
    list-style: none;
    a {
      color: ${black};
    }
    li {
      position: relative;
      span {
        font-family: 'Montserrat', sans-serif;
      }
    }
  }
`;

const StyledAttentionIcon = styled.div`
  position: absolute;
  display: flex;
  right: -7px;
  top: -5px;
`;

const StyledWaterDropletIcon = styled.div`
  position: relative;
  top: 3px;
  margin-left: 4px;
  margin-right: 1px;
`;

export const PlantRecentEventsIcons = ({ plant, events, lightChangeEvents, waterEvents }: GetPlantRecentEventsAndCurrentIdealEnvironmentQuery) => {
  if (events.length === 0 && lightChangeEvents.length === 0 && waterEvents.length === 0) {
    return null
  }

  const currentEnvironment = getCurrentPlantEnvironment(plant);

  const attentionIcon = (
    <StyledAttentionIcon>
      <AttentionIcon width={'0.75rem'} primaryColor={white} secondaryColor={logoDarkGreen} secondaryColorOpacity={1} />
    </StyledAttentionIcon>
  )

  const generateEventLabelForType = (eventType: EventType): string => {
    const event = eventsSelectOneByType(events, eventType)
  
    switch(event.data.__typename) {
      case 'ECEventData':
        return event.data.electricalConductivity + abbreviate(event.data.electricalConductivityUnit)
      case 'PHEventData':
        return event.data.pH + 'pH'
      case 'HumidityEventData':
        return event.data.humidity + abbreviate(event.data.humidityUnit)
      case 'TemperatureEventData':
        return event.data.temperature + abbreviate(event.data.temperatureUnit)
    }
  
    throw new Error('[generateEventLabelForType] unknown event.data.__typename')
  }

  const eventTypeNeedsAttention = (eventType: EventType): boolean => {
    if (!currentEnvironment) {
      return false // no data to compare against as to determine if event type needs attention
    }

    if (eventType === EventType.LightChange) {
      return doesLightNeedAttention(lightChangeEvents, currentEnvironment);
    }
    if (eventType === EventType.Water) {
      return doesWaterNeedAttention(waterEvents, currentEnvironment);
    }

    const { data } = eventsSelectOneByType(events, eventType)
  
    switch (data?.__typename) {
      case 'ECEventData':
        return doesECNeedAttention(data, currentEnvironment);
      case 'HumidityEventData':
        return doesHumidityNeedAttention(data, currentEnvironment);
      case 'PHEventData':
        return doesPHNeedAttention(data, currentEnvironment);
      case 'TemperatureEventData':
        return doesTemperatureNeedAttention(data, currentEnvironment);
    }
  
    return false
  }

  return (
    <StyledPlantRecentEventsIcons>
      <ol>
        { eventsHasEventWithType(events, EventType.EcReading) && 
          <Link to={`/plant/${plant.id}/event-type/${EventType.EcReading}`}>
            <li>
              <span>{ generateEventLabelForType(EventType.EcReading) }</span> <BoltIcon width={'0.563rem'} />
              { eventTypeNeedsAttention(EventType.EcReading) && attentionIcon }
            </li>
          </Link>
        }
        { eventsHasEventWithType(events, EventType.PhReading) &&
          <Link to={`/plant/${plant.id}/event-type/${EventType.PhReading}`}>
            <li>
              <span>{ generateEventLabelForType(EventType.PhReading) }</span> <VialIcon width={'.84rem'} />
              { eventTypeNeedsAttention(EventType.PhReading) && attentionIcon }
            </li>
          </Link>
        }
        { eventsHasEventWithType(events, EventType.HumidityReading) &&
          <Link to={`/plant/${plant.id}/event-type/${EventType.HumidityReading}`}>
            <li>
              <span>{ generateEventLabelForType(EventType.HumidityReading) }</span> <HumidityIcon width={'.73rem'} />
              { eventTypeNeedsAttention(EventType.HumidityReading) && attentionIcon }
            </li>
          </Link>
        }
        { eventsHasEventWithType(events, EventType.TemperatureReading) &&
          <Link to={`/plant/${plant.id}/event-type/${EventType.TemperatureReading}`}>
            <li>
              <span>{ generateEventLabelForType(EventType.TemperatureReading) }</span> <ThermometerIcon temperature={getTemperatureReading(events)} width={'0.5322rem'} />
              { eventTypeNeedsAttention(EventType.TemperatureReading) && attentionIcon }
            </li>
          </Link>
        }
        { waterEvents && waterEvents.length > 0 &&
          <Link to={`/plant/${plant.id}/event-type/${EventType.Water}`}>
            <li>
              <StyledWaterDropletIcon><WaterDropletIcon width={'.7rem'} /></StyledWaterDropletIcon>
              { eventTypeNeedsAttention(EventType.Water) && attentionIcon }
            </li>
          </Link>
        }
        { lightChangeEvents && lightChangeEvents.length > 0 &&
          <Link to={`/plant/${plant.id}/event-type/${EventType.LightChange}`}>
            <li>
              <LightChangeIcon lightOn={getLightOnReading(lightChangeEvents)} />
              { eventTypeNeedsAttention(EventType.LightChange) && attentionIcon }
            </li>
          </Link>
        }
      </ol>
    </StyledPlantRecentEventsIcons>
  );
};

export default PlantRecentEventsIcons;
