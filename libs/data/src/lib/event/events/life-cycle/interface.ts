import { LifeCycleEventData, LifeCycle } from '../../../generated';

/**
 * DB LifeCycle change Event Data has two associations for different LifeCycle's
 *  The previous lifeCycle (what currentLifeCycle was prior to the event and newLifeCycle, what the event changed too (what currentLifeCycle becomes due to the event))
 */
export interface DBLifeCycleEventData extends Omit<LifeCycleEventData, '__typename'> {
  __typename?: 'DBLifeCycleEventData',
  previousLifeCycleId: LifeCycle['id'],
  nextLifeCycleId: LifeCycle['id']
}