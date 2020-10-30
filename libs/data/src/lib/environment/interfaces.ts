import { Environment, LightBulbTemplate, BaseDbModel } from './../generated';

/**
 * These model the tables in the TBI database
 *  They go beyond the normalized GraphQL schema with specific associations (has, many, belongs etc)
 */


//
// Many:Many Tables
//

// Relationship Table between Environments <-> Light-Bulb-Templates
export interface DBEnvironmentsLightBulbTemplates extends BaseDbModel {
  environmentId: Environment['id'],
  lightBulbTemplateId: LightBulbTemplate['id']
}