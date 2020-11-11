import { DataSources } from '../../../data-sources.interfaces';
import { EventData, EventType } from '../../../generated';

export const getEventData = (dataSources: DataSources, eventType: EventType, id: EventData['id']): EventData => {
  let data: EventData

  switch(eventType) {
    case EventType.Water:
      data = dataSources.waterEventData.byId({ id });
      break;
    case EventType.PlantStageChange:
      data = dataSources.plantStageEventData.byId({ id });
      break;
    case EventType.TemperatureReading:
      data = dataSources.temperatureEventData.byId({ id });
      break;
    case EventType.HumidityReading:
      data = dataSources.humidityEventData.byId({ id });
      break;
    case EventType.PhReading:
      data = dataSources.pHEventData.byId({ id });
      break;
    case EventType.EcReading:
      data = dataSources.eCEventData.byId({ id });
      break;
    case EventType.LightChange:
      data = dataSources.lightEventData.byId({ id });
      break;
    default:
      throw new Error('[getEventData] Event type not recognized ' + eventType)
  }

  return {...data}
}