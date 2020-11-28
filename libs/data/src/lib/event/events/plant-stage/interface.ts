import { PlantStageEventData, PlantStage } from '../../../generated';

/**
 * DB PlantStage change Event Data has two associations for different plantStage's
 *  The previous plantStage (what currentplantStage was prior to the event and newplantStage, what the event changed too (what currentplantStage becomes due to the event))
 */
export interface DBPlantStageEventData extends Omit<PlantStageEventData, '__typename'> {
  __typename?: 'DBPlantStageEventData',
  plantStageId: PlantStage['id']
}