import { LifeCycle } from '@gardn/data';

/**
 * createLifeCycleFactory() returns a createLifeCycle() function with automatic ID incrementing if not overriden with optional param
 * @param nextLifeCycleId 
 */
export const createLifeCycleFactory = 
  (nextLifeCycleId = 1) => 
    (
      name: string,
      description?: string,
      id?: number
    ): LifeCycle => { 
      const nextId = typeof id === 'number' ? id : nextLifeCycleId++

      const dateCreated = new Date().getTime();
      const __typename = 'LifeCycle';
      
      return {
        id: nextId,
        __typename,
        dateCreated,
        name,
        description
      }
    };