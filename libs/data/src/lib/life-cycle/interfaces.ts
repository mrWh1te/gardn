import { LifeCycle, Environment } from './../generated';

export interface DBLifeCycle extends LifeCycle {
  environmentId?: Environment['id']
}
