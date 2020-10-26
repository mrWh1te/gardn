import { createDBModelInstanceFactory } from './../../../helpers/create-db-model-instance-factory'
import { Environment } from './../../../generated';

export const createEnvironment = createDBModelInstanceFactory<Environment>();