import { createPhoto } from './helpers/create-photo';
import { Photo, Node } from './../generated';

import { Store } from './../store';
import { DataSourceFactory } from '../data-sources.interfaces';

export const photoDataSourceFactory: DataSourceFactory<Photo> = (store: Store) => ({
  // Read Data
  byId({ id }: Pick<Node, 'id'>) {
    return store.photos.find(photo => photo.id === id);
  },
  getAll() {
    return store.photos;
  },
  filterByPlantId({ id }: Pick<Node, 'id'>) {
    return store.photos.filter(photo => photo.plantId === id);
  },
  // Create Data
  new({ url, title }: Partial<Photo>) {
    const newPhoto = createPhoto({url, title});
    store.photos.push(newPhoto);

    return newPhoto;
  }
});