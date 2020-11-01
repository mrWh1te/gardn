/**
 * Apollo Client Cache - Obj Type - Event - Policies
 *  Given gql obj type Event's design, its `id` field is not unique as it maps to the Event's Data Table's record (based on `type`)
 *  Therefore, the primary key for the Event's cache is made of `type` and `id` since `id` value is unique under each `type`
 */
export const eventTypePolicies = {
  Event: {
    keyFields: ["type", "id"]
  }
}