import { eventsTargetsRecordToEvent } from '../event/helpers/events-targets-record-to-event';
import { Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const plantResolvers: Resolvers = {
  Query: {
    plants: (_, __, { dataSources }) => dataSources.plant.getPlants(),
    plant: (_, { id }, { dataSources }) => {
      const plant = dataSources.plant.getPlantById({ id })

      if (plant) {
        return plant;
      }
      
      return new Error('Plant not found')
    }
  },
  Plant: {
    avatar: (plant, _, { dataSources }) => {
      if (plant['avatarPhotoId']) { // not in obj type, but in db record ie parent
        const avatar = dataSources.photo.getPhotoById({ id: plant['avatarPhotoId'] });
        return avatar;
      }

      return null;
    },
    coverPhoto: (plant, _, { dataSources }) => {
      if (plant['coverPhotoId']) {
        const coverPhoto = dataSources.photo.getPhotoById({ id: plant['coverPhotoId'] });
        return coverPhoto;
      }

      return null;
    },
    photos: (plant, _, { dataSources }) => {
      const photos = dataSources.photo.getPhotosByPlantId({ id: plant.id });
      return photos;
    },
    species: (plant, _, { dataSources }) => {
      if (plant['speciesId']) {
        const species = dataSources.species.getSpeciesById({ id: plant['speciesId'] })
        return species;
      }

      return null;
    },
    currentLifeCycle: (plant, _, { dataSources }) => {
      if (plant['currentLifeCycleId']) {
        const lifeCycle = dataSources.lifeCycle.getById({ id: plant['currentLifeCycleId'] });
        return lifeCycle;
      }

      return null;
    },
    events: ({ id }, _, { dataSources }) => {
      const events = dataSources.eventsTargets.filterByPlantId({ eventTargetId: id })

      return events.map(eventsTargetsRecord => eventsTargetsRecordToEvent(eventsTargetsRecord))
    }
  },
  Mutation: {
    addPlant: (_, { name }, { dataSources }) => dataSources.plant.newPlant({name})
  }
}