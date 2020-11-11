import { createDBEventsTargets } from '../../../event/events-targets/helpers/create-db-events-targets';
import { mockECEventData1, mockECEventData2 } from '../../../event/events/ec/mocks';
import { mockHumidityEventData1, mockHumidityEventData2 } from '../../../event/events/humidity/mocks';
import { mockLightEventData1, mockLightEventData2 } from '../../../event/events/light/mocks';
import { mockPHEventData1, mockPHEventData2 } from '../../../event/events/ph/mocks';
import { mockTemperatureEventData1, mockTemperatureEventData2, mockTemperatureEventData3 } from '../../../event/events/temperature/mocks';
import { mockWaterEventData1, mockWaterEventData2 } from '../../../event/events/water/mocks';
import { EventTargetType, EventType } from '../../../generated';
import { mockPlant1, mockPlant2, mockPlant3 } from '../../../plant/mocks';
import { 
  mockPlantStageEventsData1,
  mockPlantStageEventsData10,
  mockPlantStageEventsData11,
  mockPlantStageEventsData2,
  mockPlantStageEventsData3
} from '../plant-stage-event-data';

export const eventsTargetsSeed = [
  //
  // 1 watering event, 1 target
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockWaterEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  // 1 watering event, 1 target
  createDBEventsTargets({
    eventType: EventType.Water,
    eventDataId: mockWaterEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant2.id
  }),
  //
  // 3 life-cycle change events, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData3.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData10.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant2.id
  }),
  createDBEventsTargets({
    eventType: EventType.PlantStageChange,
    eventDataId: mockPlantStageEventsData11.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant2.id
  }),
  //
  // 2 temperature readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.TemperatureReading,
    eventDataId: mockTemperatureEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.TemperatureReading,
    eventDataId: mockTemperatureEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  // 1 temperature reading, 1 target (2nd plant)
  createDBEventsTargets({
    eventType: EventType.TemperatureReading,
    eventDataId: mockTemperatureEventData3.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant2.id
  }),
  //
  // 2 humidity readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.HumidityReading,
    eventDataId: mockHumidityEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.HumidityReading,
    eventDataId: mockHumidityEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  // 1 humidity event for plant 3
  createDBEventsTargets({
    eventType: EventType.HumidityReading,
    eventDataId: mockHumidityEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant3.id
  }),
  //
  // 2 pH readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.PhReading,
    eventDataId: mockPHEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.PhReading,
    eventDataId: mockPHEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  //
  // 2 EC readings, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.EcReading,
    eventDataId: mockECEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.EcReading,
    eventDataId: mockECEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  //
  // 2 Light changes, 1 target (1 plant)
  createDBEventsTargets({
    eventType: EventType.LightChange,
    eventDataId: mockLightEventData1.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  createDBEventsTargets({
    eventType: EventType.LightChange,
    eventDataId: mockLightEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant1.id
  }),
  // 1 light change event (off), 1 target plant (3rd plant)
  createDBEventsTargets({
    eventType: EventType.LightChange,
    eventDataId: mockLightEventData2.id,
    eventTargetType: EventTargetType.Plant,
    eventTargetId: mockPlant3.id
  })
];