import { DataSource as ApolloDataSource } from 'apollo-datasource';

import { Node, Resolvers } from './generated';
import { Store } from "./store/interface";

export interface DataSourceFactory<T> extends Function {
  (store: Store): DataSource<T>
}

// standard interface for getting/writing db record's, regardless of Model T
export interface DataSource<T> extends ApolloDataSource {
  // read
  byId?: ({id}: Pick<Node, 'id'>) => T,
  getAll?: () => T[],
  // write
  new?: (data: Omit<T, 'id' | 'dateCreated'>) => T
}

// all possible data-sources keys:
// note: if you're adding a new data-source for something that isnt resolved by GQL API, please add the key here:
export type DataSourcesKeys = keyof Omit<Resolvers, 'Timestamp'|'Query'|'BaseEventData'|'EventTarget'|'EventData'|'Node'|'Event'|'BaseDbModel'|'Mutation'> 
  | 'EventsTargets'; // EventsTargets the db table/model, not EventTarget the union type (=Plant|LightBulb|Space)!

// DataSources type used in the main gardn app
export type DataSources<T = any> = Record<DataSourcesKeys, DataSource<T>>;