import React from 'react';

import styled from '@emotion/styled';
import { GetPlantInfoQuery } from '@gardn/data';
import { 
  FlexBox,
  WaterDropletIcon,
  ThermometerIcon,
  HumidityIcon,
  SunIcon,
  VialIcon,
  BoltIcon
} from '@gardn/ui';

const StyledPlantInfo = styled.div`
  h3 {
    margin: 0;
  }
  h3, p {
    text-align: right;
    padding-right: 1rem;
  }
`;

export const PlantInfo = ({ plant }: GetPlantInfoQuery) => {
  if (!plant) {
    return (
      <FlexBox>
        404 / No Plant
      </FlexBox>
    )
  }

  // name, not species
  // Name
  //   -empty-
  
  // not have a name, not have a species
  // ID   <-- maybe empty instead of ID?
  //   -empty-
  
  // not have a name, but have a species name
  // Species name
  //   -empty-
  
  // name, AND species name
  // Name
  //   species

  const name = plant.name ? plant.name : plant.species?.name ? plant.species.name : plant.id;
  const subName = plant.name && plant.species?.name ? plant.species.name : ''

  let water, temperature, humidity, light, pH, electricalConductivity;
  if (plant.currentLifeCycle?.environment) {
    const env = plant.currentLifeCycle.environment;

    water = env.idealWaterAmount ? env.idealWaterAmount + env.idealWaterAmountUnit + ' / ' + env.idealWaterAmountPerTimePeriod + env.idealWaterAmountPerTimePeriodUnit : ''
    
    temperature = env.idealTemperatureMin ? env.idealTemperatureMin + ' ' + env.idealTemperatureMinUnit : ''
    if (env.idealTemperatureMin && env.idealTemperatueMax) {
      temperature += ' - '
    }
    if (env.idealTemperatueMax) {
      temperature += env.idealTemperatueMax + ' ' + env.idealTemperatureMaxUnit
    }

    humidity = env.idealHumidityMin ? env.idealHumidityMin + ' ' + env.idealHumidityMinUnit : ''
    if (env.idealHumidityMin && env.idealHumidityMax) {
      humidity += ' - '
    }
    if (env.idealHumidityMax) {
      humidity += env.idealHumidityMax + ' ' + env.idealHumidityMaxUnit
    }

    light = env.lightOnTime ? env.lightOnTime + ' ' + env.lightOnTimeUnit + ' / ' + env.lightOnTimePerTimePeriod + ' ' + env.lightOnTimePerTimePeriodUnit : ''

    pH = env.desiredPH ? env.desiredPH : env.phMinimum ? env.phMinimum : ''
    if (env.phMinimum && env.phMaximum) {
      pH += ' - '
    }
    if (env.phMaximum) {
      pH += env.phMaximum
    }

    electricalConductivity = env.desiredElectricalConductivity ? env.desiredElectricalConductivity + env.desiredElectricalConductivityUnit : env.electricalConductivityMin ? env.electricalConductivityMin + env.electricalConductivityMinUnit : ''
    if (env.electricalConductivityMin && env.electricalConductivityMax) {
      electricalConductivity += ' - '
    }
    if (env.electricalConductivityMax) {
      electricalConductivity += env.electricalConductivityMax + env.electricalConductivityMaxUnit
    }

  }

  return (
    <StyledPlantInfo>
      <h3>{ name }</h3>
      <h6>{ subName }</h6>
      
      <FlexBox flexDirection={'column'}>
        <FlexBox>
          <WaterDropletIcon />
          <div>{ water }</div>
        </FlexBox>
        <FlexBox>
          <ThermometerIcon />
          <div>{ temperature }</div>
        </FlexBox>
        <FlexBox>
          <HumidityIcon />
          <div>{ humidity }</div>
        </FlexBox>
        <FlexBox>
          <SunIcon />
          <div>{ light }</div>
        </FlexBox>
        <FlexBox>
          <VialIcon />
          <div>{ pH }</div>
        </FlexBox>
        <FlexBox>
          <BoltIcon />
          <div>{ electricalConductivity }</div>
        </FlexBox>
      </FlexBox>
       
      

      { /* Future timeline of events filter by life cycle changes with most recent event at top and first event at bottom (vertical scroll as needed) */ }
      { /* todo depending on plant current life cycle -> show the info of that life cycle's environment */ }
    </StyledPlantInfo>
  );
};

export default PlantInfo;
