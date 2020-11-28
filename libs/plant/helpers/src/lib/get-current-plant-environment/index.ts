import { Environment } from '@gardn/data';
import { DeepPartial } from '@gardn/helpers';

interface getCurrentEnvironmentProps {
  currentPlantStage?: {
    defaultEnvironment?: DeepPartial<Environment>
  },
  currentSpeciesPlantStage?: {
    idealEnvironment?: DeepPartial<Environment>
  }
}

// 1. if plant has current species plant stage get the ideal environment
// 2. if plant has current plant stage get default environment
// 3. fallback undefiend
export const getCurrentPlantEnvironment = (plant?: getCurrentEnvironmentProps): DeepPartial<Environment> => 
  plant?.currentSpeciesPlantStage?.idealEnvironment ? plant?.currentSpeciesPlantStage?.idealEnvironment : 
  plant?.currentPlantStage?.defaultEnvironment ? plant?.currentPlantStage?.defaultEnvironment : 
  undefined;
