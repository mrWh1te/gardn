import { Plant, Photo, Species, LifeCycle, Environment } from './../generated';

// plant has one species (therefore has `speciesId`)
// plant has many photo's (photo has `plantId`)
// plant has one avatar (plant has `avatarPhotoId`)

/**
 * Database Plant has properties for foreign ID keys
 */
export interface DBPlant extends Plant {
  speciesId?: Species['id'], // not required on User to associate data to Species
  coverPhotoId?: Photo['id'],
  avatarPhotoId?: Photo['id'] // not required of User to upload avatar photo 
}

export interface DBPhoto extends Photo {
  plantId?: Plant['id'] // Photo can belong to a Plant, but doesn't have too
}

// Relationship Table between Species <-> Life-Cycles
export interface DBSpeciesLifeCycles {
  id: number,
  speciesId: Species['id'],
  lifeCycleId: LifeCycle['id']
}

// Relationship Table between Life-Cycles <-> Environments
export interface DBLifeCyclesEnvironments {
  id: number,
  lifeCycleId: LifeCycle['id'],
  environmentId: Environment['id']
}