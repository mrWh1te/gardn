import React from 'react';

import styled from '@emotion/styled';
import { EventType, getIdealEnvironmentValueByEventType, GetPlantCurrentEnvironmentQuery } from '@gardn/data';
import { 
  FlexBox,
  WaterDropletIcon,
  ThermometerIcon,
  HumidityIcon,
  SunIcon,
  VialIcon,
  BoltIcon,
  logoDarkGreen
} from '@gardn/ui';
import { getCurrentPlantEnvironment } from '@gardn/plant/helpers';

const StyledPlantInfo = styled.div`
  p {
    font-size: .9rem;
    text-align: right;
  }
  .current-lifecycle-environment {
    font-size: .8rem;
    width: auto;
    height: auto;
    margin-top: .75rem;
  }
`;

const InfoText = styled.div`
  font-size: .8rem;
  white-space: nowrap;
  flex-grow: 1;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 1rem;
  text-align: center;
`

export const PlantCurrentIdealEnvironment = ({plant}: GetPlantCurrentEnvironmentQuery) => {
  const environment = getCurrentPlantEnvironment(plant)

  if (!environment) {
    // there are no plant stage change events for which an ideal environment would have been set, therefore
    return null
  }

  let water, temperature, humidity, light, pH, electricalConductivity;

  water = getIdealEnvironmentValueByEventType(environment, EventType.Water)
  temperature = getIdealEnvironmentValueByEventType(environment, EventType.TemperatureReading)
  humidity = getIdealEnvironmentValueByEventType(environment, EventType.HumidityReading)
  light = getIdealEnvironmentValueByEventType(environment, EventType.LightChange)
  pH = getIdealEnvironmentValueByEventType(environment, EventType.PhReading)
  electricalConductivity = getIdealEnvironmentValueByEventType(environment, EventType.EcReading)

  return (
    <StyledPlantInfo>
      <FlexBox justifyContent={'flex-end'}>
        <article style={{flexGrow: .1}}>
          <FlexBox flexDirection={'column'} className="current-lifecycle-environment">
            <FlexBox justifyContent={'space-between'} style={{height: '1.9rem'}}>
              <InfoText>{ water }</InfoText>
              <WaterDropletIcon color={logoDarkGreen} width={'.95rem'} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{height: '1.9rem'}}>
              <InfoText>{ temperature }</InfoText>
              <IconContainer>
                <ThermometerIcon color={logoDarkGreen} width={'.8rem'} />
              </IconContainer>
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{height: '1.9rem'}}>
              <InfoText>{ humidity }</InfoText>
              <HumidityIcon color={logoDarkGreen} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{height: '1.9rem'}}>
              <InfoText>{ light }</InfoText>
              <SunIcon primaryColor={logoDarkGreen} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{height: '1.9rem'}}>
              <InfoText>{ pH }</InfoText>
              <VialIcon primaryColor={logoDarkGreen} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{height: '1.9rem'}}>
              <InfoText>{ electricalConductivity }</InfoText>
              <IconContainer>
                <BoltIcon color={logoDarkGreen} width={'.8rem'} />
              </IconContainer>
            </FlexBox>
          </FlexBox>
        </article>
      </FlexBox>
    </StyledPlantInfo>
  );
};

export default PlantCurrentIdealEnvironment;
