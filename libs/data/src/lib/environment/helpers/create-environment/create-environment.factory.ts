import { Environment, LiquidUnit, TimeUnit, TemperatureUnit, HumidityUnit, ElectricalConductivityUnit } from './../../../generated';

/**
 * createEnvironmentFactory() returns a createEnvironment() function with automatic ID incrementing if not overriden with optional param
 * 
 *  *Note* This is a plant's environment. It's atmosphere, it's water cycle(s), etc.
 * 
 * @param nextEnvironmentId 
 */
export const createEnvironmentFactory = 
  (nextEnvironmentId = 1) => 
    (
      name: string,
      description?: string,
      environment?: Partial<Environment>,
      id?: number
    ): Environment => { 
      const nextId = typeof id === 'number' ? id : nextEnvironmentId++

      const dateCreated = new Date().getTime();
      const __typename = 'Environment';
      
      return {
        id: nextId,
        __typename,
        dateCreated,
        name,
        description,
        ...environment
      }
    };