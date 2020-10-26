import { Species, LifeCycle, BaseDbModel } from './../generated';

/**
 * These model the tables in the TBI database
 *  They go beyond the normalized GraphQL schema with specific associations (has, many, belongs etc)
 */


//
// Many:Many Table
//

// Relationship Table between Species <-> Life-Cycles
export interface DBSpeciesLifeCycles extends BaseDbModel {
  speciesId: Species['id'],
  lifeCycleId: LifeCycle['id']
}