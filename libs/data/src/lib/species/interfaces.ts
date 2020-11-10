import { Species, PlantStage, BaseDbModel } from './../generated';

/**
 * These model the tables in the TBI database
 *  They go beyond the normalized GraphQL schema with specific associations (has, many, belongs etc)
 */


//
// Many:Many Table
//

// Relationship Table between Species <-> Life-Cycles
export interface DBSpeciesPlantStages extends BaseDbModel {
  speciesId: Species['id'],
  plantStageId: PlantStage['id']
}