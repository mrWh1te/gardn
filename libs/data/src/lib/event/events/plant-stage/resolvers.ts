import { Resolvers } from './../../../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageEventDataResolvers: Resolvers = {
  PlantStageEventData: {
    plantStage: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.PlantStageEventData.byId({ id })

      if (plantStageEventDataRecord.plantStageId) {
        return dataSources.PlantStage.byId({ id: plantStageEventDataRecord.plantStageId })
      }

      return null
    }
  }
}

