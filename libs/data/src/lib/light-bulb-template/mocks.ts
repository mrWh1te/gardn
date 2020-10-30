import { createLightBulbTemplate } from './helpers/create-light-bulb-template';
import { LightBulbType, LightBulbColor } from './../generated';

export const mockLightBulbTemplateLEDBlue = createLightBulbTemplate({
  name: 'Product Name',
  description: 'Product bulb description',
  bulbType: LightBulbType.Led,
  color: LightBulbColor.Blue,
  wattage: 45,
  lumens: 4400
});

export const mockLightBulbTemplateLEDRed = createLightBulbTemplate({
  name: 'Product Name',
  description: 'Product bulb description',
  bulbType: LightBulbType.Led,
  color: LightBulbColor.Red,
  wattage: 44,
  lumens: 4200
});