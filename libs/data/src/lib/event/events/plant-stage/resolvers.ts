import { Resolvers } from './../../../generated';

/**
 * Data is stored in memory for development
 */
export const plantStageEventDataResolvers: Resolvers = {
  PlantStageEventData: {
    previousPlantStage: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.previousPlantStageId) {
        return dataSources.plantStage.byId({ id: plantStageEventDataRecord.previousPlantStageId })
      }

      return null
    },
    nextPlantStage: ({ id }, _, { dataSources }) => {
      const plantStageEventDataRecord = dataSources.plantStageEventData.byId({ id })

      if (plantStageEventDataRecord.nextPlantStageId) {
        return dataSources.plantStage.byId({ id: plantStageEventDataRecord.nextPlantStageId })
      }

      return null
    }
  }
}

