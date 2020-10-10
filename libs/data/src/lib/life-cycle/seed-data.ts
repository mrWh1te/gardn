import { createLightSource } from '../light-source/helpers/create-light-source/create-light-source';
import { createLifeCycle } from './helpers/create-life-cycle/create-life-cycle';

export const lifeCycleSeed = createLifeCycle('Seed', 'Ungerminated seed');
export const lifeCycleGermination = createLifeCycle('Germination', 'Seed is exposed to water to begin the sprouting process');
export const lifeCyclePlanting = createLifeCycle('Planting', 'Seed is planted into soil (this may be done during Germination or after)');
export const lifeCycleSprouting = createLifeCycle('Sprouting', 'Planted seed has broken the surface of the soil');

export const lifeCycleVeging = createLifeCycle('Vegetation', 'Plant has become less fragile as the stems thicken and leaves proliferate');
export const lifeCycleEarlyFlower = createLifeCycle('Early Flower', 'Plant is beginning to flower, produce fruit, prepare for future Plant generations');
export const lifeCycleLateFlower = createLifeCycle('Late Flower', 'Plant is nearing the end of its Flowering phase, as it focuses more resources to prepare for future Plant generations');
export const lifeCycleHarvest = createLifeCycle('Harvest', 'Plants fruits, seeds, and flower are harvested and stored for next season');