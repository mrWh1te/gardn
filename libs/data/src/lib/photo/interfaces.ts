import { Plant, Photo } from './../generated';

// plant has many photo's (photo has `plantId`)

export interface DBPhoto extends Photo {
  plantId?: Plant['id'] // Photo can belong to a Plant, but doesn't have too
}