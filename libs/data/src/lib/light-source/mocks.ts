import { createLightSource } from './helpers/create-light-source/create-light-source';
import { LightBulbType, LightBulbColor } from './../generated';

export const mockLightSourceLEDBlue = createLightSource(
  'Product Name',
  'Product bulb description',
  LightBulbType.Led,
  LightBulbColor.Blue,
  45,
  4400
);

export const mockLightSourceLEDRed = createLightSource(
  'Product Name',
  'Product bulb description',
  LightBulbType.Led,
  LightBulbColor.Red,
  44,
  4200
);