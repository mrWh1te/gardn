// Noramlized GQL Types
import { 
  Species,
  Environment,
  LightSource,
  WaterEventData,
  EventType,
  EventTargetType,
  TemperatureEventData,
  HumidityEventData,
  PhEventData
} from './generated';

// Database Models
import { DBPlant } from './plant/interfaces';
import { DBPhoto } from './photo/interfaces';
import { DBLifeCycle } from './life-cycle/interfaces';
import { DBSpeciesLifeCycles } from './species/interfaces';
import { DBEnvironmentsLightSources } from './environment/interfaces';
import { DBEventsTargets } from './event/events-targets/interface';

// Mocks & Seeds for in-memory DB
import {
  species1,
  species2,
  species3,
  species4,
  species5
} from './species/seed-data';

import { 
  mockPlant1,
  mockPlant2
} from './plant/mocks';

import {
  mockLargePhoto1,
  mockLargePhoto2,
  mockLargePhoto3,
  mockLargePhoto4,
  mockLargePhoto5,
  //
  mockLargePhoto6,
  mockLargePhoto7,
  mockLargePhoto8,
  mockLargePhoto9
} from './photo/mocks';

import {
  mockLightSourceLEDBlue,
  mockLightSourceLEDRed
} from './light-source/mocks';

import {
  mockEnvironmentSeed,
  mockEnvironmentSprout,
  mockEnvironmentVeg,
  mockEnvironmentEarlyFlower,
  mockEnvironmentLateFlower
} from './environment/mocks';

import {
  lifeCycleSeed,
  lifeCycleGermination,
  lifeCyclePlanting,
  lifeCycleSprouting,
  lifeCycleVeging,
  lifeCycleEarlyFlower,
  lifeCycleLateFlower,
  lifeCycleHarvest
} from './life-cycle/seed-data';

import { 
  mockDBWaterEventData1,
  mockDBWaterEventData2
} from './event/events/water/mocks';

// Helpers
import { createSpeciesLifeCycles } from './species/helpers/create-species-life-cycles';
import { createEnvironmentsLightSources } from './environment/helpers/create-environments-light-sources';
import { createDBEventsTargets } from './event/events-targets/helpers/create-db-events-targets';
import { DBLifeCycleEventData } from './event/events/life-cycle/interface';
import { createDBLifeCycleEventData } from './event/events/life-cycle/helpers/create-db-life-cycle-event-data';
import { mockDBTemperatureEventData1, mockDBTemperatureEventData2 } from './event/events/temperature/mocks';
import { mockDBHumidityEventData1, mockDBHumidityEventData2 } from './event/events/humidity/mocks';
import { mockDBpHEventData1, mockDBpHEventData2 } from './event/events/ph/mocks';

/**
 * In-Memory DB
 */
export interface Store {
  // main model data
  photos: DBPhoto[],
  plants: DBPlant[],
  species: Species[],
  lifeCycles: DBLifeCycle[],
  environments: Environment[],
  lightSources: LightSource[],
  // event data
  waterEventsData: WaterEventData[],
  lifeCycleEventsData: DBLifeCycleEventData[],
  temperatureEventsData: TemperatureEventData[],
  humidityEventsData: HumidityEventData[],
  pHEventsData: PhEventData[],
  // many:many association tables' data
  speciesLifeCycles: DBSpeciesLifeCycles[],
  environmentsLightSources: DBEnvironmentsLightSources[],
  eventsTargets: DBEventsTargets[]
}

/**
 * DB Seeds
 */
export const lightSourcesSeed = [
  mockLightSourceLEDBlue,
  mockLightSourceLEDRed
];

export const environmentsSeed = [
  mockEnvironmentSeed,
  mockEnvironmentSprout,
  mockEnvironmentVeg,
  mockEnvironmentEarlyFlower,
  mockEnvironmentLateFlower
];

// plant life cycles associated with environments that detail the plant's preferred growth conditions
const associatedLifeCycleSeed = {
  ...lifeCycleSeed,
  environmentId: mockEnvironmentSeed.id
}
const associatedLifeCycleGermination = {
  ...lifeCycleGermination,
  environmentId: mockEnvironmentSeed.id
}
const associatedLifeCyclePlanting = {
  ...lifeCyclePlanting,
  environmentId: mockEnvironmentSprout.id
}
const associatedLifeCycleSprouting = {
  ...lifeCycleSprouting,
  environmentId: mockEnvironmentSprout.id
}
const associatedLifeCycleVeging = {
  ...lifeCycleVeging,
  environmentId: mockEnvironmentVeg.id
}
const associatedLifeCycleEarlyFlower = {
  ...lifeCycleEarlyFlower,
  environmentId: mockEnvironmentEarlyFlower.id
}
const associatedLifeCycleLateFlower = {
  ...lifeCycleLateFlower,
  environmentId: mockEnvironmentLateFlower.id
}

export const lifeCyclesSeed = [
  associatedLifeCycleSeed,
  associatedLifeCycleGermination,
  associatedLifeCyclePlanting,
  associatedLifeCycleSprouting,
  associatedLifeCycleVeging,
  associatedLifeCycleEarlyFlower,
  associatedLifeCycleLateFlower,
  lifeCycleHarvest // no associated environment
];

export const speciesSeed = [
  // have life-cycles:
  species1,
  species2,
  // don't have life-cycles associated:
  species3,
  species4,
  species5
];

const fakePlant1: DBPlant = {
  ...mockPlant1,
  coverPhotoId: mockLargePhoto1.id,
  speciesId: species1.id,
  currentLifeCycleId: associatedLifeCycleSeed.id
}
const fakePlant2: DBPlant = {
  ...mockPlant2,
  coverPhotoId: mockLargePhoto2.id,
  speciesId: species2.id,
  currentLifeCycleId: associatedLifeCycleSprouting.id
}
export const plantsSeed = [fakePlant1, fakePlant2];

const fakeLargePhoto3: DBPhoto = {
  ...mockLargePhoto3,
  plantId: fakePlant1.id
}
const fakeLargePhoto4: DBPhoto = {
  ...mockLargePhoto4,
  plantId: fakePlant1.id
}
const fakeLargePhoto5: DBPhoto = {
  ...mockLargePhoto5,
  plantId: fakePlant1.id
}
const fakeLargePhoto6: DBPhoto = {
  ...mockLargePhoto6,
  plantId: fakePlant1.id
}
const fakeLargePhoto7: DBPhoto = {
  ...mockLargePhoto7,
  plantId: fakePlant1.id
}
const fakeLargePhoto8: DBPhoto = {
  ...mockLargePhoto8,
  plantId: fakePlant1.id
}
const fakeLargePhoto9: DBPhoto = {
  ...mockLargePhoto9,
  plantId: fakePlant1.id
}

export const photosSeed = [
  mockLargePhoto1,
  mockLargePhoto2,
  fakeLargePhoto3,
  fakeLargePhoto4,
  fakeLargePhoto5,
  fakeLargePhoto6,
  fakeLargePhoto7,
  fakeLargePhoto8,
  fakeLargePhoto9
];

export const waterEventsDataSeed = [
  mockDBWaterEventData1,
  mockDBWaterEventData2
];

/**
 * Associations Seeds
 *  many:many relationships between Models
 */
export const speciesLifeCyclesSeed = [
  // Species 1's LifeCycles
  createSpeciesLifeCycles({
    speciesId: species1.id,
    lifeCycleId: associatedLifeCycleSeed.id
  }),
  createSpeciesLifeCycles({
    speciesId: species1.id,
    lifeCycleId: lifeCycleGermination.id
  }),
  createSpeciesLifeCycles({
    speciesId: species1.id,
    lifeCycleId: lifeCyclePlanting.id
  }),
  createSpeciesLifeCycles({
    speciesId: species1.id,
    lifeCycleId: lifeCycleSprouting.id
  }),
  // Species 2's LifeCycles
  createSpeciesLifeCycles({
    speciesId: species2.id,
    lifeCycleId: associatedLifeCycleSeed.id
  }),
  createSpeciesLifeCycles({
    speciesId: species2.id,
    lifeCycleId: lifeCycleGermination.id
  }),
  createSpeciesLifeCycles({
    speciesId: species2.id,
    lifeCycleId: lifeCyclePlanting.id
  }),
  createSpeciesLifeCycles({
    speciesId: species2.id,
    lifeCycleId: lifeCycleSprouting.id
  }),
  // for full testing, remaining species do not have the optional data LifeCycle
];

// Temperature reading Events
const temperatureEventsDataSeed = [
  mockDBTemperatureEventData1,
  mockDBTemperatureEventData2
]

// Humidity reading Events
const humidityEventsDataSeed = [
  mockDBHumidityEventData1,
  mockDBHumidityEventData2
]

// pH reading Events
const pHEventsDataSeed = [
  mockDBpHEventData1,
  mockDBpHEventData2
]

// Life Cycle change Events
const mockLifeCycleEventsData1 = createDBLifeCycleEventData({
  previousLifeCycleId: lifeCycleSeed.id,
  nextLifeCycleId: lifeCycleGermination.id,
  eventTime: new Date().getTime()
});
const mockLifeCycleEventsData2 = createDBLifeCycleEventData({
  previousLifeCycleId: lifeCycleGermination.id,
  nextLifeCycleId: lifeCyclePlanting.id,
  eventTime: new Date().getTime() + (24 * 60 * 60 * 1000) // 1 day later
});
const mockLifeCycleEventsData3 = createDBLifeCycleEventData({
  previousLifeCycleId: lifeCyclePlanting.id,
  nextLifeCycleId: lifeCycleSprouting.id,
  eventTime: new Date().getTime() + (5 * 24 * 60 * 60 * 1000) // 5 days later (4 from planting)
});

const mockLifeCycleEventsData10 = createDBLifeCycleEventData({
  previousLifeCycleId: lifeCycleSeed.id,
  nextLifeCycleId: lifeCyclePlanting.id,
  eventTime: new Date().getTime()
});
const mockLifeCycleEventsData11 = createDBLifeCycleEventData({
  previousLifeCycleId: lifeCyclePlanting.id,
  nextLifeCycleId: lifeCycleSprouting.id,
  eventTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) // 1 week later from event 10
});
const lifeCycleEventsDataSeed = [
  mockLifeCycleEventsData1,
  mockLifeCycleEventsData2,
  mockLifeCycleEventsData3,
  mockLifeCycleEventsData10,
  mockLifeCycleEventsData11
];

export const environmentsLightSourcesSeed = [
  // (mockEnvironmentSeed.id)
  createEnvironmentsLightSources({
    environmentId: mockEnvironmentSprout.id,
    lightSourceId: mockLightSourceLEDBlue.id
  }),
  createEnvironmentsLightSources({
    environmentId: mockEnvironmentVeg.id,
    lightSourceId: mockLightSourceLEDBlue.id
  }),
  createEnvironmentsLightSources({
    environmentId: mockEnvironmentEarlyFlower.id,
    lightSourceId: mockLightSourceLEDRed.id
  }),
  createEnvironmentsLightSources({
    environmentId: mockEnvironmentLateFlower.id,
    lightSourceId: mockLightSourceLEDRed.id
  })
];

export const eventsTargetsSeed = [
  //
  // 1 watering event, 2 targets
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockDBWaterEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockDBWaterEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[1].id
  }),
  // 1 watering event, 1 target
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockDBWaterEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  //
  // 3 life-cycle change events, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.LifeCycleChange,
    eventDataId: mockLifeCycleEventsData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.LifeCycleChange,
    eventDataId: mockLifeCycleEventsData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.LifeCycleChange,
    eventDataId: mockLifeCycleEventsData3.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.LifeCycleChange,
    eventDataId: mockLifeCycleEventsData10.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[1].id
  }),
  createDBEventsTargets({
    eventType: EventType.LifeCycleChange,
    eventDataId: mockLifeCycleEventsData11.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[1].id
  }),
  //
  // 2 temperature readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.TemperatureReading,
    eventDataId: mockDBTemperatureEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.TemperatureReading,
    eventDataId: mockDBTemperatureEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  //
  // 2 humidity readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.HumidityReading,
    eventDataId: mockDBHumidityEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.HumidityReading,
    eventDataId: mockDBHumidityEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  //
  // 1 pH readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.PhReading,
    eventDataId: mockDBpHEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.PhReading,
    eventDataId: mockDBpHEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  })
];


/**
 * In-Memory DB
 */
export const store: Store = {
  plants: plantsSeed,
  species: speciesSeed,
  photos: photosSeed,
  environments: environmentsSeed,
  lifeCycles: lifeCyclesSeed,
  lightSources: lightSourcesSeed,
  // event data
  waterEventsData: waterEventsDataSeed,
  lifeCycleEventsData: lifeCycleEventsDataSeed,
  temperatureEventsData: temperatureEventsDataSeed,
  humidityEventsData: humidityEventsDataSeed,
  pHEventsData: pHEventsDataSeed,
  // relationships (many to many)
  speciesLifeCycles: speciesLifeCyclesSeed,
  environmentsLightSources: environmentsLightSourcesSeed,
  eventsTargets: eventsTargetsSeed
};