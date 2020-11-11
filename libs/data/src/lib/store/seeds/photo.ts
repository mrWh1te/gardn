import { DBPhoto } from '../../photo/interfaces'
import { mockLargePhoto1, mockLargePhoto2, mockLargePhoto3, mockLargePhoto4, mockLargePhoto5, mockLargePhoto6, mockLargePhoto7, mockLargePhoto8, mockLargePhoto9 } from '../../photo/mocks'
import { mockPlant1 } from '../../plant/mocks'

const mockLargeDBPhoto3: DBPhoto = {
  ...mockLargePhoto3,
  plantId: mockPlant1.id
}
const mockLargeDBPhoto4: DBPhoto = {
  ...mockLargePhoto4,
  plantId: mockPlant1.id
}
const mockLargeDBPhoto5: DBPhoto = {
  ...mockLargePhoto5,
  plantId: mockPlant1.id
}
const mockLargeDBPhoto6: DBPhoto = {
  ...mockLargePhoto6,
  plantId: mockPlant1.id
}
const mockLargeDBPhoto7: DBPhoto = {
  ...mockLargePhoto7,
  plantId: mockPlant1.id
}
const mockLargeDBPhoto8: DBPhoto = {
  ...mockLargePhoto8,
  plantId: mockPlant1.id
}
const mockLargeDBPhoto9: DBPhoto = {
  ...mockLargePhoto9,
  plantId: mockPlant1.id
}

export const photosSeed = [
  mockLargePhoto1,
  mockLargePhoto2,
  mockLargeDBPhoto3,
  mockLargeDBPhoto4,
  mockLargeDBPhoto5,
  mockLargeDBPhoto6,
  mockLargeDBPhoto7,
  mockLargeDBPhoto8,
  mockLargeDBPhoto9
];