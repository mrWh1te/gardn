import { mockLargePhoto1, mockLargePhoto2 } from '../../photo/mocks';
import { plantStageEarlyFlower, plantStageSprouting } from '../../plant-stage/seed-data';
import { DBPlant } from '../../plant/interfaces';
import { mockPlant1, mockPlant2, mockPlant3 } from '../../plant/mocks';
import { species1, species2, species3 } from '../../species/seed-data';

const mockDBPlant1: DBPlant = {
  ...mockPlant1,
  coverPhotoId: mockLargePhoto1.id,
  speciesId: species1.id,
  currentPlantStageId: plantStageSprouting.id
}
const mockDBPlant2: DBPlant = {
  ...mockPlant2,
  coverPhotoId: mockLargePhoto2.id,
  speciesId: species2.id,
  currentPlantStageId: plantStageSprouting.id
}
const mockDBPlant3: DBPlant = {
  ...mockPlant3,
  coverPhotoId: mockLargePhoto2.id,
  speciesId: species3.id,
  currentPlantStageId: plantStageEarlyFlower.id
}

export const plantsSeed = [mockDBPlant1, mockDBPlant2, mockDBPlant3];