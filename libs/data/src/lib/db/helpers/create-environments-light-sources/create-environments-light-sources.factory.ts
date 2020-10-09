import { DBEnvironmentsLightSources } from './../../interfaces';
import { LightSource, Environment } from './../../../generated';

/**
 * createEnvironmentsLightSourcesFactory() returns a createEnvironmentsLightSources() function with automatic ID incrementing if not overriden with optional param
 * @param nextEnvironmentsLightSourcesId 
 */
export const createEnvironmentsLightSourcesFactory = 
  (nextEnvironmentsLightSourcesId = 1) => 
    (
      environmentId: Environment['id'],
      lightSourceId: LightSource['id'],
      id?: number
    ): DBEnvironmentsLightSources => { 
      const nextId = typeof id === 'number' ? id : nextEnvironmentsLightSourcesId++;

      const dateCreated = new Date().getTime();
      
      return {
        id: nextId,
        dateCreated,
        environmentId,
        lightSourceId
      }
    };