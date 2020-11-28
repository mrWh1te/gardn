import { 
  plantStageGermination,
  plantStagePlanting,
  plantStageSeed,
  plantStageSprouting
} from '../../../plant-stage/seed-data';
import { createDBSpeciesPlantStage } from '../../../species/species-plantstage/helpers/create-species-plant-stage';
import { species1, species2 } from '../../../species/seed-data';
import { mockEnvironmentSeed, mockEnvironmentSprout, mockEnvironmentVeg } from '../../../environment/mocks';

/**
 * Associations Seeds
 *  many:many relationships between Models
 */
export const speciesPlantStagesSeed = [
  // Species 1's PlantStages
  createDBSpeciesPlantStage({
    speciesId: species1.id,
    plantStageId: plantStageSeed.id,
    idealEnvironmentId: mockEnvironmentSeed.id
  }),
  createDBSpeciesPlantStage({
    speciesId: species1.id,
    plantStageId: plantStageGermination.id,
    idealEnvironmentId: mockEnvironmentSeed.id,
    plantStageTimeSpanInMinutes: 12 * 24 * 60 // 12 days
  }),
  createDBSpeciesPlantStage({
    speciesId: species1.id,
    plantStageId: plantStagePlanting.id,
    idealEnvironmentId: mockEnvironmentSprout.id,
    plantStageTimeSpanInMinutes: 12 * 24 * 60 // 12 days
  }),
  createDBSpeciesPlantStage({
    speciesId: species1.id,
    plantStageId: plantStageSprouting.id,
    idealEnvironmentId: mockEnvironmentSprout.id,
    plantStageTimeSpanInMinutes: 12 * 24 * 60 // 12 days
  }),
  // Species 2's PlantStages
  createDBSpeciesPlantStage({
    speciesId: species2.id,
    plantStageId: plantStageSeed.id,
    idealEnvironmentId: mockEnvironmentSeed.id,
  }),
  createDBSpeciesPlantStage({
    speciesId: species2.id,
    plantStageId: plantStageGermination.id,
    idealEnvironmentId: mockEnvironmentSprout.id,
    plantStageTimeSpanInMinutes: 12 * 24 * 60 // 12 days
  }),
  createDBSpeciesPlantStage({
    speciesId: species2.id,
    plantStageId: plantStagePlanting.id,
    idealEnvironmentId: mockEnvironmentSprout.id,
    plantStageTimeSpanInMinutes: 12 * 24 * 60 // 12 days
  }),
  createDBSpeciesPlantStage({
    speciesId: species2.id,
    plantStageId: plantStageSprouting.id,
    idealEnvironmentId: mockEnvironmentSprout.id,
    plantStageTimeSpanInMinutes: 12 * 24 * 60 // 12 days
  }),
];