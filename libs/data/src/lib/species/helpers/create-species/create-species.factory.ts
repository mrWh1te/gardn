import { Species } from '@gardn/data';

/**
 * createSpeciesFactory() returns a createSpecies() function with automatic ID incrementing if not overriden with optional param
 * @param nextSpeciesId 
 */
export const createSpeciesFactory = (nextSpeciesId = 1) => (name: string, description?: string, id?: number): Species => { 
  const nextId = typeof id === 'number' ? id : nextSpeciesId++;

  const dateCreated = new Date().getTime();
  const __typename = 'Species';
  
  return {
    id: nextId, 
    __typename,
    dateCreated,
    name,
    description
  }
};

// @future todo `photo`, `avatar` integration