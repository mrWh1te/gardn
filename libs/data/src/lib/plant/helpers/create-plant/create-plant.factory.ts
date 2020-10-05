import { Plant } from '@gardn/data';

/**
 * createPlantFactory() returns a createPlant() function with automatic ID incrementing if not overriden with optional param
 * @param nextPlantId 
 */
export const createPlantFactory = 
  (nextPlantId = 1) => 
    (
      name?: string, 
      id?: number
    ): Plant => { 
      const nextId = typeof id === 'number' ? id : nextPlantId++

      const dateCreated = new Date().getTime();
      const __typename = 'Plant';
      
      return {
        id: nextId, 
        __typename,
        dateCreated,
        name
      }
    };