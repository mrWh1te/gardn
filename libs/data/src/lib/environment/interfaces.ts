import { Environment, LightSource, BaseDbModel } from './../generated';

/**
 * These model the tables in the TBI database
 *  They go beyond the normalized GraphQL schema with specific associations (has, many, belongs etc)
 */


//
// Many:Many Tables
//

// Relationship Table between Environments <-> Light-Sources
export interface DBEnvironmentsLightSources extends BaseDbModel {
  environmentId: Environment['id'],
  lightSourceId: LightSource['id']
}