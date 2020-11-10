// Noramlized GQL Types
import { 
  Species,
  Environment,
  LightBulbTemplate,
  WaterEventData,
  EventType,
  EventTargetType,
  TemperatureEventData,
  HumidityEventData,
  PhEventData,
  EcEventData,
  LightEventData
} from './generated';

// Database Models
import { DBPlant } from './plant/interfaces';
import { DBPhoto } from './photo/interfaces';
import { DBPlantStage } from './plant-stage/interfaces';
import { DBSpeciesPlantStages } from './species/interfaces';
import { DBEnvironmentsLightBulbTemplates } from './environment/interfaces';
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
  mockPlant2,
  mockPlant3
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
  mockLightBulbTemplateLEDBlue,
  mockLightBulbTemplateLEDRed
} from './light-bulb-template/mocks';

import {
  mockEnvironmentSeed,
  mockEnvironmentSprout,
  mockEnvironmentVeg,
  mockEnvironmentEarlyFlower,
  mockEnvironmentLateFlower
} from './environment/mocks';

import {
  plantStageSeed,
  plantStageGermination,
  plantStagePlanting,
  plantStageSprouting,
  plantStageVeging,
  plantStageEarlyFlower,
  plantStageLateFlower,
  plantStageHarvest
} from './plant-stage/seed-data';

import { 
  mockDBWaterEventData1,
  mockDBWaterEventData2
} from './event/events/water/mocks';

// Helpers
import { createSpeciesPlantStages } from './species/helpers/create-species-plant-stages';
import { createEnvironmentsLightBulbTemplates } from './environment/helpers/create-environments-light-bulb-templates';
import { createDBEventsTargets } from './event/events-targets/helpers/create-db-events-targets';
import { DBPlantStageEventData } from './event/events/plant-stage/interface';
import { createDBPlantStageEventData } from './event/events/plant-stage/helpers/create-db-plant-stage-event-data';
import { mockDBTemperatureEventData1, mockDBTemperatureEventData2, mockDBTemperatureEventData3 } from './event/events/temperature/mocks';
import { mockDBHumidityEventData1, mockDBHumidityEventData2 } from './event/events/humidity/mocks';
import { mockDBpHEventData1, mockDBpHEventData2 } from './event/events/ph/mocks';
import { mockDBECEventData1, mockDBECEventData2 } from './event/events/ec/mocks';
import { mockDBLightEventData1, mockDBLightEventData2 } from './event/events/light/mocks';

/**
 * In-Memory DB
 */
export interface Store {
  // main model data
  photos: DBPhoto[],
  plants: DBPlant[],
  species: Species[],
  plantStages: DBPlantStage[],
  environments: Environment[],
  lightBulbTemplates: LightBulbTemplate[],
  // event data
  waterEventsData: WaterEventData[],
  plantStageEventsData: DBPlantStageEventData[],
  temperatureEventsData: TemperatureEventData[],
  humidityEventsData: HumidityEventData[],
  pHEventsData: PhEventData[],
  eCEventsData: EcEventData[],
  lightEventsData: LightEventData[],
  // many:many association tables' data
  speciesPlantStages: DBSpeciesPlantStages[],
  environmentsLightBulbTemplates: DBEnvironmentsLightBulbTemplates[],
  eventsTargets: DBEventsTargets[]
}

/**
 * DB Seeds
 */
export const lightBulbTemplatesSeed = [
  mockLightBulbTemplateLEDBlue,
  mockLightBulbTemplateLEDRed
];

export const environmentsSeed = [
  mockEnvironmentSeed,
  mockEnvironmentSprout,
  mockEnvironmentVeg,
  mockEnvironmentEarlyFlower,
  mockEnvironmentLateFlower
];

// plant life cycles associated with environments that detail the plant's preferred growth conditions
const associatedPlantStageSeed = {
  ...plantStageSeed,
  environmentId: mockEnvironmentSeed.id
}
const associatedPlantStageGermination = {
  ...plantStageGermination,
  environmentId: mockEnvironmentSeed.id
}
const associatedPlantStagePlanting = {
  ...plantStagePlanting,
  environmentId: mockEnvironmentSprout.id
}
const associatedPlantStageSprouting = {
  ...plantStageSprouting,
  environmentId: mockEnvironmentSprout.id
}
const associatedPlantStageVeging = {
  ...plantStageVeging,
  environmentId: mockEnvironmentVeg.id
}
const associatedPlantStageEarlyFlower = {
  ...plantStageEarlyFlower,
  environmentId: mockEnvironmentEarlyFlower.id
}
const associatedPlantStageLateFlower = {
  ...plantStageLateFlower,
  environmentId: mockEnvironmentLateFlower.id
}

export const plantStagesSeed = [
  associatedPlantStageSeed,
  associatedPlantStageGermination,
  associatedPlantStagePlanting,
  associatedPlantStageSprouting,
  associatedPlantStageVeging,
  associatedPlantStageEarlyFlower,
  associatedPlantStageLateFlower,
  plantStageHarvest // no associated environment
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
  currentPlantStageId: associatedPlantStageSprouting.id
}
const fakePlant2: DBPlant = {
  ...mockPlant2,
  coverPhotoId: mockLargePhoto2.id,
  speciesId: species2.id,
  currentPlantStageId: associatedPlantStageSprouting.id
}
const fakePlant3: DBPlant = {
  ...mockPlant3,
  coverPhotoId: mockLargePhoto2.id,
  speciesId: species3.id,
  currentPlantStageId: associatedPlantStageEarlyFlower.id
}
export const plantsSeed = [fakePlant1, fakePlant2, fakePlant3];

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
export const speciesPlantStagesSeed = [
  // Species 1's PlantStages
  createSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: associatedPlantStageSeed.id
  }),
  createSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStageGermination.id
  }),
  createSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStagePlanting.id
  }),
  createSpeciesPlantStages({
    speciesId: species1.id,
    plantStageId: plantStageSprouting.id
  }),
  // Species 2's PlantStages
  createSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: associatedPlantStageSeed.id
  }),
  createSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStageGermination.id
  }),
  createSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStagePlanting.id
  }),
  createSpeciesPlantStages({
    speciesId: species2.id,
    plantStageId: plantStageSprouting.id
  }),
  // for full testing, remaining species do not have the optional data PlantStage
];

// Temperature reading Events
const temperatureEventsDataSeed = [
  mockDBTemperatureEventData1,
  mockDBTemperatureEventData2,
  mockDBTemperatureEventData3
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

// EC reading Events
const eCEventsDataSeed = [
  mockDBECEventData1,
  mockDBECEventData2
]

// Light change Events
const lightEventsDataSeed = [
  mockDBLightEventData1,
  mockDBLightEventData2
]

// Life Cycle change Events
const mockPlantStageEventsData1 = createDBPlantStageEventData({
  previousPlantStageId: plantStageSeed.id,
  nextPlantStageId: plantStageGermination.id,
  eventTime: new Date().getTime()
});
const mockPlantStageEventsData2 = createDBPlantStageEventData({
  previousPlantStageId: plantStageGermination.id,
  nextPlantStageId: plantStagePlanting.id,
  eventTime: new Date().getTime() + (24 * 60 * 60 * 1000) // 1 day later
});
const mockPlantStageEventsData3 = createDBPlantStageEventData({
  previousPlantStageId: plantStagePlanting.id,
  nextPlantStageId: plantStageSprouting.id,
  eventTime: new Date().getTime() + (5 * 24 * 60 * 60 * 1000) // 5 days later (4 from planting)
});

const mockPlantStageEventsData10 = createDBPlantStageEventData({
  previousPlantStageId: plantStageSeed.id,
  nextPlantStageId: plantStagePlanting.id,
  eventTime: new Date().getTime()
});
const mockPlantStageEventsData11 = createDBPlantStageEventData({
  previousPlantStageId: plantStagePlanting.id,
  nextPlantStageId: plantStageSprouting.id,
  eventTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) // 1 week later from event 10
});
const plantStageEventsDataSeed = [
  mockPlantStageEventsData1,
  mockPlantStageEventsData2,
  mockPlantStageEventsData3,
  mockPlantStageEventsData10,
  mockPlantStageEventsData11
];

export const environmentsLightBulbTemplatesSeed = [
  // (mockEnvironmentSeed.id)
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentSprout.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDBlue.id
  }),
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentVeg.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDBlue.id
  }),
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentEarlyFlower.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDRed.id
  }),
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentLateFlower.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDRed.id
  })
];

export const eventsTargetsSeed = [
  //
  // 1 watering event, 1 target
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockDBWaterEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  // 1 watering event, 1 target
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockDBWaterEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[1].id
  }),
  //
  // 3 life-cycle change events, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData3.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData10.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[1].id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData11.id,
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
  // 1 temperature reading, 1 target (2nd plant)
  createDBEventsTargets({
    eventType: EventType.TemperatureReading,
    eventDataId: mockDBTemperatureEventData3.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[1].id
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
  // 1 humidity event for plant 3
  createDBEventsTargets({
    eventType: EventType.HumidityReading,
    eventDataId: mockDBHumidityEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[2].id
  }),
  //
  // 2 pH readings, 1 target (1 plant)
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
  }),
  //
  // 2 EC readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.EcReading,
    eventDataId: mockDBECEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.EcReading,
    eventDataId: mockDBECEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  //
  // 2 Light changes, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.LightChange,
    eventDataId: mockDBLightEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  createDBEventsTargets({
    eventType: EventType.LightChange,
    eventDataId: mockDBLightEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[0].id
  }),
  // 1 light change event (off), 1 target plant (3rd plant)
  createDBEventsTargets({
    eventType: EventType.LightChange,
    eventDataId: mockDBLightEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: plantsSeed[2].id
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
  plantStages: plantStagesSeed,
  lightBulbTemplates: lightBulbTemplatesSeed,
  // event data
  waterEventsData: waterEventsDataSeed,
  plantStageEventsData: plantStageEventsDataSeed,
  temperatureEventsData: temperatureEventsDataSeed,
  humidityEventsData: humidityEventsDataSeed,
  pHEventsData: pHEventsDataSeed,
  eCEventsData: eCEventsDataSeed,
  lightEventsData: lightEventsDataSeed,
  // relationships (many to many)
  speciesPlantStages: speciesPlantStagesSeed,
  environmentsLightBulbTemplates: environmentsLightBulbTemplatesSeed,
  eventsTargets: eventsTargetsSeed
};
