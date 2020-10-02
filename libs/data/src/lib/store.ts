import { Photo, Plant, Species } from '@gardn/data';
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


// plant has one species (therefore has `speciesId`)
// plant has many photo's (photo has `plantId`)
// plant has one avatar (plant has `avatarPhotoId`)

/**
 * Database Plant has properties for foreign ID keys
 */
export interface DBPlant extends Plant {
  speciesId?: number, // not required on User to associate data to Species
  coverPhotoId?: number,
  avatarPhotoId?: number // not required of User to upload avatar photo 
}

export interface DBPhoto extends Photo {
  plantId?: number // Photo can belong to a Plant, but doesn't have too
}


/**
 * In-Memory DB
 */
export interface Store {
  plants: DBPlant[],
  species: Species[]
  photos: DBPhoto[],
}

/**
 * DB Seeds
 */
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
  speciesId: species1.id,
  dateGerminated: 1601658940721,
  datePlanted: 1601745340721,
  dateSprouted: 1602263740721
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
 * In-Memory DB
 */
export const store: Store = {
  plants: plantsSeed,
  species: speciesSeed,
  photos: photosSeed
};