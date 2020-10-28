import { Resolvers } from './../../../generated';

/**
 * Data is stored in memory for development
 */
export const lifeCycleEventDataResolvers: Resolvers = {
  LifeCycleEventData: {
    previousLifeCycle: ({ id }, _, { dataSources }) => {
      const lifeCycleEventDataRecord = dataSources.lifeCycleEventData.byId({ id })

      if (lifeCycleEventDataRecord.previousLifeCycleId) {
        return dataSources.lifeCycle.getById({ id: lifeCycleEventDataRecord.previousLifeCycleId })
      }

      return null
    },
    nextLifeCycle: ({ id }, _, { dataSources }) => {
      const lifeCycleEventDataRecord = dataSources.lifeCycleEventData.byId({ id })

      if (lifeCycleEventDataRecord.nextLifeCycleId) {
        return dataSources.lifeCycle.getById({ id: lifeCycleEventDataRecord.nextLifeCycleId })
      }

      return null
    }
  }
}

