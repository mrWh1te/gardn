/**
 * Not to be confused with Plant seeds, however similar, this is data to seed a database. Similar to mocks, except will be used in Production
 */

import { createSpecies } from './create-species/create-species';

export const species1 = createSpecies('Basil');
export const species2 = createSpecies('Serrano');
export const species3 = createSpecies('Parsley');
export const species4 = createSpecies('Rosemary');
export const species5 = createSpecies('Oregano');