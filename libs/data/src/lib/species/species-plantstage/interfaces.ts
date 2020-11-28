import { Species, PlantStage, BaseDbModel, Environment } from './../../generated';

/**
 * These model the tables in the TBI database
 *  They go beyond the normalized GraphQL schema with specific associations (has, many, belongs etc)
 */


//
// Many:Many Table
//

// Relationship Table between Species <-> Plant Stages / Environements
// Species has plant stages and for anyone of those stages, it can have a specific environment with ideal conditions for plant growth
//  adding environentId here makes it possible to share plant stages across species, but with varying ideal environmental conditions
export interface DBSpeciesPlantStages extends BaseDbModel {
  speciesId: Species['id'],
  plantStageId: PlantStage['id'],
  idealEnvironmentId?: Environment['id'],
  plantStageTimeSpanInMinutes?: number
}