import { DataSources } from '../../../data-sources.interfaces';
import { EventData, EventType } from '../../../generated';

export const getEventData = (dataSources: DataSources, eventType: EventType, eventDataId: EventData['id']): EventData => {
  let data: EventData

  switch(eventType) {
    case EventType.Water:
      data = dataSources.waterEventData.byId({id: eventDataId });
      break;
    case EventType.PlantStageChange:
      data = dataSources.plantStageEventData.byId({id: eventDataId });
      break;
    case EventType.TemperatureReading:
      data = dataSources.temperatureEventData.byId({id: eventDataId });
      break;
    case EventType.HumidityReading:
      data = dataSources.humidityEventData.byId({id: eventDataId });
      break;
    case EventType.PhReading:
      data = dataSources.pHEventData.byId({id: eventDataId });
      break;
    case EventType.EcReading:
      data = dataSources.eCEventData.byId({id: eventDataId });
      break;
    case EventType.LightChange:
      data = dataSources.lightEventData.byId({id: eventDataId });
      break;
    default:
      throw new Error('[getEventData] Event type not recognized ' + eventType)
  }

  return {...data}
}