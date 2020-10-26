import { BaseDbModel } from './../../generated'

/**
 * Creates a function with a higher-scoped value `baseDBModel` that can make instances of something type `M` as long as `M` extends `BaseDBModel`
 * It auto-increments the ID field between each usage and provides a new timestamp on each use
 * 
 * @param baseDBModel 
 * @example
 *    interface User extends BaseDbModel { name: string }
 *    const createUser = createDBModelInstanceFactory<User>()
 * 
 *    const userJane = createUser({ name: 'Jane' })
 * 
 *    console.log('name: ' + userJane.name)
 *    console.log('id: ' + userJane.id)
 *    console.log('timestamp created: ' + userJane.dateCreated)
 */
export const createDBModelInstanceFactory = 
  <M extends BaseDbModel>(baseDBModel: BaseDbModel = {id: 0, dateCreated: 0}) => 
    (data: Omit<M, keyof BaseDbModel>): M => {
      baseDBModel.id++
      baseDBModel.dateCreated = new Date().getTime()

      return {
        ...baseDBModel,
        ...data
      } as M
    }