/**
 * Can be used to filter "undefined" from an array array.filter(valueIsDefined)
 * @param val 
 */
export const valueIsDefined = (val: any): boolean => 
  typeof val !== undefined