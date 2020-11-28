import { DataSources } from '../../../data-sources.interfaces';
import { EventData, EventType } from '../../../generated';

export const getEventData = (dataSources: DataSources, eventType: EventType, id: EventData['id']): EventData => {
  let data: EventData

  switch(eventType) {
    case EventType.Water:
      data = dataSources.WaterEventData.byId({ id });
      break;
    case EventType.PlantStageChange:
      data = dataSources.PlantStageEventData.byId({ id });
      break;
    case EventType.TemperatureReading:
      data = dataSources.TemperatureEventData.byId({ id });
      break;
    case EventType.HumidityReading:
      data = dataSources.HumidityEventData.byId({ id });
      break;
    case EventType.PhReading:
      data = dataSources.PHEventData.byId({ id });
      break;
    case EventType.EcReading:
      data = dataSources.ECEventData.byId({ id });
      break;
    case EventType.LightChange:
      data = dataSources.LightEventData.byId({ id });
      break;
    default:
      throw new Error('[getEventData] Event type not recognized ' + eventType)
  }

  return {...data}
}