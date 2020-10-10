import React from 'react';

import styled from '@emotion/styled';
import { GetPlantInfoQuery, measurementUnitToAbbreviation as abbreviate } from '@gardn/data';
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

const StyledPlantInfo = styled.div`
  h6 {
    margin-bottom: 1rem;
  }
  h6, p {
    text-align: right;
  }
  p {
    font-size: .75rem;
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

export const PlantInfo = ({ plant }: GetPlantInfoQuery) => {
  if (!plant) {
    return (
      <FlexBox>
        404 / No Plant
      </FlexBox>
    )
  }

  let water, temperature, humidity, light, pH, electricalConductivity;
  if (plant.currentLifeCycle?.environment) {
    const env = plant.currentLifeCycle.environment;

    water = env.idealWaterAmount ? env.idealWaterAmount + abbreviate(env.idealWaterAmountUnit) + ' / ' + env.idealWaterAmountPerTimePeriod + abbreviate(env.idealWaterAmountPerTimePeriodUnit) : ''
    
    temperature = env.idealTemperatureMin ? env.idealTemperatureMin + ' ' + abbreviate(env.idealTemperatureMinUnit) : ''
    if (env.idealTemperatureMin && env.idealTemperatueMax) {
      temperature += ' - '
    }
    if (env.idealTemperatueMax) {
      temperature += env.idealTemperatueMax + ' ' + abbreviate(env.idealTemperatureMaxUnit)
    }

    humidity = env.idealHumidityMin ? env.idealHumidityMin + ' ' + abbreviate(env.idealHumidityMinUnit) : ''
    if (env.idealHumidityMin && env.idealHumidityMax) {
      humidity += ' - '
    }
    if (env.idealHumidityMax) {
      humidity += env.idealHumidityMax + ' ' + abbreviate(env.idealHumidityMaxUnit)
    }

    light = typeof env.lightOnTime !== undefined ? env.lightOnTime + ' ' + abbreviate(env.lightOnTimeUnit) + ' / ' + env.lightOnTimePerTimePeriod + ' ' + abbreviate(env.lightOnTimePerTimePeriodUnit) : ''

    pH = env.desiredPH ? env.desiredPH : env.phMinimum ? env.phMinimum : ''
    if (env.phMinimum && env.phMaximum) {
      pH += ' - '
    }
    if (env.phMaximum) {
      pH += env.phMaximum
    }
    if (pH !== '') {
      pH += ' pH';
    }

    electricalConductivity = env.desiredElectricalConductivity ? env.desiredElectricalConductivity + abbreviate(env.desiredElectricalConductivityUnit) : env.electricalConductivityMin ? env.electricalConductivityMin + abbreviate(env.electricalConductivityMinUnit) : ''
    if (env.electricalConductivityMin && env.electricalConductivityMax) {
      electricalConductivity += ' - '
    }
    if (env.electricalConductivityMax) {
      electricalConductivity += env.electricalConductivityMax + abbreviate(env.electricalConductivityMaxUnit)
    }

  }

  return (
    <StyledPlantInfo>
      { plant.species?.name ? <h6>{ plant.species.name }</h6> : '' }
      <p>{ plant.currentLifeCycle?.name }</p>
      
      <FlexBox justifyContent={'space-between'}>
        <article>
          TBI Plant Events: Life Cycle
        </article>
        <article style={{flexGrow: .1}}>
          <FlexBox flexDirection={'column'} className="current-lifecycle-environment">
            <FlexBox justifyContent={'space-between'} style={{marginBottom: '.25rem'}}>
              <InfoText>{ water }</InfoText>
              <WaterDropletIcon color={logoDarkGreen} width={'.95rem'} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{marginBottom: '.25rem'}}>
              <InfoText>{ temperature }</InfoText>
              <IconContainer>
                <ThermometerIcon color={logoDarkGreen} width={'.8rem'} />
              </IconContainer>
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{marginBottom: '.25rem'}}>
              <InfoText>{ humidity }</InfoText>
              <HumidityIcon color={logoDarkGreen} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{marginBottom: '.25rem'}}>
              <InfoText>{ light }</InfoText>
              <SunIcon primaryColor={logoDarkGreen} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{marginBottom: '.25rem'}}>
              <InfoText>{ pH }</InfoText>
              <VialIcon primaryColor={logoDarkGreen} />
            </FlexBox>
            <FlexBox justifyContent={'space-between'} style={{marginBottom: '.25rem'}}>
              <InfoText>{ electricalConductivity }</InfoText>
              <IconContainer>
                <BoltIcon color={logoDarkGreen} width={'.8rem'} />
              </IconContainer>
            </FlexBox>
          </FlexBox>
        </article>
      </FlexBox>
      
       
      { /* Future timeline of events filter by life cycle changes with most recent event at top and first event at bottom (vertical scroll as needed) */ }
      { /* todo depending on plant current life cycle -> show the info of that life cycle's environment */ }
    </StyledPlantInfo>
  );
};

export default PlantInfo;
