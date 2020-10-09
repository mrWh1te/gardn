import { Species, Environment, LightSource } from './generated';
import { 
  DBPlant,
  DBPhoto,
  DBSpeciesLifeCycles,
  DBLifeCycle,
  DBEnvironmentsLightSources
} from './db/interfaces';
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

import { createSpeciesLifeCycles } from './db/helpers/create-species-life-cycles/create-species-life-cycles';
import { createEnvironmentsLightSources } from './db/helpers/create-environments-light-sources/create-environments-light-sources';

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
  // many:many association tables' data
  speciesLifeCycles: DBSpeciesLifeCycles[],
  environmentsLightSources: DBEnvironmentsLightSources[]
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
  speciesId: species1.id
}
const fakePlant2: DBPlant = {
  ...mockPlant2,
  coverPhotoId: mockLargePhoto2.id,
  speciesId: species2.id
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

/**
 * Associations Seeds
 *  many:many relationships between Models
 */
export const speciesLifeCyclesSeed = [
  // Species 1's LifeCycles
  createSpeciesLifeCycles(species1.id, associatedLifeCycleSeed.id),
  createSpeciesLifeCycles(species1.id, lifeCycleGermination.id),
  createSpeciesLifeCycles(species1.id, lifeCyclePlanting.id),
  createSpeciesLifeCycles(species1.id, lifeCycleSprouting.id),
  // Species 2's LifeCycles
  createSpeciesLifeCycles(species2.id, associatedLifeCycleSeed.id),
  createSpeciesLifeCycles(species2.id, lifeCycleGermination.id),
  createSpeciesLifeCycles(species2.id, lifeCyclePlanting.id),
  createSpeciesLifeCycles(species2.id, lifeCycleSprouting.id),
  // for full testing, remaining species do not have the optional data LifeCycle
];

// 1) helper to create these data points
// 2) mocks (done here?)

// 3) data sources updated 
// 4) resolvers?

// 5) update Query for info of plant with associated data
// 6) update info UI with all the data
// 7) merge this PR

export const environmentsLightSourcesSeed = [
  // (mockEnvironmentSeed.id)
  createEnvironmentsLightSources(mockEnvironmentSprout.id, mockLightSourceLEDBlue.id),
  createEnvironmentsLightSources(mockEnvironmentVeg.id, mockLightSourceLEDBlue.id),
  createEnvironmentsLightSources(mockEnvironmentEarlyFlower.id, mockLightSourceLEDRed.id),
  createEnvironmentsLightSources(mockEnvironmentLateFlower.id, mockLightSourceLEDRed.id)
];


/**
 * In-Memory DB
 */
export const store: Store = {
  plants: plantsSeed,
  species: speciesSeed,
  photos: photosSeed,

  // confirm: 
  environments: environmentsSeed,
  lifeCycles: lifeCyclesSeed,
  lightSources: lightSourcesSeed,
  // relationships (many to many)
  speciesLifeCycles: speciesLifeCyclesSeed,
  environmentsLightSources: environmentsLightSourcesSeed
};