import { Plant, Photo, Species, LifeCycle, Environment, LightSource } from './../generated';

/**
 * These model the tables in the TBI database
 *  They go beyond the normalized GraphQL schema with specific associations (has, many, belongs etc)
 */

// plant has one species (therefore has `speciesId`)
// plant has many photo's (photo has `plantId`)
// plant has one avatar (plant has `avatarPhotoId`)

/**
 * Database Plant has properties for foreign ID keys
 */
export interface DBPlant extends Plant {
  speciesId?: Species['id'], // not required on User to associate data to Species
  coverPhotoId?: Photo['id'],
  avatarPhotoId?: Photo['id'], // not required of User to upload avatar photo 
  currentLifeCycleId?: LifeCycle['id']
}

export interface DBPhoto extends Photo {
  plantId?: Plant['id'] // Photo can belong to a Plant, but doesn't have too
}

export interface DBLifeCycle extends LifeCycle {
  environmentId?: Environment['id']
}

// Relationship Table between Species <-> Life-Cycles
export interface DBSpeciesLifeCycles {
  id: number,
  dateCreated: number,
  speciesId: Species['id'],
  lifeCycleId: LifeCycle['id']
}

// Relationship Table between Environments <-> Light-Sources
export interface DBEnvironmentsLightSources {
  id: number,
  dateCreated: number,
  environmentId: Environment['id'],
  lightSourceId: LightSource['id']
}