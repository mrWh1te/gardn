import { 
  mockEnvironmentEarlyFlower,
  mockEnvironmentLateFlower,
  mockEnvironmentSeed,
  mockEnvironmentSprout,
  mockEnvironmentVeg
} from '../../environment/mocks'
import {
  plantStageEarlyFlower,
  plantStageGermination,
  plantStageHarvest,
  plantStageLateFlower,
  plantStagePlanting,
  plantStageSeed,
  plantStageSprouting,
  plantStageVeging
} from '../../plant-stage/seed-data'

// plant life cycles associated with environments that detail the plant's preferred growth conditions
const associatedPlantStageSeed = {
  ...plantStageSeed,
  defaultEnvironmentId: mockEnvironmentSeed.id
}
const associatedPlantStageGermination = {
  ...plantStageGermination,
  defaultEnvironmentId: mockEnvironmentSeed.id
}
const associatedPlantStagePlanting = {
  ...plantStagePlanting,
  defaultEnvironmentId: mockEnvironmentSprout.id
}
const associatedPlantStageSprouting = {
  ...plantStageSprouting,
  defaultEnvironmentId: mockEnvironmentSprout.id
}
const associatedPlantStageVeging = {
  ...plantStageVeging,
  defaultEnvironmentId: mockEnvironmentVeg.id
}
const associatedPlantStageEarlyFlower = {
  ...plantStageEarlyFlower,
  defaultEnvironmentId: mockEnvironmentEarlyFlower.id
}
const associatedPlantStageLateFlower = {
  ...plantStageLateFlower,
  defaultEnvironmentId: mockEnvironmentLateFlower.id
}

export const plantStagesSeed = [
  associatedPlantStageSeed,
  associatedPlantStageGermination,
  associatedPlantStagePlanting,
  associatedPlantStageSprouting,
  associatedPlantStageVeging,
  associatedPlantStageEarlyFlower,
  associatedPlantStageLateFlower,
  plantStageHarvest // no associated environment
];