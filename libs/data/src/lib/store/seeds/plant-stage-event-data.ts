import { createDBPlantStageEventData } from '../../event/events/plant-stage/helpers/create-db-plant-stage-event-data';
import { plantStageGermination, plantStagePlanting, plantStageSeed, plantStageSprouting } from '../../plant-stage/seed-data';

// Plant Stage change Events
export const mockPlantStageEventsData1 = createDBPlantStageEventData({
  previousPlantStageId: plantStageSeed.id,
  nextPlantStageId: plantStageGermination.id,
  eventTime: new Date().getTime()
});
export const mockPlantStageEventsData2 = createDBPlantStageEventData({
  previousPlantStageId: plantStageGermination.id,
  nextPlantStageId: plantStagePlanting.id,
  eventTime: new Date().getTime() + (24 * 60 * 60 * 1000) // 1 day later
});
export const mockPlantStageEventsData3 = createDBPlantStageEventData({
  previousPlantStageId: plantStagePlanting.id,
  nextPlantStageId: plantStageSprouting.id,
  eventTime: new Date().getTime() + (5 * 24 * 60 * 60 * 1000) // 5 days later (4 from planting)
});

export const mockPlantStageEventsData10 = createDBPlantStageEventData({
  previousPlantStageId: plantStageSeed.id,
  nextPlantStageId: plantStagePlanting.id,
  eventTime: new Date().getTime()
});
export const mockPlantStageEventsData11 = createDBPlantStageEventData({
  previousPlantStageId: plantStagePlanting.id,
  nextPlantStageId: plantStageSprouting.id,
  eventTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) // 1 week later from event 10
});


export const plantStageEventsDataSeed = [
  mockPlantStageEventsData1,
  mockPlantStageEventsData2,
  mockPlantStageEventsData3,
  mockPlantStageEventsData10,
  mockPlantStageEventsData11
];