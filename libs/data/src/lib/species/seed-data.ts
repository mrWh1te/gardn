/**
 * Not to be confused with Plant seeds, however similar, this is data to seed a database. Similar to mocks, except will be used in Production
 */

import { createSpecies } from './helpers/create-species';

export const species1 = createSpecies({name: 'Basil'});
export const species2 = createSpecies({name: 'Serrano'});
export const species3 = createSpecies({name: 'Parsley'});
export const species4 = createSpecies({name: 'Rosemary'});
export const species5 = createSpecies({name: 'Oregano'});