import { createLifeCycle } from './helpers/create-life-cycle/create-life-cycle';

export const mockLifeCycle1 = createLifeCycle('Seed', 'Ungerminated seed');
export const mockLifeCycle2 = createLifeCycle('Germination', 'Seed is exposed to water to begin the sprouting process');
export const mockLifeCycle3 = createLifeCycle('Planting', 'Seed is planted into soil (this may be done during Germination or after)');
export const mockLifeCycle4 = createLifeCycle('Sprouting', 'Planted seed has broken the surface of the soil');
