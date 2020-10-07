import { Species, Environment, LifeCycle, LightSource } from './generated';
import { DBPlant, DBPhoto, DBSpeciesLifeCycles, DBLifeCyclesEnvironments } from './db/interfaces';
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
  mockLifeCycleSeed,
  mockLifeCycleGermination,
  mockLifeCyclePlanting,
  mockLifeCycleSprouting
} from './life-cycle/mocks';

/**
 * In-Memory DB
 */
export interface Store {
  // main model data
  plants: DBPlant[],
  species: Species[]
  photos: DBPhoto[],
  environments: Environment[],
  lifeCycles: LifeCycle[],
  lightSources: LightSource[],
  // many:many association tables' data
  speciesLifeCycles: DBSpeciesLifeCycles[],
  lifeCyclesEnvironments: DBLifeCyclesEnvironments[]
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

export const lifeCyclesSeed = [
  mockLifeCycleSeed,
  mockLifeCycleGermination,
  mockLifeCyclePlanting,
  mockLifeCycleSprouting
];

export const speciesSeed = [
  species1,
  species2,
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
  // 1) helper to create these data points
  // 2) mocks (done here?)
  // 3) data sources updated 
  // 4) resolvers?
];


/**
 * In-Memory DB
 */
export const store: Store = {
  plants: plantsSeed,
  species: speciesSeed,
  photos: photosSeed
};