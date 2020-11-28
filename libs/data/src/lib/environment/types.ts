import { Environment, LightBulbTemplate } from './../generated'

/**
 * Just like the Event type, generated, except more relaxed aka "loose" in typing via Partials
 */
export type LooseEnvironment = Omit<Partial<Environment>, 'lightBulbTemplates'> & {
  lightBulbTemplates: Partial<LightBulbTemplate>[] // don't require 'dateCreated'
}