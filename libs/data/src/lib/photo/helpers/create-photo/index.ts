import { createDBModelInstanceFactory } from './../../../helpers/create-db-model-instance-factory';
import { Photo } from './../../../generated';

export const createPhoto = createDBModelInstanceFactory<Photo>();