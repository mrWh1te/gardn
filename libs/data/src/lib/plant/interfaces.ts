import { Plant, Photo, Species, PlantStage } from './../generated'; // From *.graphql files

// plant has one species (therefore has `speciesId`)
// plant has many photo's (photo has `plantId`)
// plant has one avatar (plant has `avatarPhotoId`)

/**
 * Database Plant has properties for foreign ID keys
 * Client app uses normalized GQL Plant interface (generated)
 */
export interface DBPlant extends Plant {
  speciesId?: Species['id'], // not required on User to associate data to Species
  coverPhotoId?: Photo['id'],
  avatarPhotoId?: Photo['id'], // not required of User to upload avatar photo 
  currentPlantStageId?: PlantStage['id']
}