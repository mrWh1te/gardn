import { createDBModelInstanceFactory } from './../../../../../helpers/create-db-model-instance-factory';
import { WaterEventData } from './../../../../../generated';

export const createDBWaterEventData = createDBModelInstanceFactory<WaterEventData>()