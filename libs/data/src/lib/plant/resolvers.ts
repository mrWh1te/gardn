import { EventTargetType, EventType, Resolvers } from './../generated';

/**
 * Data is stored in memory for development
 * @param plants 
 */
export const plantResolvers: Resolvers = {
  Query: {
    plants: (_, __, { dataSources }) => dataSources.plant.getAll(),
    plant: (_, { id }, { dataSources }) => {
      const plant = dataSources.plant.byId({ id })

      if (plant) {
        return plant;
      }
      
      return new Error('Plant not found')
    }
  },
  Plant: {
    avatar: (plant, _, { dataSources }) => {
      if (plant['avatarPhotoId']) { // not in obj type, but in db record ie parent
        const avatar = dataSources.photo.byId({ id: plant['avatarPhotoId'] });
        return avatar;
      }

      return null;
    },
    coverPhoto: (plant, _, { dataSources }) => {
      if (plant['coverPhotoId']) {
        const coverPhoto = dataSources.photo.byId({ id: plant['coverPhotoId'] });
        return coverPhoto;
      }

      return null;
    },
    photos: (plant, _, { dataSources }) => {
      const photos = dataSources.photo.filterByPlantId({ id: plant.id });
      return photos;
    },
    species: (plant, _, { dataSources }) => {
      if (plant['speciesId']) {
        const species = dataSources.species.byId({ id: plant['speciesId'] })
        return species;
      }

      return null;
    },
    currentPlantStage: ({id}, _, { dataSources }) => {
      // get most recent plant stage change event to determine the plant stage
      const eventsTargetsRecords = dataSources.eventsTargets.filterByTargetAndEventType({
        eventTargetId: id,
        eventTargetType: EventTargetType.Plant,
        eventType: EventType.PlantStageChange
      })

      if (eventsTargetsRecords.length === 0) {
        return null
      }

      // have events, so get their data so we can sort by eventTime to get "current"
      const eventsData = eventsTargetsRecords.map(eventsTargetsRecord => dataSources.plantStageEventData.byId({id: eventsTargetsRecord.eventDataId }))
      eventsData.sort((a, b) => b.eventTime - a.eventTime) // descending

      if (eventsData[0].plantStageId) {
        return dataSources.plantStage.byId({ id: eventsData[0].plantStageId })
      }

      return null
    },
    currentSpeciesPlantStage: ({id}, _, { dataSources }) => {
      const plantRecord = dataSources.plant.byId({ id })

      if (!plantRecord.speciesId) {
        return null
      }

      // get most recent plant stage change event to determine the plant stage
      const eventsTargetsRecords = dataSources.eventsTargets.filterByTargetAndEventType({
        eventTargetId: id,
        eventTargetType: EventTargetType.Plant,
        eventType: EventType.PlantStageChange
      })

      if (eventsTargetsRecords.length === 0) {
        return null
      }

      // have events, so get their data so we can sort by eventTime to get "current"
      const eventsData = eventsTargetsRecords.map(eventsTargetsRecord => dataSources.plantStageEventData.byId({id: eventsTargetsRecord.eventDataId }))
      eventsData.sort((a, b) => b.eventTime - a.eventTime) // descending

      if (eventsData[0].plantStageId) {
        return dataSources.speciesPlantStage.filterBySpeciesAndStage({
          speciesId: plantRecord.speciesId,
          plantStageId: eventsData[0].plantStageId
        })
      }

      return null
    }
  },
  Mutation: {
    addPlant: (_, { name }, { dataSources }) => dataSources.plant.new({name})
  }
}