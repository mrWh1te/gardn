import { createLifeCycle } from './helpers/create-life-cycle';

export const lifeCycleSeed = createLifeCycle({
  name: 'Seed', 
  description: 'Ungerminated seed'
});
export const lifeCycleGermination = createLifeCycle({
  name: 'Germination', 
  description: 'Seed is exposed to water to begin the sprouting process'
});
export const lifeCyclePlanting = createLifeCycle({
  name: 'Planting', 
  description: 'Seed is planted into soil (this may be done during Germination or after)'
});
export const lifeCycleSprouting = createLifeCycle({
  name: 'Sprouting', 
  description: 'Planted seed has broken the surface of the soil'
});

export const lifeCycleVeging = createLifeCycle({
  name: 'Vegetation', 
  description: 'Plant has become less fragile as the stems thicken and leaves proliferate'
});
export const lifeCycleEarlyFlower = createLifeCycle({
  name: 'Early Flower',
  description: 'Plant is beginning to flower, produce fruit, prepare for future Plant generations'
});
export const lifeCycleLateFlower = createLifeCycle({
  name: 'Late Flower',
  description: 'Plant is nearing the end of its Flowering phase, as it focuses more resources to prepare for future Plant generations'
});
export const lifeCycleHarvest = createLifeCycle({
  name: 'Harvest', 
  description: 'Plants fruits, seeds, and flower are harvested and stored for next season'
});