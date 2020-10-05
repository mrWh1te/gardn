import { createLightSource } from './helpers/create-light-source/create-light-source';
import { BulbType, LightColor } from './../generated';

export const mockLightSourceLEDBlue = createLightSource(
  'Product Name',
  'Product bulb description',
  BulbType.Led,
  LightColor.Blue,
  45,
  4400
);

export const mockLightSourceLEDRed = createLightSource(
  'Product Name',
  'Product bulb description',
  BulbType.Led,
  LightColor.Red,
  44,
  4200
);