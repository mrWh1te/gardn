import { createLightSource } from './helpers/create-light-source';
import { LightBulbType, LightBulbColor } from './../generated';

export const mockLightSourceLEDBlue = createLightSource({
  name: 'Product Name',
  description: 'Product bulb description',
  bulbType: LightBulbType.Led,
  color: LightBulbColor.Blue,
  wattage: 45,
  lumens: 4400
});

export const mockLightSourceLEDRed = createLightSource({
  name: 'Product Name',
  description: 'Product bulb description',
  bulbType: LightBulbType.Led,
  color: LightBulbColor.Red,
  wattage: 44,
  lumens: 4200
});