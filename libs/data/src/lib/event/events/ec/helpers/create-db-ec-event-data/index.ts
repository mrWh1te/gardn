import { createDBModelInstanceFactory } from './../../../../../helpers/create-db-model-instance-factory';
import { EcEventData } from './../../../../../generated';

export const createDBECEventData = createDBModelInstanceFactory<EcEventData>()