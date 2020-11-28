/**
 * Not to be confused with Plant seeds, however similar, this is data to seed a database. Similar to mocks, except will be used in Production
 */

import { createSpecies } from './helpers/create-species';

export const species1 = createSpecies({
  name: 'Basil',
  sproutToHarvestInHours: 12 * 7 * 24 // 12 weeks in hours
});
export const species2 = createSpecies({
  name: 'Serrano',
  sproutToHarvestInHours: 12 * 7 * 24
});
export const species3 = createSpecies({
  name: 'Parsley',
  sproutToHarvestInHours: 12 * 7 * 24
});
export const species4 = createSpecies({
  name: 'Rosemary',
  sproutToHarvestInHours: 12 * 7 * 24
});
export const species5 = createSpecies({
  name: 'Oregano',
  sproutToHarvestInHours: 12 * 7 * 24
});