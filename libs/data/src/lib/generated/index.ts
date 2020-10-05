import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Timestamp: any;
};


export enum LiquidUnit {
  Gil = 'GIL',
  Pint = 'PINT',
  Quart = 'QUART',
  Gallon = 'GALLON',
  Milliliter = 'MILLILITER',
  Liter = 'LITER',
  Kiloliter = 'KILOLITER'
}

export enum TimeUnit {
  Second = 'SECOND',
  Minute = 'MINUTE',
  Hour = 'HOUR',
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
  Decade = 'DECADE',
  Century = 'CENTURY'
}

export enum TemperatureUnit {
  Fahrenheit = 'FAHRENHEIT',
  Celsius = 'CELSIUS'
}

export enum HumidityUnit {
  GramsPerCubicMeter = 'GRAMS_PER_CUBIC_METER',
  GramsPerKilogram = 'GRAMS_PER_KILOGRAM',
  Percentage = 'PERCENTAGE'
}

export type Environment = {
  __typename?: 'Environment';
  id: Scalars['Int'];
  dateCreated?: Maybe<Scalars['Timestamp']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  idealWaterAmount?: Maybe<Scalars['Int']>;
  idealWaterAmountUnit?: Maybe<LiquidUnit>;
  idealWaterAmountPerTimePeriod?: Maybe<Scalars['Int']>;
  idealWaterAmountPerTimePeriodUnit?: Maybe<TimeUnit>;
  idealTemperatureMin?: Maybe<Scalars['Int']>;
  idealTemperatueMax?: Maybe<Scalars['Int']>;
  idealTemperatureMinUnit?: Maybe<TemperatureUnit>;
  idealTemperatureMaxUnit?: Maybe<TemperatureUnit>;
  idealHumidityMin?: Maybe<Scalars['Int']>;
  idealHumidityMax?: Maybe<Scalars['Int']>;
  idealHumidityMinUnit?: Maybe<HumidityUnit>;
  idealHumidityMaxUnit?: Maybe<HumidityUnit>;
  lightOnTime?: Maybe<Scalars['Int']>;
  lightOnTimeUnit?: Maybe<TimeUnit>;
  lightOnTimePerTimePeriod?: Maybe<Scalars['Int']>;
  lightOnTimePerTimePeriodUnit?: Maybe<TimeUnit>;
  lightSource?: Maybe<Array<Maybe<LightSource>>>;
};

export type LifeCycle = {
  __typename?: 'LifeCycle';
  id: Scalars['Int'];
  name: Scalars['String'];
  dateCreated?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  environment?: Maybe<Environment>;
};

export type LightSource = {
  __typename?: 'LightSource';
  id: Scalars['Int'];
  dateCreated?: Maybe<Scalars['Timestamp']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bulbType?: Maybe<BulbType>;
  wattage?: Maybe<Scalars['Int']>;
  lumens?: Maybe<Scalars['Int']>;
  color?: Maybe<LightColor>;
};

export enum BulbType {
  Hid = 'HID',
  Mh = 'MH',
  Cmh = 'CMH',
  Cdm = 'CDM',
  Hps = 'HPS',
  Led = 'LED',
  Cfl = 'CFL',
  Ccfl = 'CCFL'
}

export enum LightColor {
  Uva = 'UVA',
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED',
  FarRed = 'FAR_RED',
  Infrared = 'INFRARED'
}

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['Int'];
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Timestamp']>;
};

export type Query = {
  __typename?: 'Query';
  allSpecies?: Maybe<Array<Maybe<Species>>>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  plant?: Maybe<Plant>;
  plants?: Maybe<Array<Maybe<Plant>>>;
  species?: Maybe<Species>;
};


export type QueryPhotoArgs = {
  id: Scalars['Int'];
};


export type QueryPlantArgs = {
  id: Scalars['Int'];
};


export type QuerySpeciesArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPhoto?: Maybe<Photo>;
  addPlant?: Maybe<Plant>;
  addSpecies?: Maybe<Species>;
};


export type MutationAddPhotoArgs = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationAddPlantArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationAddSpeciesArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Plant = {
  __typename?: 'Plant';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  species?: Maybe<Species>;
  dateCreated?: Maybe<Scalars['Timestamp']>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  coverPhoto?: Maybe<Photo>;
  avatar?: Maybe<Photo>;
  currentLifeCycle?: Maybe<LifeCycle>;
};

export type Species = {
  __typename?: 'Species';
  id: Scalars['Int'];
  dateCreated?: Maybe<Scalars['Timestamp']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Photo>;
  avatar?: Maybe<Photo>;
  sproutToHarvest?: Maybe<Scalars['Int']>;
  lifeCycles?: Maybe<Array<Maybe<LifeCycle>>>;
};

export type AddPhotoMutationVariables = Exact<{
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
}>;


export type AddPhotoMutation = (
  { __typename?: 'Mutation' }
  & { addPhoto?: Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
  )> }
);

export type GetPhotosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhotosQuery = (
  { __typename?: 'Query' }
  & { photos?: Maybe<Array<Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
  )>>> }
);

export type GetPhotoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPhotoQuery = (
  { __typename?: 'Query' }
  & { photo?: Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
  )> }
);

export type AddPlantMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type AddPlantMutation = (
  { __typename?: 'Mutation' }
  & { addPlant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name'>
  )> }
);

export type GetPlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlantsQuery = (
  { __typename?: 'Query' }
  & { plants?: Maybe<Array<Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name'>
  )>>> }
);

export type GetPlantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'name' | 'dateCreated'>
    & { species?: Maybe<(
      { __typename?: 'Species' }
      & Pick<Species, 'name'>
    )>, photos?: Maybe<Array<Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url' | 'title'>
    )>>>, coverPhoto?: Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url'>
    )> }
  )> }
);

export type GetPlantCoverPhotoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantCoverPhotoQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & { coverPhoto?: Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url'>
    )> }
  )> }
);

export type GetPlantInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantInfoQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name' | 'dateCreated'>
    & { species?: Maybe<(
      { __typename?: 'Species' }
      & Pick<Species, 'name'>
    )> }
  )> }
);

export type GetPlantPhotosQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantPhotosQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & { photos?: Maybe<Array<Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'id' | 'url' | 'title' | 'dateCreated'>
    )>>> }
  )> }
);

export type AddSpeciesMutationVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type AddSpeciesMutation = (
  { __typename?: 'Mutation' }
  & { addSpecies?: Maybe<(
    { __typename?: 'Species' }
    & Pick<Species, 'id' | 'name' | 'description'>
  )> }
);

export type GetSpeciesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSpeciesQuery = (
  { __typename?: 'Query' }
  & { species?: Maybe<(
    { __typename?: 'Species' }
    & Pick<Species, 'name' | 'description'>
  )> }
);

export type GetAllSpeciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpeciesQuery = (
  { __typename?: 'Query' }
  & { allSpecies?: Maybe<Array<Maybe<(
    { __typename?: 'Species' }
    & Pick<Species, 'id' | 'name'>
  )>>> }
);


export const AddPhotoDocument = gql`
    mutation addPhoto($url: String!, $title: String) {
  addPhoto(url: $url, title: $title) {
    id
    url
    title
    dateCreated
  }
}
    `;
export type AddPhotoMutationFn = Apollo.MutationFunction<AddPhotoMutation, AddPhotoMutationVariables>;

/**
 * __useAddPhotoMutation__
 *
 * To run a mutation, you first call `useAddPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPhotoMutation, { data, loading, error }] = useAddPhotoMutation({
 *   variables: {
 *      url: // value for 'url'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddPhotoMutation(baseOptions?: Apollo.MutationHookOptions<AddPhotoMutation, AddPhotoMutationVariables>) {
        return Apollo.useMutation<AddPhotoMutation, AddPhotoMutationVariables>(AddPhotoDocument, baseOptions);
      }
export type AddPhotoMutationHookResult = ReturnType<typeof useAddPhotoMutation>;
export type AddPhotoMutationResult = Apollo.MutationResult<AddPhotoMutation>;
export type AddPhotoMutationOptions = Apollo.BaseMutationOptions<AddPhotoMutation, AddPhotoMutationVariables>;
export const GetPhotosDocument = gql`
    query getPhotos {
  photos {
    id
    url
    title
    dateCreated
  }
}
    `;

/**
 * __useGetPhotosQuery__
 *
 * To run a query within a React component, call `useGetPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhotosQuery(baseOptions?: Apollo.QueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>) {
        return Apollo.useQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, baseOptions);
      }
export function useGetPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>) {
          return Apollo.useLazyQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, baseOptions);
        }
export type GetPhotosQueryHookResult = ReturnType<typeof useGetPhotosQuery>;
export type GetPhotosLazyQueryHookResult = ReturnType<typeof useGetPhotosLazyQuery>;
export type GetPhotosQueryResult = Apollo.QueryResult<GetPhotosQuery, GetPhotosQueryVariables>;
export const GetPhotoDocument = gql`
    query getPhoto($id: Int!) {
  photo(id: $id) {
    id
    url
    title
    dateCreated
  }
}
    `;

/**
 * __useGetPhotoQuery__
 *
 * To run a query within a React component, call `useGetPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhotoQuery(baseOptions?: Apollo.QueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
        return Apollo.useQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, baseOptions);
      }
export function useGetPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
          return Apollo.useLazyQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, baseOptions);
        }
export type GetPhotoQueryHookResult = ReturnType<typeof useGetPhotoQuery>;
export type GetPhotoLazyQueryHookResult = ReturnType<typeof useGetPhotoLazyQuery>;
export type GetPhotoQueryResult = Apollo.QueryResult<GetPhotoQuery, GetPhotoQueryVariables>;
export const AddPlantDocument = gql`
    mutation addPlant($name: String) {
  addPlant(name: $name) {
    id
    name
  }
}
    `;
export type AddPlantMutationFn = Apollo.MutationFunction<AddPlantMutation, AddPlantMutationVariables>;

/**
 * __useAddPlantMutation__
 *
 * To run a mutation, you first call `useAddPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlantMutation, { data, loading, error }] = useAddPlantMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddPlantMutation(baseOptions?: Apollo.MutationHookOptions<AddPlantMutation, AddPlantMutationVariables>) {
        return Apollo.useMutation<AddPlantMutation, AddPlantMutationVariables>(AddPlantDocument, baseOptions);
      }
export type AddPlantMutationHookResult = ReturnType<typeof useAddPlantMutation>;
export type AddPlantMutationResult = Apollo.MutationResult<AddPlantMutation>;
export type AddPlantMutationOptions = Apollo.BaseMutationOptions<AddPlantMutation, AddPlantMutationVariables>;
export const GetPlantsDocument = gql`
    query getPlants {
  plants {
    id
    name
  }
}
    `;

/**
 * __useGetPlantsQuery__
 *
 * To run a query within a React component, call `useGetPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlantsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantsQuery, GetPlantsQueryVariables>) {
        return Apollo.useQuery<GetPlantsQuery, GetPlantsQueryVariables>(GetPlantsDocument, baseOptions);
      }
export function useGetPlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantsQuery, GetPlantsQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantsQuery, GetPlantsQueryVariables>(GetPlantsDocument, baseOptions);
        }
export type GetPlantsQueryHookResult = ReturnType<typeof useGetPlantsQuery>;
export type GetPlantsLazyQueryHookResult = ReturnType<typeof useGetPlantsLazyQuery>;
export type GetPlantsQueryResult = Apollo.QueryResult<GetPlantsQuery, GetPlantsQueryVariables>;
export const GetPlantDocument = gql`
    query getPlant($id: Int!) {
  plant(id: $id) {
    name
    species {
      name
    }
    dateCreated
    photos {
      url
      title
    }
    coverPhoto {
      url
    }
  }
}
    `;

/**
 * __useGetPlantQuery__
 *
 * To run a query within a React component, call `useGetPlantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantQuery, GetPlantQueryVariables>) {
        return Apollo.useQuery<GetPlantQuery, GetPlantQueryVariables>(GetPlantDocument, baseOptions);
      }
export function useGetPlantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantQuery, GetPlantQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantQuery, GetPlantQueryVariables>(GetPlantDocument, baseOptions);
        }
export type GetPlantQueryHookResult = ReturnType<typeof useGetPlantQuery>;
export type GetPlantLazyQueryHookResult = ReturnType<typeof useGetPlantLazyQuery>;
export type GetPlantQueryResult = Apollo.QueryResult<GetPlantQuery, GetPlantQueryVariables>;
export const GetPlantCoverPhotoDocument = gql`
    query getPlantCoverPhoto($id: Int!) {
  plant(id: $id) {
    coverPhoto {
      url
    }
  }
}
    `;

/**
 * __useGetPlantCoverPhotoQuery__
 *
 * To run a query within a React component, call `useGetPlantCoverPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantCoverPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantCoverPhotoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantCoverPhotoQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>) {
        return Apollo.useQuery<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>(GetPlantCoverPhotoDocument, baseOptions);
      }
export function useGetPlantCoverPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>(GetPlantCoverPhotoDocument, baseOptions);
        }
export type GetPlantCoverPhotoQueryHookResult = ReturnType<typeof useGetPlantCoverPhotoQuery>;
export type GetPlantCoverPhotoLazyQueryHookResult = ReturnType<typeof useGetPlantCoverPhotoLazyQuery>;
export type GetPlantCoverPhotoQueryResult = Apollo.QueryResult<GetPlantCoverPhotoQuery, GetPlantCoverPhotoQueryVariables>;
export const GetPlantInfoDocument = gql`
    query getPlantInfo($id: Int!) {
  plant(id: $id) {
    id
    name
    species {
      name
    }
    dateCreated
  }
}
    `;

/**
 * __useGetPlantInfoQuery__
 *
 * To run a query within a React component, call `useGetPlantInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantInfoQuery, GetPlantInfoQueryVariables>) {
        return Apollo.useQuery<GetPlantInfoQuery, GetPlantInfoQueryVariables>(GetPlantInfoDocument, baseOptions);
      }
export function useGetPlantInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantInfoQuery, GetPlantInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantInfoQuery, GetPlantInfoQueryVariables>(GetPlantInfoDocument, baseOptions);
        }
export type GetPlantInfoQueryHookResult = ReturnType<typeof useGetPlantInfoQuery>;
export type GetPlantInfoLazyQueryHookResult = ReturnType<typeof useGetPlantInfoLazyQuery>;
export type GetPlantInfoQueryResult = Apollo.QueryResult<GetPlantInfoQuery, GetPlantInfoQueryVariables>;
export const GetPlantPhotosDocument = gql`
    query getPlantPhotos($id: Int!) {
  plant(id: $id) {
    photos {
      id
      url
      title
      dateCreated
    }
  }
}
    `;

/**
 * __useGetPlantPhotosQuery__
 *
 * To run a query within a React component, call `useGetPlantPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantPhotosQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantPhotosQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>) {
        return Apollo.useQuery<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>(GetPlantPhotosDocument, baseOptions);
      }
export function useGetPlantPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>(GetPlantPhotosDocument, baseOptions);
        }
export type GetPlantPhotosQueryHookResult = ReturnType<typeof useGetPlantPhotosQuery>;
export type GetPlantPhotosLazyQueryHookResult = ReturnType<typeof useGetPlantPhotosLazyQuery>;
export type GetPlantPhotosQueryResult = Apollo.QueryResult<GetPlantPhotosQuery, GetPlantPhotosQueryVariables>;
export const AddSpeciesDocument = gql`
    mutation addSpecies($name: String!, $description: String) {
  addSpecies(name: $name, description: $description) {
    id
    name
    description
  }
}
    `;
export type AddSpeciesMutationFn = Apollo.MutationFunction<AddSpeciesMutation, AddSpeciesMutationVariables>;

/**
 * __useAddSpeciesMutation__
 *
 * To run a mutation, you first call `useAddSpeciesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSpeciesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSpeciesMutation, { data, loading, error }] = useAddSpeciesMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddSpeciesMutation(baseOptions?: Apollo.MutationHookOptions<AddSpeciesMutation, AddSpeciesMutationVariables>) {
        return Apollo.useMutation<AddSpeciesMutation, AddSpeciesMutationVariables>(AddSpeciesDocument, baseOptions);
      }
export type AddSpeciesMutationHookResult = ReturnType<typeof useAddSpeciesMutation>;
export type AddSpeciesMutationResult = Apollo.MutationResult<AddSpeciesMutation>;
export type AddSpeciesMutationOptions = Apollo.BaseMutationOptions<AddSpeciesMutation, AddSpeciesMutationVariables>;
export const GetSpeciesDocument = gql`
    query getSpecies($id: Int!) {
  species(id: $id) {
    name
    description
  }
}
    `;

/**
 * __useGetSpeciesQuery__
 *
 * To run a query within a React component, call `useGetSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpeciesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpeciesQuery(baseOptions?: Apollo.QueryHookOptions<GetSpeciesQuery, GetSpeciesQueryVariables>) {
        return Apollo.useQuery<GetSpeciesQuery, GetSpeciesQueryVariables>(GetSpeciesDocument, baseOptions);
      }
export function useGetSpeciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpeciesQuery, GetSpeciesQueryVariables>) {
          return Apollo.useLazyQuery<GetSpeciesQuery, GetSpeciesQueryVariables>(GetSpeciesDocument, baseOptions);
        }
export type GetSpeciesQueryHookResult = ReturnType<typeof useGetSpeciesQuery>;
export type GetSpeciesLazyQueryHookResult = ReturnType<typeof useGetSpeciesLazyQuery>;
export type GetSpeciesQueryResult = Apollo.QueryResult<GetSpeciesQuery, GetSpeciesQueryVariables>;
export const GetAllSpeciesDocument = gql`
    query getAllSpecies {
  allSpecies {
    id
    name
  }
}
    `;

/**
 * __useGetAllSpeciesQuery__
 *
 * To run a query within a React component, call `useGetAllSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSpeciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSpeciesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>) {
        return Apollo.useQuery<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>(GetAllSpeciesDocument, baseOptions);
      }
export function useGetAllSpeciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>(GetAllSpeciesDocument, baseOptions);
        }
export type GetAllSpeciesQueryHookResult = ReturnType<typeof useGetAllSpeciesQuery>;
export type GetAllSpeciesLazyQueryHookResult = ReturnType<typeof useGetAllSpeciesLazyQuery>;
export type GetAllSpeciesQueryResult = Apollo.QueryResult<GetAllSpeciesQuery, GetAllSpeciesQueryVariables>;