/**
 * Similar to Partial except it recursively includes children properties too
 * Recommendation: use sparingly
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};