import { Species } from '@gardn/data';

/**
 * createSpeciesFactory() returns a createSpecies() function with automatic ID incrementing if not overriden with optional param
 * @param nextSpeciesId 
 */
export const createSpeciesFactory = (nextSpeciesId = 1) => (name: string, description?: string, id?: number): Species => { 
  const nextId = typeof id === 'number' ? id : nextSpeciesId++
  
  return {
    id: nextId, 
    name,
    description
  }
};