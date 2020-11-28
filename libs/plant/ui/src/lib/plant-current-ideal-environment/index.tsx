import React from 'react';

import styled from '@emotion/styled';
import { GetPlantCurrentEnvironmentQuery, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';
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

  water = environment.idealWaterAmount ? environment.idealWaterAmount + abbreviate(environment.idealWaterAmountUnit) + ' / ' + environment.idealWaterAmountPerTimePeriod + abbreviate(environment.idealWaterAmountPerTimePeriodUnit) : ''
  
  temperature = environment.idealTemperatureMin ? environment.idealTemperatureMin + ' ' + abbreviate(environment.idealTemperatureMinUnit) : ''
  if (environment.idealTemperatureMin && environment.idealTemperatueMax) {
    temperature += ' - '
  }
  if (environment.idealTemperatueMax) {
    temperature += environment.idealTemperatueMax + ' ' + abbreviate(environment.idealTemperatureMaxUnit)
  }

  humidity = environment.idealHumidityMin ? environment.idealHumidityMin + ' ' + abbreviate(environment.idealHumidityMinUnit) : ''
  if (environment.idealHumidityMin && environment.idealHumidityMax) {
    humidity += ' - '
  }
  if (environment.idealHumidityMax) {
    humidity += environment.idealHumidityMax + ' ' + abbreviate(environment.idealHumidityMaxUnit)
  }

  light = typeof environment.lightOnTime !== undefined ? environment.lightOnTime + ' ' + abbreviate(environment.lightOnTimeUnit) + ' / ' + environment.lightOnTimePerTimePeriod + ' ' + abbreviate(environment.lightOnTimePerTimePeriodUnit) : ''

  pH = environment.desiredPH ? environment.desiredPH : environment.phMinimum ? environment.phMinimum : ''
  if (environment.phMinimum && environment.phMaximum) {
    pH += ' - '
  }
  if (environment.phMaximum) {
    pH += environment.phMaximum
  }
  if (pH !== '') {
    pH += ' pH';
  }

  electricalConductivity = environment.desiredElectricalConductivity ? environment.desiredElectricalConductivity + abbreviate(environment.desiredElectricalConductivityUnit) : environment.electricalConductivityMin ? environment.electricalConductivityMin + abbreviate(environment.electricalConductivityMinUnit) : ''
  if (environment.electricalConductivityMin && environment.electricalConductivityMax) {
    electricalConductivity += ' - '
  }
  if (environment.electricalConductivityMax) {
    electricalConductivity += environment.electricalConductivityMax + abbreviate(environment.electricalConductivityMaxUnit)
  }

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
