import { createLifeCycle } from './helpers/create-life-cycle/create-life-cycle';

export const mockLifeCycleSeed = createLifeCycle('Seed', 'Ungerminated seed');
export const mockLifeCycleGermination = createLifeCycle('Germination', 'Seed is exposed to water to begin the sprouting process');
export const mockLifeCyclePlanting = createLifeCycle('Planting', 'Seed is planted into soil (this may be done during Germination or after)');
export const mockLifeCycleSprouting = createLifeCycle('Sprouting', 'Planted seed has broken the surface of the soil');
