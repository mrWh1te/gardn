import { createDBModelInstanceFactory } from './../../../../../helpers/create-db-model-instance-factory';
import { HumidityEventData } from './../../../../../generated';

export const createDBHumidityEventData = createDBModelInstanceFactory<HumidityEventData>()