import { Photo } from '@gardn/data';

/**
 * createPhotoFactory() returns a createPhoto() function with automatic ID incrementing if not overriden with optional param
 * @param nextPhotoId 
 */
export const createPhotoFactory = (nextPhotoId = 1) => (url: string, title?: string, id?: number): Photo => { 
  const nextId = typeof id === 'number' ? id : nextPhotoId++

  const dateCreated = new Date().getTime(); // unix epoch timestamp in milliseconds
  
  return {
    id: nextId, 
    dateCreated,
    url,
    title
  }
};