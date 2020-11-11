import { createEnvironmentsLightBulbTemplates } from '../../../environment/helpers/create-environments-light-bulb-templates';
import { mockEnvironmentEarlyFlower, mockEnvironmentLateFlower, mockEnvironmentSprout, mockEnvironmentVeg } from '../../../environment/mocks';
import { mockLightBulbTemplateLEDBlue, mockLightBulbTemplateLEDRed } from '../../../light-bulb-template/mocks';

export const environmentsLightBulbTemplatesSeed = [
  // (mockEnvironmentSeed.id)
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentSprout.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDBlue.id
  }),
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentVeg.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDBlue.id
  }),
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentEarlyFlower.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDRed.id
  }),
  createEnvironmentsLightBulbTemplates({
    environmentId: mockEnvironmentLateFlower.id,
    lightBulbTemplateId: mockLightBulbTemplateLEDRed.id
  })
];