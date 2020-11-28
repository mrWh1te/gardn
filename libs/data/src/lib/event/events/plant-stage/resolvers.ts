import { Resolvers } from './../../../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageEventDataResolvers: Resolvers = {
  PlantStageEventData: {
    plantStage: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.plantStageId) {
        return dataSources.plantStage.byId({ id: plantStageEventDataRecord.plantStageId })
      }

      return null
    }
  }
}

