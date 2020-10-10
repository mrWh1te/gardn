import { DBSpeciesLifeCycles } from './../../interfaces';
import { LifeCycle, Species } from './../../../generated';

/**
 * createSpeciesLifeCyclesFactory() returns a createSpeciesLifeCycles() function with automatic ID incrementing if not overriden with optional param
 * @param nextSpeciesLifeCyclesId 
 */
export const createSpeciesLifeCyclesFactory = 
  (nextSpeciesLifeCyclesId = 1) => 
    (
      speciesId: Species['id'],
      lifeCycleId: LifeCycle['id'],
      id?: number
    ): DBSpeciesLifeCycles => { 
      const nextId = typeof id === 'number' ? id : nextSpeciesLifeCyclesId++

      const dateCreated = new Date().getTime();
      
      return {
        id: nextId,
        dateCreated,
        speciesId,
        lifeCycleId
      }
    };