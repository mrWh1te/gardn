import { createPlantStage } from './helpers/create-plant-stage';

export const plantStageSeed = createPlantStage({
  name: 'Seed', 
  description: 'Ungerminated seed'
});
export const plantStageGermination = createPlantStage({
  name: 'Germination', 
  description: 'Seed is exposed to water to begin the sprouting process'
});
export const plantStagePlanting = createPlantStage({
  name: 'Planting', 
  description: 'Seed is planted into soil (this may be done during Germination or after)'
});
export const plantStageSprouting = createPlantStage({
  name: 'Sprouting', 
  description: 'Planted seed has broken the surface of the soil'
});

export const plantStageVeging = createPlantStage({
  name: 'Vegetation', 
  description: 'Plant has become less fragile as the stems thicken and leaves proliferate'
});
export const plantStageEarlyFlower = createPlantStage({
  name: 'Early Flower',
  description: 'Plant is beginning to flower, produce fruit, prepare for future Plant generations'
});
export const plantStageLateFlower = createPlantStage({
  name: 'Late Flower',
  description: 'Plant is nearing the end of its Flowering phase, as it focuses more resources to prepare for future Plant generations'
});
export const plantStageHarvest = createPlantStage({
  name: 'Harvest', 
  description: 'Plants fruits, seeds, and flower are harvested and stored for next season'
});