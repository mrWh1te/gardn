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
  environmentId: mockEnvironmentSeed.id
}
const associatedPlantStageGermination = {
  ...plantStageGermination,
  environmentId: mockEnvironmentSeed.id
}
const associatedPlantStagePlanting = {
  ...plantStagePlanting,
  environmentId: mockEnvironmentSprout.id
}
const associatedPlantStageSprouting = {
  ...plantStageSprouting,
  environmentId: mockEnvironmentSprout.id
}
const associatedPlantStageVeging = {
  ...plantStageVeging,
  environmentId: mockEnvironmentVeg.id
}
const associatedPlantStageEarlyFlower = {
  ...plantStageEarlyFlower,
  environmentId: mockEnvironmentEarlyFlower.id
}
const associatedPlantStageLateFlower = {
  ...plantStageLateFlower,
  environmentId: mockEnvironmentLateFlower.id
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