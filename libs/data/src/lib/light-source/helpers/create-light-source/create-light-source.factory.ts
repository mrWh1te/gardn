import { LightSource, BulbType, LightColor } from '../../../generated';

/**
 * createLightSourceFactory() returns a createLightSource() function with automatic ID incrementing if not overriden with optional param
 * 
 * Light Color represents groups of light wavelengths (measured in nanometers); 
 *  UVA = 320-400 nanometers (nm)
 *  blue = 400-500 nm
 *  green = 500-600 nm
 *  red = 600-700 nm
 *  far red = 700-750 nm (sometimes referred to as near-infrared)
 *  infrared = 700nm - 1mm
 * 
 * @param nextLightSourceId 
 */
export const createLightSourceFactory = 
  (nextLightSourceId = 1) => 
    (
      name: string,
      description?: string,
      bulbType?: BulbType,
      color?: LightColor,
      wattage?: number,
      lumens?: number,
      id?: number
    ): LightSource => { 
      const nextId = typeof id === 'number' ? id : nextLightSourceId++

      const dateCreated = new Date().getTime();
      const __typename = 'LightSource';
      
      return {
        id: nextId,
        __typename,
        dateCreated,
        name,
        description,
        bulbType,
        wattage,
        lumens,
        color
      }
    };