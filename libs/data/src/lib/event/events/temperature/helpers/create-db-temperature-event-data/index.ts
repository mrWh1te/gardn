import { createDBModelInstanceFactory } from './../../../../../helpers/create-db-model-instance-factory';
import { TemperatureEventData } from './../../../../../generated';

export const createDBTemperatureEventData = createDBModelInstanceFactory<TemperatureEventData>()