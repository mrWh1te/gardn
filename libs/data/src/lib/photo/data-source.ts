import { QueryPhotoArgs, MutationAddPhotoArgs, createPhoto } from '@gardn/data';

import { Store } from './../store';

export const photoDataSourceFactory = (store: Store) => ({
  // Read Data
  getPhotoById({ id }: QueryPhotoArgs) {
    return store.photos.find(photo => photo.id === id);
  },
  getPhotosByPlantId({ id }: QueryPhotoArgs) {
    return store.photos.filter(photo => photo.plantId === id);
  },
  getAllPhotos() {
    return store.photos;
  },
  // Create Data
  addPhoto({ url, title }: MutationAddPhotoArgs) {
    const newPhoto = createPhoto(url, title);
    store.photos.push(newPhoto);

    return newPhoto;
  }
});