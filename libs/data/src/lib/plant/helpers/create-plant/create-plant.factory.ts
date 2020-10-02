import { Plant } from '@gardn/data';

/**
 * createPlantFactory() returns a createPlant() function with automatic ID incrementing if not overriden with optional param
 * @param nextPlantId 
 */
export const createPlantFactory = 
  (nextPlantId = 1) => 
    (
      name?: string, 
      dateGerminated?: number, 
      datePlanted?: number,
      dateSprouted?: number,
      id?: number
    ): Plant => { 
      const nextId = typeof id === 'number' ? id : nextPlantId++

      const dateCreated = new Date().getTime();
      
      return {
        id: nextId, 
        dateCreated,
        name,
        dateGerminated,
        datePlanted,
        dateSprouted
      }
    };

    // @future todo `species`, `photos`, `photo` integration