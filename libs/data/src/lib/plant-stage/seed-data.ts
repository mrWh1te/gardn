import { createPlantStage } from './helpers/create-plant-stage';

export const plantStageSeed = createPlantStage({
  name: 'Seed', 
  description: 'Ungerminated seed'
});
export const plantStageGermination = createPlantStage({
  name: 'Germination', 
  description: 'Seed is exposed to water to begin the sprouting process',
  defaultTimeSpanInMinutes: 12 * 60 // 12 hours
});
export const plantStagePlanting = createPlantStage({
  name: 'Planting', 
  description: 'Seed is planted into soil (this may be done during Germination or after)',
  defaultTimeSpanInMinutes: 6 * 24 * 60 // 6 days
});
export const plantStageSprouting = createPlantStage({
  name: 'Sprouting', 
  description: 'Planted seed has broken the surface of the soil',
  defaultTimeSpanInMinutes: 4 * 7 * 24 * 60 // 4 weeks
});

export const plantStageVeging = createPlantStage({
  name: 'Vegetation', 
  description: 'Plant has become less fragile as the stems thicken and leaves proliferate',
  defaultTimeSpanInMinutes: 4 * 7 * 24 * 60 // 4 weeks
});
export const plantStageEarlyFlower = createPlantStage({
  name: 'Early Flower',
  description: 'Plant is beginning to flower, produce fruit, prepare for future Plant generations',
  defaultTimeSpanInMinutes: 2 * 7 * 24 * 60 // 2 weeks
});
export const plantStageLateFlower = createPlantStage({
  name: 'Late Flower',
  description: 'Plant is nearing the end of its Flowering phase, as it focuses more resources to prepare for future Plant generations',
  defaultTimeSpanInMinutes: 2 * 7 * 24 * 60 // 2 weeks
});
export const plantStageHarvest = createPlantStage({
  name: 'Harvest', 
  description: 'Plants fruits, seeds, and flower are harvested and stored for next season',
});