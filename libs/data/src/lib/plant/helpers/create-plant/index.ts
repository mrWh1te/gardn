import { createDBModelInstanceFactory } from './../../../helpers/create-db-model-instance-factory'
import { Plant } from './../../../generated';

export const createPlant = createDBModelInstanceFactory<Plant>()