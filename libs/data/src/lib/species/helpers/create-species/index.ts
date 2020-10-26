import { createDBModelInstanceFactory } from './../../../helpers/create-db-model-instance-factory'
import { Species } from './../../../generated';

export const createSpecies = createDBModelInstanceFactory<Species>();