import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Timestamp: any;
};


export enum SortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export enum LiquidUnit {
  Gill = 'GILL',
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

export enum ElectricalConductivityUnit {
  SiemensPerSquareMeterPerMole = 'SIEMENS_PER_SQUARE_METER_PER_MOLE',
  MillisiemensPerMeter = 'MILLISIEMENS_PER_METER',
  MillisiemensPerCentimeter = 'MILLISIEMENS_PER_CENTIMETER'
}

export enum LightBulbType {
  Hid = 'HID',
  Mh = 'MH',
  Cmh = 'CMH',
  Cdm = 'CDM',
  Hps = 'HPS',
  Led = 'LED',
  Cfl = 'CFL',
  Ccfl = 'CCFL'
}

export enum LightBulbColor {
  Uva = 'UVA',
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED',
  FarRed = 'FAR_RED',
  Infrared = 'INFRARED'
}

export type Environment = BaseDbModel & {
  __typename?: 'Environment';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  idealWaterAmount?: Maybe<Scalars['Float']>;
  idealWaterAmountUnit?: Maybe<LiquidUnit>;
  idealWaterAmountPerTimePeriod?: Maybe<Scalars['Int']>;
  idealWaterAmountPerTimePeriodUnit?: Maybe<TimeUnit>;
  idealTemperatureMin?: Maybe<Scalars['Float']>;
  idealTemperatueMax?: Maybe<Scalars['Float']>;
  idealTemperatureMinUnit?: Maybe<TemperatureUnit>;
  idealTemperatureMaxUnit?: Maybe<TemperatureUnit>;
  idealHumidityMin?: Maybe<Scalars['Float']>;
  idealHumidityMax?: Maybe<Scalars['Float']>;
  idealHumidityMinUnit?: Maybe<HumidityUnit>;
  idealHumidityMaxUnit?: Maybe<HumidityUnit>;
  lightOnTime?: Maybe<Scalars['Int']>;
  lightOnTimeUnit?: Maybe<TimeUnit>;
  lightOnTimePerTimePeriod?: Maybe<Scalars['Int']>;
  lightOnTimePerTimePeriodUnit?: Maybe<TimeUnit>;
  lightBulbTemplates?: Maybe<Array<Maybe<LightBulbTemplate>>>;
  desiredPH?: Maybe<Scalars['Float']>;
  phMinimum?: Maybe<Scalars['Float']>;
  phMaximum?: Maybe<Scalars['Float']>;
  desiredElectricalConductivity?: Maybe<Scalars['Float']>;
  desiredElectricalConductivityUnit?: Maybe<ElectricalConductivityUnit>;
  electricalConductivityMin?: Maybe<Scalars['Float']>;
  electricalConductivityMax?: Maybe<Scalars['Float']>;
  electricalConductivityMinUnit?: Maybe<ElectricalConductivityUnit>;
  electricalConductivityMaxUnit?: Maybe<ElectricalConductivityUnit>;
};

export type Query = {
  __typename?: 'Query';
  allSpecies?: Maybe<Array<Maybe<Species>>>;
  environment?: Maybe<Environment>;
  environments?: Maybe<Array<Maybe<Environment>>>;
  event?: Maybe<Event>;
  events?: Maybe<Array<Maybe<Event>>>;
  lightBulbTemplate?: Maybe<LightBulbTemplate>;
  lightBulbTemplates?: Maybe<Array<Maybe<LightBulbTemplate>>>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  plant?: Maybe<Plant>;
  plantStage?: Maybe<PlantStage>;
  plantStages?: Maybe<Array<Maybe<PlantStage>>>;
  plants?: Maybe<Array<Maybe<Plant>>>;
  species?: Maybe<Species>;
  speciesPlantStage?: Maybe<SpeciesPlantStage>;
  speciesPlantStages?: Maybe<Array<Maybe<SpeciesPlantStage>>>;
};


export type QueryEnvironmentArgs = {
  id: Scalars['Int'];
};


export type QueryEventArgs = {
  eventTargetId: Scalars['Int'];
  eventTargetType: EventTargetType;
  eventType?: Maybe<EventType>;
  excludeEventTypes?: Maybe<Array<Maybe<EventType>>>;
  sortDirection?: Maybe<SortDirection>;
  eventTimeMinimum?: Maybe<Scalars['Timestamp']>;
  eventTimeMaximum?: Maybe<Scalars['Timestamp']>;
};


export type QueryEventsArgs = {
  eventTargetId: Scalars['Int'];
  eventTargetType: EventTargetType;
  eventType?: Maybe<EventType>;
  excludeEventTypes?: Maybe<Array<Maybe<EventType>>>;
  limitPerType?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortDirection>;
  eventTimeMinimum?: Maybe<Scalars['Timestamp']>;
  eventTimeMaximum?: Maybe<Scalars['Timestamp']>;
};


export type QueryLightBulbTemplateArgs = {
  id: Scalars['Int'];
};


export type QueryPhotoArgs = {
  id: Scalars['Int'];
};


export type QueryPlantArgs = {
  id: Scalars['Int'];
};


export type QueryPlantStageArgs = {
  id: Scalars['Int'];
  speciesId?: Maybe<Scalars['Int']>;
};


export type QuerySpeciesArgs = {
  id: Scalars['Int'];
};


export type QuerySpeciesPlantStageArgs = {
  id: Scalars['Int'];
};

export enum EventTargetType {
  Plant = 'PLANT'
}

export enum EventType {
  Water = 'WATER',
  HumidityReading = 'HUMIDITY_READING',
  TemperatureReading = 'TEMPERATURE_READING',
  PhReading = 'PH_READING',
  EcReading = 'EC_READING',
  PlantStageChange = 'PLANT_STAGE_CHANGE',
  LightChange = 'LIGHT_CHANGE'
}

export type EcEventData = BaseEventData & {
  __typename?: 'ECEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  electricalConductivity?: Maybe<Scalars['Float']>;
  electricalConductivityUnit?: Maybe<ElectricalConductivityUnit>;
  eventTime: Scalars['Timestamp'];
};

export type HumidityEventData = BaseEventData & {
  __typename?: 'HumidityEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  humidity?: Maybe<Scalars['Float']>;
  humidityUnit?: Maybe<HumidityUnit>;
  eventTime: Scalars['Timestamp'];
};

export type LightEventData = BaseEventData & {
  __typename?: 'LightEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  previousLightOn?: Maybe<Scalars['Boolean']>;
  lightOn?: Maybe<Scalars['Boolean']>;
  bulbType?: Maybe<LightBulbType>;
  wattage?: Maybe<Scalars['Float']>;
  lumens?: Maybe<Scalars['Float']>;
  color?: Maybe<LightBulbColor>;
  eventTime: Scalars['Timestamp'];
};

export type PhEventData = BaseEventData & {
  __typename?: 'PHEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  pH?: Maybe<Scalars['Float']>;
  eventTime: Scalars['Timestamp'];
};

export type PlantStageEventData = BaseEventData & {
  __typename?: 'PlantStageEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  plantStage?: Maybe<PlantStage>;
  eventTime: Scalars['Timestamp'];
};

export type TemperatureEventData = BaseEventData & {
  __typename?: 'TemperatureEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  temperature?: Maybe<Scalars['Float']>;
  temperatureUnit?: Maybe<TemperatureUnit>;
  eventTime: Scalars['Timestamp'];
};

export type WaterEventData = BaseEventData & {
  __typename?: 'WaterEventData';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  amount?: Maybe<Scalars['Float']>;
  amountUnit?: Maybe<LiquidUnit>;
  temperature?: Maybe<Scalars['Float']>;
  temperatureUnit?: Maybe<TemperatureUnit>;
  eventTime: Scalars['Timestamp'];
};

export type BaseEventData = {
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  eventTime: Scalars['Timestamp'];
};

export type EventTarget = Plant;

export type EventData = WaterEventData | PlantStageEventData | TemperatureEventData | HumidityEventData | PhEventData | EcEventData | LightEventData;

export type Event = Node & {
  __typename?: 'Event';
  id: Scalars['Int'];
  type: EventType;
  data?: Maybe<EventData>;
  targets?: Maybe<Array<Maybe<EventTarget>>>;
};

export type Node = {
  id: Scalars['Int'];
};

export type BaseDbModel = {
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
};

export type LightBulbTemplate = BaseDbModel & {
  __typename?: 'LightBulbTemplate';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bulbType?: Maybe<LightBulbType>;
  wattage?: Maybe<Scalars['Float']>;
  lumens?: Maybe<Scalars['Float']>;
  color?: Maybe<LightBulbColor>;
};

export type Photo = BaseDbModel & {
  __typename?: 'Photo';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
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

export type PlantStage = BaseDbModel & {
  __typename?: 'PlantStage';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  defaultTimeSpanInMinutes?: Maybe<Scalars['Int']>;
  defaultEnvironment?: Maybe<Environment>;
};

export type Plant = BaseDbModel & {
  __typename?: 'Plant';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name?: Maybe<Scalars['String']>;
  species?: Maybe<Species>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  coverPhoto?: Maybe<Photo>;
  avatar?: Maybe<Photo>;
  currentPlantStage?: Maybe<PlantStage>;
  currentSpeciesPlantStage?: Maybe<SpeciesPlantStage>;
};

export type Species = BaseDbModel & {
  __typename?: 'Species';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Photo>;
  avatar?: Maybe<Photo>;
  sproutToHarvestInHours?: Maybe<Scalars['Int']>;
  speciesPlantStages?: Maybe<Array<Maybe<SpeciesPlantStage>>>;
};

export type SpeciesPlantStage = BaseDbModel & {
  __typename?: 'SpeciesPlantStage';
  id: Scalars['Int'];
  dateCreated: Scalars['Timestamp'];
  idealEnvironment?: Maybe<Environment>;
  plantStage?: Maybe<PlantStage>;
  plantStageTimeSpanInMinutes?: Maybe<Scalars['Int']>;
};

export type EnvironmentConditionsFragment = (
  { __typename?: 'Environment' }
  & Pick<Environment, 'idealWaterAmount' | 'idealWaterAmountUnit' | 'idealWaterAmountPerTimePeriod' | 'idealWaterAmountPerTimePeriodUnit' | 'idealTemperatureMin' | 'idealTemperatueMax' | 'idealTemperatureMinUnit' | 'idealTemperatureMaxUnit' | 'idealHumidityMin' | 'idealHumidityMax' | 'idealHumidityMinUnit' | 'idealHumidityMaxUnit' | 'lightOnTime' | 'lightOnTimeUnit' | 'lightOnTimePerTimePeriod' | 'lightOnTimePerTimePeriodUnit' | 'desiredPH' | 'phMinimum' | 'phMaximum' | 'desiredElectricalConductivity' | 'desiredElectricalConductivityUnit' | 'electricalConductivityMin' | 'electricalConductivityMax' | 'electricalConductivityMinUnit' | 'electricalConductivityMaxUnit'>
  & { lightBulbTemplates?: Maybe<Array<Maybe<(
    { __typename?: 'LightBulbTemplate' }
    & LightBulbTemplateDetailsFragment
  )>>> }
);

export type GetTargetEventsQueryVariables = Exact<{
  eventTargetId: Scalars['Int'];
  eventTargetType: EventTargetType;
  excludeEventTypes?: Maybe<Array<Maybe<EventType>>>;
  limitPerType?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortDirection>;
}>;


export type GetTargetEventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime' | 'amount' | 'amountUnit' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'PlantStageEventData' }
      & Pick<PlantStageEventData, 'id' | 'eventTime'>
      & { plantStage?: Maybe<(
        { __typename?: 'PlantStage' }
        & Pick<PlantStage, 'id' | 'name' | 'description'>
      )> }
    ) | (
      { __typename: 'TemperatureEventData' }
      & Pick<TemperatureEventData, 'id' | 'eventTime' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'HumidityEventData' }
      & Pick<HumidityEventData, 'id' | 'eventTime' | 'humidity' | 'humidityUnit'>
    ) | (
      { __typename: 'PHEventData' }
      & Pick<PhEventData, 'id' | 'eventTime' | 'pH'>
    ) | (
      { __typename: 'ECEventData' }
      & Pick<EcEventData, 'id' | 'eventTime' | 'electricalConductivity' | 'electricalConductivityUnit'>
    ) | (
      { __typename: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime' | 'lightOn' | 'color' | 'lumens' | 'wattage' | 'bulbType'>
    )> }
  )>>> }
);

export type GetTargetRecentEventsQueryVariables = Exact<{
  eventTargetId: Scalars['Int'];
  eventTargetType: EventTargetType;
  eventType?: Maybe<EventType>;
  limitPerType?: Maybe<Scalars['Int']>;
}>;


export type GetTargetRecentEventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime' | 'amount' | 'amountUnit' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'PlantStageEventData' }
      & Pick<PlantStageEventData, 'id' | 'eventTime'>
      & { plantStage?: Maybe<(
        { __typename?: 'PlantStage' }
        & Pick<PlantStage, 'id' | 'name' | 'description'>
      )> }
    ) | (
      { __typename: 'TemperatureEventData' }
      & Pick<TemperatureEventData, 'id' | 'eventTime' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'HumidityEventData' }
      & Pick<HumidityEventData, 'id' | 'eventTime' | 'humidity' | 'humidityUnit'>
    ) | (
      { __typename: 'PHEventData' }
      & Pick<PhEventData, 'id' | 'eventTime' | 'pH'>
    ) | (
      { __typename: 'ECEventData' }
      & Pick<EcEventData, 'id' | 'eventTime' | 'electricalConductivity' | 'electricalConductivityUnit'>
    ) | (
      { __typename: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime' | 'lightOn' | 'color' | 'lumens' | 'wattage' | 'bulbType'>
    )> }
  )>>> }
);

export type LightBulbTemplateDetailsFragment = (
  { __typename?: 'LightBulbTemplate' }
  & Pick<LightBulbTemplate, 'id' | 'name' | 'description' | 'bulbType' | 'wattage' | 'lumens' | 'color'>
);

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

export type GetPlantStageQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantStageQuery = (
  { __typename?: 'Query' }
  & { plantStage?: Maybe<(
    { __typename?: 'PlantStage' }
    & Pick<PlantStage, 'name' | 'dateCreated' | 'description'>
    & { defaultEnvironment?: Maybe<(
      { __typename?: 'Environment' }
      & Pick<Environment, 'id' | 'name'>
    )> }
  )> }
);

export type GetAllPlantStagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlantStagesQuery = (
  { __typename?: 'Query' }
  & { plantStages?: Maybe<Array<Maybe<(
    { __typename?: 'PlantStage' }
    & Pick<PlantStage, 'name' | 'dateCreated' | 'description'>
    & { defaultEnvironment?: Maybe<(
      { __typename?: 'Environment' }
      & Pick<Environment, 'id' | 'name'>
    )> }
  )>>> }
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
    & Pick<Plant, 'id' | 'name' | 'dateCreated'>
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
    & Pick<Plant, 'id'>
    & { coverPhoto?: Maybe<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'url'>
    )> }
  )> }
);

export type GetPlantHeaderQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantHeaderQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name'>
    & { species?: Maybe<(
      { __typename?: 'Species' }
      & Pick<Species, 'name'>
    )> }
  )> }
);

export type GetPlantSpeciesAndCurrentStageQueryVariables = Exact<{
  plantId: Scalars['Int'];
}>;


export type GetPlantSpeciesAndCurrentStageQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
    & { currentPlantStage?: Maybe<(
      { __typename?: 'PlantStage' }
      & Pick<PlantStage, 'id' | 'name'>
    )>, species?: Maybe<(
      { __typename?: 'Species' }
      & Pick<Species, 'id' | 'name'>
    )> }
  )> }
);

export type GetPlantCurrentEnvironmentQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantCurrentEnvironmentQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
    & { currentPlantStage?: Maybe<(
      { __typename?: 'PlantStage' }
      & Pick<PlantStage, 'id'>
      & { defaultEnvironment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id'>
        & EnvironmentConditionsFragment
      )> }
    )>, currentSpeciesPlantStage?: Maybe<(
      { __typename?: 'SpeciesPlantStage' }
      & Pick<SpeciesPlantStage, 'id'>
      & { idealEnvironment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id'>
        & EnvironmentConditionsFragment
      )> }
    )> }
  )> }
);

export type GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryVariables = Exact<{
  plantId: Scalars['Int'];
  eventType: EventType;
  eventTimeMinimum: Scalars['Timestamp'];
}>;


export type GetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
    & { currentPlantStage?: Maybe<(
      { __typename?: 'PlantStage' }
      & Pick<PlantStage, 'id'>
      & { defaultEnvironment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id'>
        & EnvironmentConditionsFragment
      )> }
    )>, currentSpeciesPlantStage?: Maybe<(
      { __typename?: 'SpeciesPlantStage' }
      & Pick<SpeciesPlantStage, 'id'>
      & { idealEnvironment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id'>
        & EnvironmentConditionsFragment
      )> }
    )> }
  )>, events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime' | 'amount' | 'amountUnit' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'PlantStageEventData' }
      & Pick<PlantStageEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'TemperatureEventData' }
      & Pick<TemperatureEventData, 'id' | 'eventTime' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'HumidityEventData' }
      & Pick<HumidityEventData, 'id' | 'eventTime' | 'humidity' | 'humidityUnit'>
    ) | (
      { __typename: 'PHEventData' }
      & Pick<PhEventData, 'id' | 'eventTime' | 'pH'>
    ) | (
      { __typename: 'ECEventData' }
      & Pick<EcEventData, 'id' | 'eventTime' | 'electricalConductivity' | 'electricalConductivityUnit'>
    ) | (
      { __typename: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime' | 'lightOn' | 'color' | 'lumens' | 'wattage' | 'bulbType'>
    )> }
  )>>> }
);

export type GetPlantRecentEventsAndCurrentIdealEnvironmentQueryVariables = Exact<{
  plantId: Scalars['Int'];
  limitPerType?: Maybe<Scalars['Int']>;
  eventType?: Maybe<EventType>;
  eventTimeMinimum?: Maybe<Scalars['Timestamp']>;
}>;


export type GetPlantRecentEventsAndCurrentIdealEnvironmentQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
    & { currentPlantStage?: Maybe<(
      { __typename?: 'PlantStage' }
      & Pick<PlantStage, 'id'>
      & { defaultEnvironment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id'>
        & EnvironmentConditionsFragment
      )> }
    )>, currentSpeciesPlantStage?: Maybe<(
      { __typename?: 'SpeciesPlantStage' }
      & Pick<SpeciesPlantStage, 'id'>
      & { idealEnvironment?: Maybe<(
        { __typename?: 'Environment' }
        & Pick<Environment, 'id'>
        & EnvironmentConditionsFragment
      )> }
    )> }
  )>, lightChangeEvents?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<{ __typename?: 'WaterEventData' } | { __typename?: 'PlantStageEventData' } | { __typename?: 'TemperatureEventData' } | { __typename?: 'HumidityEventData' } | { __typename?: 'PHEventData' } | { __typename?: 'ECEventData' } | (
      { __typename?: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime' | 'lightOn' | 'color' | 'lumens' | 'wattage' | 'bulbType'>
    )> }
  )>>>, waterEvents?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename?: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime' | 'amount' | 'amountUnit' | 'temperature' | 'temperatureUnit'>
    ) | { __typename?: 'PlantStageEventData' } | { __typename?: 'TemperatureEventData' } | { __typename?: 'HumidityEventData' } | { __typename?: 'PHEventData' } | { __typename?: 'ECEventData' } | { __typename?: 'LightEventData' }> }
  )>>>, events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'PlantStageEventData' }
      & Pick<PlantStageEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'TemperatureEventData' }
      & Pick<TemperatureEventData, 'id' | 'eventTime' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'HumidityEventData' }
      & Pick<HumidityEventData, 'id' | 'eventTime' | 'humidity' | 'humidityUnit'>
    ) | (
      { __typename: 'PHEventData' }
      & Pick<PhEventData, 'id' | 'eventTime' | 'pH'>
    ) | (
      { __typename: 'ECEventData' }
      & Pick<EcEventData, 'id' | 'eventTime' | 'electricalConductivity' | 'electricalConductivityUnit'>
    ) | (
      { __typename: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime'>
    )> }
  )>>> }
);

export type GetPlantEventsQueryVariables = Exact<{
  id: Scalars['Int'];
  eventType?: Maybe<EventType>;
  eventTimeMinimum?: Maybe<Scalars['Timestamp']>;
}>;


export type GetPlantEventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime' | 'amount' | 'amountUnit' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'PlantStageEventData' }
      & Pick<PlantStageEventData, 'id' | 'eventTime'>
      & { plantStage?: Maybe<(
        { __typename?: 'PlantStage' }
        & Pick<PlantStage, 'id' | 'name' | 'description'>
      )> }
    ) | (
      { __typename: 'TemperatureEventData' }
      & Pick<TemperatureEventData, 'id' | 'eventTime' | 'temperature' | 'temperatureUnit'>
    ) | (
      { __typename: 'HumidityEventData' }
      & Pick<HumidityEventData, 'id' | 'eventTime' | 'humidity' | 'humidityUnit'>
    ) | (
      { __typename: 'PHEventData' }
      & Pick<PhEventData, 'id' | 'eventTime' | 'pH'>
    ) | (
      { __typename: 'ECEventData' }
      & Pick<EcEventData, 'id' | 'eventTime' | 'electricalConductivity' | 'electricalConductivityUnit'>
    ) | (
      { __typename: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime' | 'lightOn' | 'previousLightOn' | 'color' | 'lumens' | 'wattage' | 'bulbType'>
    )> }
  )>>> }
);

export type GetPlantStageEventsQueryVariables = Exact<{
  plantId: Scalars['Int'];
}>;


export type GetPlantStageEventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type'>
    & { data?: Maybe<(
      { __typename: 'WaterEventData' }
      & Pick<WaterEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'PlantStageEventData' }
      & Pick<PlantStageEventData, 'id' | 'eventTime'>
      & { plantStage?: Maybe<(
        { __typename?: 'PlantStage' }
        & Pick<PlantStage, 'id' | 'name' | 'description'>
      )> }
    ) | (
      { __typename: 'TemperatureEventData' }
      & Pick<TemperatureEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'HumidityEventData' }
      & Pick<HumidityEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'PHEventData' }
      & Pick<PhEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'ECEventData' }
      & Pick<EcEventData, 'id' | 'eventTime'>
    ) | (
      { __typename: 'LightEventData' }
      & Pick<LightEventData, 'id' | 'eventTime'>
    )> }
  )>>> }
);

export type GetPlantPhotosQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlantPhotosQuery = (
  { __typename?: 'Query' }
  & { plant?: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
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

export const LightBulbTemplateDetailsFragmentDoc = gql`
    fragment LightBulbTemplateDetails on LightBulbTemplate {
  id
  name
  description
  bulbType
  wattage
  lumens
  color
}
    `;
export const EnvironmentConditionsFragmentDoc = gql`
    fragment EnvironmentConditions on Environment {
  idealWaterAmount
  idealWaterAmountUnit
  idealWaterAmountPerTimePeriod
  idealWaterAmountPerTimePeriodUnit
  idealTemperatureMin
  idealTemperatueMax
  idealTemperatureMinUnit
  idealTemperatureMaxUnit
  idealHumidityMin
  idealHumidityMax
  idealHumidityMinUnit
  idealHumidityMaxUnit
  lightOnTime
  lightOnTimeUnit
  lightOnTimePerTimePeriod
  lightOnTimePerTimePeriodUnit
  lightBulbTemplates {
    ...LightBulbTemplateDetails
  }
  desiredPH
  phMinimum
  phMaximum
  desiredElectricalConductivity
  desiredElectricalConductivityUnit
  electricalConductivityMin
  electricalConductivityMax
  electricalConductivityMinUnit
  electricalConductivityMaxUnit
}
    ${LightBulbTemplateDetailsFragmentDoc}`;
export const GetTargetEventsDocument = gql`
    query getTargetEvents($eventTargetId: Int!, $eventTargetType: EventTargetType!, $excludeEventTypes: [EventType], $limitPerType: Int, $sortDirection: SortDirection) {
  events(eventTargetId: $eventTargetId, eventTargetType: $eventTargetType, excludeEventTypes: $excludeEventTypes, limitPerType: $limitPerType, sortDirection: $sortDirection) {
    id
    type
    data {
      __typename
      ... on BaseEventData {
        id
        eventTime
      }
      ... on WaterEventData {
        id
        eventTime
        amount
        amountUnit
        temperature
        temperatureUnit
      }
      ... on PlantStageEventData {
        id
        eventTime
        plantStage {
          id
          name
          description
        }
      }
      ... on TemperatureEventData {
        id
        eventTime
        temperature
        temperatureUnit
      }
      ... on HumidityEventData {
        id
        eventTime
        humidity
        humidityUnit
      }
      ... on PHEventData {
        id
        eventTime
        pH
      }
      ... on ECEventData {
        id
        eventTime
        electricalConductivity
        electricalConductivityUnit
      }
      ... on LightEventData {
        id
        eventTime
        lightOn
        color
        lumens
        wattage
        bulbType
      }
    }
  }
}
    `;

/**
 * __useGetTargetEventsQuery__
 *
 * To run a query within a React component, call `useGetTargetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTargetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTargetEventsQuery({
 *   variables: {
 *      eventTargetId: // value for 'eventTargetId'
 *      eventTargetType: // value for 'eventTargetType'
 *      excludeEventTypes: // value for 'excludeEventTypes'
 *      limitPerType: // value for 'limitPerType'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetTargetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetTargetEventsQuery, GetTargetEventsQueryVariables>) {
        return Apollo.useQuery<GetTargetEventsQuery, GetTargetEventsQueryVariables>(GetTargetEventsDocument, baseOptions);
      }
export function useGetTargetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTargetEventsQuery, GetTargetEventsQueryVariables>) {
          return Apollo.useLazyQuery<GetTargetEventsQuery, GetTargetEventsQueryVariables>(GetTargetEventsDocument, baseOptions);
        }
export type GetTargetEventsQueryHookResult = ReturnType<typeof useGetTargetEventsQuery>;
export type GetTargetEventsLazyQueryHookResult = ReturnType<typeof useGetTargetEventsLazyQuery>;
export type GetTargetEventsQueryResult = Apollo.QueryResult<GetTargetEventsQuery, GetTargetEventsQueryVariables>;
export const GetTargetRecentEventsDocument = gql`
    query getTargetRecentEvents($eventTargetId: Int!, $eventTargetType: EventTargetType!, $eventType: EventType, $limitPerType: Int) {
  events(eventTargetId: $eventTargetId, eventTargetType: $eventTargetType, eventType: $eventType, limitPerType: $limitPerType, sortDirection: DESCENDING) {
    id
    type
    data {
      __typename
      ... on BaseEventData {
        id
        eventTime
      }
      ... on WaterEventData {
        id
        eventTime
        amount
        amountUnit
        temperature
        temperatureUnit
      }
      ... on PlantStageEventData {
        id
        eventTime
        plantStage {
          id
          name
          description
        }
      }
      ... on TemperatureEventData {
        id
        eventTime
        temperature
        temperatureUnit
      }
      ... on HumidityEventData {
        id
        eventTime
        humidity
        humidityUnit
      }
      ... on PHEventData {
        id
        eventTime
        pH
      }
      ... on ECEventData {
        id
        eventTime
        electricalConductivity
        electricalConductivityUnit
      }
      ... on LightEventData {
        id
        eventTime
        lightOn
        color
        lumens
        wattage
        bulbType
      }
    }
  }
}
    `;

/**
 * __useGetTargetRecentEventsQuery__
 *
 * To run a query within a React component, call `useGetTargetRecentEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTargetRecentEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTargetRecentEventsQuery({
 *   variables: {
 *      eventTargetId: // value for 'eventTargetId'
 *      eventTargetType: // value for 'eventTargetType'
 *      eventType: // value for 'eventType'
 *      limitPerType: // value for 'limitPerType'
 *   },
 * });
 */
export function useGetTargetRecentEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetTargetRecentEventsQuery, GetTargetRecentEventsQueryVariables>) {
        return Apollo.useQuery<GetTargetRecentEventsQuery, GetTargetRecentEventsQueryVariables>(GetTargetRecentEventsDocument, baseOptions);
      }
export function useGetTargetRecentEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTargetRecentEventsQuery, GetTargetRecentEventsQueryVariables>) {
          return Apollo.useLazyQuery<GetTargetRecentEventsQuery, GetTargetRecentEventsQueryVariables>(GetTargetRecentEventsDocument, baseOptions);
        }
export type GetTargetRecentEventsQueryHookResult = ReturnType<typeof useGetTargetRecentEventsQuery>;
export type GetTargetRecentEventsLazyQueryHookResult = ReturnType<typeof useGetTargetRecentEventsLazyQuery>;
export type GetTargetRecentEventsQueryResult = Apollo.QueryResult<GetTargetRecentEventsQuery, GetTargetRecentEventsQueryVariables>;
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
export const GetPlantStageDocument = gql`
    query getPlantStage($id: Int!) {
  plantStage(id: $id) {
    name
    dateCreated
    description
    defaultEnvironment {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPlantStageQuery__
 *
 * To run a query within a React component, call `useGetPlantStageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantStageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantStageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantStageQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantStageQuery, GetPlantStageQueryVariables>) {
        return Apollo.useQuery<GetPlantStageQuery, GetPlantStageQueryVariables>(GetPlantStageDocument, baseOptions);
      }
export function useGetPlantStageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantStageQuery, GetPlantStageQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantStageQuery, GetPlantStageQueryVariables>(GetPlantStageDocument, baseOptions);
        }
export type GetPlantStageQueryHookResult = ReturnType<typeof useGetPlantStageQuery>;
export type GetPlantStageLazyQueryHookResult = ReturnType<typeof useGetPlantStageLazyQuery>;
export type GetPlantStageQueryResult = Apollo.QueryResult<GetPlantStageQuery, GetPlantStageQueryVariables>;
export const GetAllPlantStagesDocument = gql`
    query getAllPlantStages {
  plantStages {
    name
    dateCreated
    description
    defaultEnvironment {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllPlantStagesQuery__
 *
 * To run a query within a React component, call `useGetAllPlantStagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPlantStagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPlantStagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPlantStagesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPlantStagesQuery, GetAllPlantStagesQueryVariables>) {
        return Apollo.useQuery<GetAllPlantStagesQuery, GetAllPlantStagesQueryVariables>(GetAllPlantStagesDocument, baseOptions);
      }
export function useGetAllPlantStagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPlantStagesQuery, GetAllPlantStagesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllPlantStagesQuery, GetAllPlantStagesQueryVariables>(GetAllPlantStagesDocument, baseOptions);
        }
export type GetAllPlantStagesQueryHookResult = ReturnType<typeof useGetAllPlantStagesQuery>;
export type GetAllPlantStagesLazyQueryHookResult = ReturnType<typeof useGetAllPlantStagesLazyQuery>;
export type GetAllPlantStagesQueryResult = Apollo.QueryResult<GetAllPlantStagesQuery, GetAllPlantStagesQueryVariables>;
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
    id
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
    id
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
export const GetPlantHeaderDocument = gql`
    query getPlantHeader($id: Int!) {
  plant(id: $id) {
    id
    name
    species {
      name
    }
  }
}
    `;

/**
 * __useGetPlantHeaderQuery__
 *
 * To run a query within a React component, call `useGetPlantHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantHeaderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantHeaderQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantHeaderQuery, GetPlantHeaderQueryVariables>) {
        return Apollo.useQuery<GetPlantHeaderQuery, GetPlantHeaderQueryVariables>(GetPlantHeaderDocument, baseOptions);
      }
export function useGetPlantHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantHeaderQuery, GetPlantHeaderQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantHeaderQuery, GetPlantHeaderQueryVariables>(GetPlantHeaderDocument, baseOptions);
        }
export type GetPlantHeaderQueryHookResult = ReturnType<typeof useGetPlantHeaderQuery>;
export type GetPlantHeaderLazyQueryHookResult = ReturnType<typeof useGetPlantHeaderLazyQuery>;
export type GetPlantHeaderQueryResult = Apollo.QueryResult<GetPlantHeaderQuery, GetPlantHeaderQueryVariables>;
export const GetPlantSpeciesAndCurrentStageDocument = gql`
    query getPlantSpeciesAndCurrentStage($plantId: Int!) {
  plant(id: $plantId) {
    id
    currentPlantStage {
      id
      name
    }
    species {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPlantSpeciesAndCurrentStageQuery__
 *
 * To run a query within a React component, call `useGetPlantSpeciesAndCurrentStageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantSpeciesAndCurrentStageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantSpeciesAndCurrentStageQuery({
 *   variables: {
 *      plantId: // value for 'plantId'
 *   },
 * });
 */
export function useGetPlantSpeciesAndCurrentStageQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantSpeciesAndCurrentStageQuery, GetPlantSpeciesAndCurrentStageQueryVariables>) {
        return Apollo.useQuery<GetPlantSpeciesAndCurrentStageQuery, GetPlantSpeciesAndCurrentStageQueryVariables>(GetPlantSpeciesAndCurrentStageDocument, baseOptions);
      }
export function useGetPlantSpeciesAndCurrentStageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantSpeciesAndCurrentStageQuery, GetPlantSpeciesAndCurrentStageQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantSpeciesAndCurrentStageQuery, GetPlantSpeciesAndCurrentStageQueryVariables>(GetPlantSpeciesAndCurrentStageDocument, baseOptions);
        }
export type GetPlantSpeciesAndCurrentStageQueryHookResult = ReturnType<typeof useGetPlantSpeciesAndCurrentStageQuery>;
export type GetPlantSpeciesAndCurrentStageLazyQueryHookResult = ReturnType<typeof useGetPlantSpeciesAndCurrentStageLazyQuery>;
export type GetPlantSpeciesAndCurrentStageQueryResult = Apollo.QueryResult<GetPlantSpeciesAndCurrentStageQuery, GetPlantSpeciesAndCurrentStageQueryVariables>;
export const GetPlantCurrentEnvironmentDocument = gql`
    query getPlantCurrentEnvironment($id: Int!) {
  plant(id: $id) {
    id
    currentPlantStage {
      id
      defaultEnvironment {
        id
        ...EnvironmentConditions
      }
    }
    currentSpeciesPlantStage {
      id
      idealEnvironment {
        id
        ...EnvironmentConditions
      }
    }
  }
}
    ${EnvironmentConditionsFragmentDoc}`;

/**
 * __useGetPlantCurrentEnvironmentQuery__
 *
 * To run a query within a React component, call `useGetPlantCurrentEnvironmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantCurrentEnvironmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantCurrentEnvironmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantCurrentEnvironmentQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantCurrentEnvironmentQuery, GetPlantCurrentEnvironmentQueryVariables>) {
        return Apollo.useQuery<GetPlantCurrentEnvironmentQuery, GetPlantCurrentEnvironmentQueryVariables>(GetPlantCurrentEnvironmentDocument, baseOptions);
      }
export function useGetPlantCurrentEnvironmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantCurrentEnvironmentQuery, GetPlantCurrentEnvironmentQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantCurrentEnvironmentQuery, GetPlantCurrentEnvironmentQueryVariables>(GetPlantCurrentEnvironmentDocument, baseOptions);
        }
export type GetPlantCurrentEnvironmentQueryHookResult = ReturnType<typeof useGetPlantCurrentEnvironmentQuery>;
export type GetPlantCurrentEnvironmentLazyQueryHookResult = ReturnType<typeof useGetPlantCurrentEnvironmentLazyQuery>;
export type GetPlantCurrentEnvironmentQueryResult = Apollo.QueryResult<GetPlantCurrentEnvironmentQuery, GetPlantCurrentEnvironmentQueryVariables>;
export const GetPlantRecentEventsForEventTypeWithIdealEnvironmentDocument = gql`
    query getPlantRecentEventsForEventTypeWithIdealEnvironment($plantId: Int!, $eventType: EventType!, $eventTimeMinimum: Timestamp!) {
  plant(id: $plantId) {
    id
    currentPlantStage {
      id
      defaultEnvironment {
        id
        ...EnvironmentConditions
      }
    }
    currentSpeciesPlantStage {
      id
      idealEnvironment {
        id
        ...EnvironmentConditions
      }
    }
  }
  events(eventTargetId: $plantId, eventTargetType: PLANT, eventType: $eventType, sortDirection: DESCENDING, eventTimeMinimum: $eventTimeMinimum) {
    id
    type
    data {
      __typename
      ... on BaseEventData {
        id
        eventTime
      }
      ... on TemperatureEventData {
        id
        eventTime
        temperature
        temperatureUnit
      }
      ... on HumidityEventData {
        id
        eventTime
        humidity
        humidityUnit
      }
      ... on PHEventData {
        id
        eventTime
        pH
      }
      ... on ECEventData {
        id
        eventTime
        electricalConductivity
        electricalConductivityUnit
      }
      ... on LightEventData {
        id
        eventTime
        lightOn
        color
        lumens
        wattage
        bulbType
      }
      ... on WaterEventData {
        id
        eventTime
        amount
        amountUnit
        temperature
        temperatureUnit
      }
    }
  }
}
    ${EnvironmentConditionsFragmentDoc}`;

/**
 * __useGetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery__
 *
 * To run a query within a React component, call `useGetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery({
 *   variables: {
 *      plantId: // value for 'plantId'
 *      eventType: // value for 'eventType'
 *      eventTimeMinimum: // value for 'eventTimeMinimum'
 *   },
 * });
 */
export function useGetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery, GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryVariables>) {
        return Apollo.useQuery<GetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery, GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryVariables>(GetPlantRecentEventsForEventTypeWithIdealEnvironmentDocument, baseOptions);
      }
export function useGetPlantRecentEventsForEventTypeWithIdealEnvironmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery, GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery, GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryVariables>(GetPlantRecentEventsForEventTypeWithIdealEnvironmentDocument, baseOptions);
        }
export type GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryHookResult = ReturnType<typeof useGetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery>;
export type GetPlantRecentEventsForEventTypeWithIdealEnvironmentLazyQueryHookResult = ReturnType<typeof useGetPlantRecentEventsForEventTypeWithIdealEnvironmentLazyQuery>;
export type GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryResult = Apollo.QueryResult<GetPlantRecentEventsForEventTypeWithIdealEnvironmentQuery, GetPlantRecentEventsForEventTypeWithIdealEnvironmentQueryVariables>;
export const GetPlantRecentEventsAndCurrentIdealEnvironmentDocument = gql`
    query getPlantRecentEventsAndCurrentIdealEnvironment($plantId: Int!, $limitPerType: Int, $eventType: EventType, $eventTimeMinimum: Timestamp) {
  plant(id: $plantId) {
    id
    currentPlantStage {
      id
      defaultEnvironment {
        id
        ...EnvironmentConditions
      }
    }
    currentSpeciesPlantStage {
      id
      idealEnvironment {
        id
        ...EnvironmentConditions
      }
    }
  }
  lightChangeEvents: events(eventTargetId: $plantId, eventTargetType: PLANT, eventType: LIGHT_CHANGE, eventTimeMinimum: $eventTimeMinimum) {
    id
    type
    data {
      ... on LightEventData {
        id
        eventTime
        lightOn
        color
        lumens
        wattage
        bulbType
      }
    }
  }
  waterEvents: events(eventTargetId: $plantId, eventTargetType: PLANT, eventType: WATER, eventTimeMinimum: $eventTimeMinimum) {
    id
    type
    data {
      ... on WaterEventData {
        id
        eventTime
        amount
        amountUnit
        temperature
        temperatureUnit
      }
    }
  }
  events(eventTargetId: $plantId, eventTargetType: PLANT, limitPerType: $limitPerType, excludeEventTypes: [PLANT_STAGE_CHANGE, WATER, LIGHT_CHANGE], eventType: $eventType, sortDirection: DESCENDING, eventTimeMinimum: $eventTimeMinimum) {
    id
    type
    data {
      __typename
      ... on BaseEventData {
        id
        eventTime
      }
      ... on TemperatureEventData {
        id
        eventTime
        temperature
        temperatureUnit
      }
      ... on HumidityEventData {
        id
        eventTime
        humidity
        humidityUnit
      }
      ... on PHEventData {
        id
        eventTime
        pH
      }
      ... on ECEventData {
        id
        eventTime
        electricalConductivity
        electricalConductivityUnit
      }
    }
  }
}
    ${EnvironmentConditionsFragmentDoc}`;

/**
 * __useGetPlantRecentEventsAndCurrentIdealEnvironmentQuery__
 *
 * To run a query within a React component, call `useGetPlantRecentEventsAndCurrentIdealEnvironmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantRecentEventsAndCurrentIdealEnvironmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantRecentEventsAndCurrentIdealEnvironmentQuery({
 *   variables: {
 *      plantId: // value for 'plantId'
 *      limitPerType: // value for 'limitPerType'
 *      eventType: // value for 'eventType'
 *      eventTimeMinimum: // value for 'eventTimeMinimum'
 *   },
 * });
 */
export function useGetPlantRecentEventsAndCurrentIdealEnvironmentQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantRecentEventsAndCurrentIdealEnvironmentQuery, GetPlantRecentEventsAndCurrentIdealEnvironmentQueryVariables>) {
        return Apollo.useQuery<GetPlantRecentEventsAndCurrentIdealEnvironmentQuery, GetPlantRecentEventsAndCurrentIdealEnvironmentQueryVariables>(GetPlantRecentEventsAndCurrentIdealEnvironmentDocument, baseOptions);
      }
export function useGetPlantRecentEventsAndCurrentIdealEnvironmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantRecentEventsAndCurrentIdealEnvironmentQuery, GetPlantRecentEventsAndCurrentIdealEnvironmentQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantRecentEventsAndCurrentIdealEnvironmentQuery, GetPlantRecentEventsAndCurrentIdealEnvironmentQueryVariables>(GetPlantRecentEventsAndCurrentIdealEnvironmentDocument, baseOptions);
        }
export type GetPlantRecentEventsAndCurrentIdealEnvironmentQueryHookResult = ReturnType<typeof useGetPlantRecentEventsAndCurrentIdealEnvironmentQuery>;
export type GetPlantRecentEventsAndCurrentIdealEnvironmentLazyQueryHookResult = ReturnType<typeof useGetPlantRecentEventsAndCurrentIdealEnvironmentLazyQuery>;
export type GetPlantRecentEventsAndCurrentIdealEnvironmentQueryResult = Apollo.QueryResult<GetPlantRecentEventsAndCurrentIdealEnvironmentQuery, GetPlantRecentEventsAndCurrentIdealEnvironmentQueryVariables>;
export const GetPlantEventsDocument = gql`
    query getPlantEvents($id: Int!, $eventType: EventType, $eventTimeMinimum: Timestamp) {
  events(eventTargetId: $id, eventTargetType: PLANT, sortDirection: DESCENDING, eventType: $eventType, eventTimeMinimum: $eventTimeMinimum) {
    id
    type
    data {
      __typename
      ... on BaseEventData {
        id
        eventTime
      }
      ... on WaterEventData {
        id
        eventTime
        amount
        amountUnit
        temperature
        temperatureUnit
      }
      ... on PlantStageEventData {
        id
        eventTime
        plantStage {
          id
          name
          description
        }
      }
      ... on TemperatureEventData {
        id
        eventTime
        temperature
        temperatureUnit
      }
      ... on HumidityEventData {
        id
        eventTime
        humidity
        humidityUnit
      }
      ... on PHEventData {
        id
        eventTime
        pH
      }
      ... on ECEventData {
        id
        eventTime
        electricalConductivity
        electricalConductivityUnit
      }
      ... on LightEventData {
        id
        eventTime
        lightOn
        previousLightOn
        color
        lumens
        wattage
        bulbType
      }
    }
  }
}
    `;

/**
 * __useGetPlantEventsQuery__
 *
 * To run a query within a React component, call `useGetPlantEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantEventsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      eventType: // value for 'eventType'
 *      eventTimeMinimum: // value for 'eventTimeMinimum'
 *   },
 * });
 */
export function useGetPlantEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantEventsQuery, GetPlantEventsQueryVariables>) {
        return Apollo.useQuery<GetPlantEventsQuery, GetPlantEventsQueryVariables>(GetPlantEventsDocument, baseOptions);
      }
export function useGetPlantEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantEventsQuery, GetPlantEventsQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantEventsQuery, GetPlantEventsQueryVariables>(GetPlantEventsDocument, baseOptions);
        }
export type GetPlantEventsQueryHookResult = ReturnType<typeof useGetPlantEventsQuery>;
export type GetPlantEventsLazyQueryHookResult = ReturnType<typeof useGetPlantEventsLazyQuery>;
export type GetPlantEventsQueryResult = Apollo.QueryResult<GetPlantEventsQuery, GetPlantEventsQueryVariables>;
export const GetPlantStageEventsDocument = gql`
    query getPlantStageEvents($plantId: Int!) {
  events(eventTargetId: $plantId, eventTargetType: PLANT, eventType: PLANT_STAGE_CHANGE) {
    id
    type
    data {
      __typename
      ... on BaseEventData {
        id
        eventTime
      }
      ... on PlantStageEventData {
        id
        eventTime
        plantStage {
          id
          name
          description
        }
      }
    }
  }
}
    `;

/**
 * __useGetPlantStageEventsQuery__
 *
 * To run a query within a React component, call `useGetPlantStageEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantStageEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantStageEventsQuery({
 *   variables: {
 *      plantId: // value for 'plantId'
 *   },
 * });
 */
export function useGetPlantStageEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantStageEventsQuery, GetPlantStageEventsQueryVariables>) {
        return Apollo.useQuery<GetPlantStageEventsQuery, GetPlantStageEventsQueryVariables>(GetPlantStageEventsDocument, baseOptions);
      }
export function useGetPlantStageEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantStageEventsQuery, GetPlantStageEventsQueryVariables>) {
          return Apollo.useLazyQuery<GetPlantStageEventsQuery, GetPlantStageEventsQueryVariables>(GetPlantStageEventsDocument, baseOptions);
        }
export type GetPlantStageEventsQueryHookResult = ReturnType<typeof useGetPlantStageEventsQuery>;
export type GetPlantStageEventsLazyQueryHookResult = ReturnType<typeof useGetPlantStageEventsLazyQuery>;
export type GetPlantStageEventsQueryResult = Apollo.QueryResult<GetPlantStageEventsQuery, GetPlantStageEventsQueryVariables>;
export const GetPlantPhotosDocument = gql`
    query getPlantPhotos($id: Int!) {
  plant(id: $id) {
    id
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


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  SortDirection: SortDirection;
  LiquidUnit: LiquidUnit;
  TimeUnit: TimeUnit;
  TemperatureUnit: TemperatureUnit;
  HumidityUnit: HumidityUnit;
  ElectricalConductivityUnit: ElectricalConductivityUnit;
  LightBulbType: LightBulbType;
  LightBulbColor: LightBulbColor;
  Environment: ResolverTypeWrapper<Environment>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Query: ResolverTypeWrapper<{}>;
  EventTargetType: EventTargetType;
  EventType: EventType;
  ECEventData: ResolverTypeWrapper<EcEventData>;
  HumidityEventData: ResolverTypeWrapper<HumidityEventData>;
  LightEventData: ResolverTypeWrapper<LightEventData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PHEventData: ResolverTypeWrapper<PhEventData>;
  PlantStageEventData: ResolverTypeWrapper<PlantStageEventData>;
  TemperatureEventData: ResolverTypeWrapper<TemperatureEventData>;
  WaterEventData: ResolverTypeWrapper<WaterEventData>;
  BaseEventData: ResolversTypes['ECEventData'] | ResolversTypes['HumidityEventData'] | ResolversTypes['LightEventData'] | ResolversTypes['PHEventData'] | ResolversTypes['PlantStageEventData'] | ResolversTypes['TemperatureEventData'] | ResolversTypes['WaterEventData'];
  EventTarget: ResolversTypes['Plant'];
  EventData: ResolversTypes['WaterEventData'] | ResolversTypes['PlantStageEventData'] | ResolversTypes['TemperatureEventData'] | ResolversTypes['HumidityEventData'] | ResolversTypes['PHEventData'] | ResolversTypes['ECEventData'] | ResolversTypes['LightEventData'];
  Event: ResolverTypeWrapper<Omit<Event, 'data' | 'targets'> & { data?: Maybe<ResolversTypes['EventData']>, targets?: Maybe<Array<Maybe<ResolversTypes['EventTarget']>>> }>;
  Node: ResolversTypes['Event'];
  BaseDbModel: ResolversTypes['Environment'] | ResolversTypes['LightBulbTemplate'] | ResolversTypes['Photo'] | ResolversTypes['PlantStage'] | ResolversTypes['Plant'] | ResolversTypes['Species'] | ResolversTypes['SpeciesPlantStage'];
  LightBulbTemplate: ResolverTypeWrapper<LightBulbTemplate>;
  Photo: ResolverTypeWrapper<Photo>;
  Mutation: ResolverTypeWrapper<{}>;
  PlantStage: ResolverTypeWrapper<PlantStage>;
  Plant: ResolverTypeWrapper<Plant>;
  Species: ResolverTypeWrapper<Species>;
  SpeciesPlantStage: ResolverTypeWrapper<SpeciesPlantStage>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Timestamp: Scalars['Timestamp'];
  Environment: Environment;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  Query: {};
  ECEventData: EcEventData;
  HumidityEventData: HumidityEventData;
  LightEventData: LightEventData;
  Boolean: Scalars['Boolean'];
  PHEventData: PhEventData;
  PlantStageEventData: PlantStageEventData;
  TemperatureEventData: TemperatureEventData;
  WaterEventData: WaterEventData;
  BaseEventData: ResolversParentTypes['ECEventData'] | ResolversParentTypes['HumidityEventData'] | ResolversParentTypes['LightEventData'] | ResolversParentTypes['PHEventData'] | ResolversParentTypes['PlantStageEventData'] | ResolversParentTypes['TemperatureEventData'] | ResolversParentTypes['WaterEventData'];
  EventTarget: ResolversParentTypes['Plant'];
  EventData: ResolversParentTypes['WaterEventData'] | ResolversParentTypes['PlantStageEventData'] | ResolversParentTypes['TemperatureEventData'] | ResolversParentTypes['HumidityEventData'] | ResolversParentTypes['PHEventData'] | ResolversParentTypes['ECEventData'] | ResolversParentTypes['LightEventData'];
  Event: Omit<Event, 'data' | 'targets'> & { data?: Maybe<ResolversParentTypes['EventData']>, targets?: Maybe<Array<Maybe<ResolversParentTypes['EventTarget']>>> };
  Node: ResolversParentTypes['Event'];
  BaseDbModel: ResolversParentTypes['Environment'] | ResolversParentTypes['LightBulbTemplate'] | ResolversParentTypes['Photo'] | ResolversParentTypes['PlantStage'] | ResolversParentTypes['Plant'] | ResolversParentTypes['Species'] | ResolversParentTypes['SpeciesPlantStage'];
  LightBulbTemplate: LightBulbTemplate;
  Photo: Photo;
  Mutation: {};
  PlantStage: PlantStage;
  Plant: Plant;
  Species: Species;
  SpeciesPlantStage: SpeciesPlantStage;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type EnvironmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Environment'] = ResolversParentTypes['Environment']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idealWaterAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealWaterAmountUnit?: Resolver<Maybe<ResolversTypes['LiquidUnit']>, ParentType, ContextType>;
  idealWaterAmountPerTimePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  idealWaterAmountPerTimePeriodUnit?: Resolver<Maybe<ResolversTypes['TimeUnit']>, ParentType, ContextType>;
  idealTemperatureMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealTemperatueMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealTemperatureMinUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  idealTemperatureMaxUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  idealHumidityMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealHumidityMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealHumidityMinUnit?: Resolver<Maybe<ResolversTypes['HumidityUnit']>, ParentType, ContextType>;
  idealHumidityMaxUnit?: Resolver<Maybe<ResolversTypes['HumidityUnit']>, ParentType, ContextType>;
  lightOnTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lightOnTimeUnit?: Resolver<Maybe<ResolversTypes['TimeUnit']>, ParentType, ContextType>;
  lightOnTimePerTimePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lightOnTimePerTimePeriodUnit?: Resolver<Maybe<ResolversTypes['TimeUnit']>, ParentType, ContextType>;
  lightBulbTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['LightBulbTemplate']>>>, ParentType, ContextType>;
  desiredPH?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phMinimum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phMaximum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  desiredElectricalConductivity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  desiredElectricalConductivityUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  electricalConductivityMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  electricalConductivityMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  electricalConductivityMinUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  electricalConductivityMaxUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allSpecies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Species']>>>, ParentType, ContextType>;
  environment?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType, RequireFields<QueryEnvironmentArgs, 'id'>>;
  environments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Environment']>>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'eventTargetId' | 'eventTargetType'>>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'eventTargetId' | 'eventTargetType'>>;
  lightBulbTemplate?: Resolver<Maybe<ResolversTypes['LightBulbTemplate']>, ParentType, ContextType, RequireFields<QueryLightBulbTemplateArgs, 'id'>>;
  lightBulbTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['LightBulbTemplate']>>>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QueryPhotoArgs, 'id'>>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  plant?: Resolver<Maybe<ResolversTypes['Plant']>, ParentType, ContextType, RequireFields<QueryPlantArgs, 'id'>>;
  plantStage?: Resolver<Maybe<ResolversTypes['PlantStage']>, ParentType, ContextType, RequireFields<QueryPlantStageArgs, 'id'>>;
  plantStages?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlantStage']>>>, ParentType, ContextType>;
  plants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plant']>>>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<QuerySpeciesArgs, 'id'>>;
  speciesPlantStage?: Resolver<Maybe<ResolversTypes['SpeciesPlantStage']>, ParentType, ContextType, RequireFields<QuerySpeciesPlantStageArgs, 'id'>>;
  speciesPlantStages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpeciesPlantStage']>>>, ParentType, ContextType>;
};

export type EcEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ECEventData'] = ResolversParentTypes['ECEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  electricalConductivity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  electricalConductivityUnit?: Resolver<Maybe<ResolversTypes['ElectricalConductivityUnit']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HumidityEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['HumidityEventData'] = ResolversParentTypes['HumidityEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidityUnit?: Resolver<Maybe<ResolversTypes['HumidityUnit']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightEventData'] = ResolversParentTypes['LightEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  previousLightOn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lightOn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bulbType?: Resolver<Maybe<ResolversTypes['LightBulbType']>, ParentType, ContextType>;
  wattage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lumens?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['LightBulbColor']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PHEventData'] = ResolversParentTypes['PHEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  pH?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantStageEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlantStageEventData'] = ResolversParentTypes['PlantStageEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  plantStage?: Resolver<Maybe<ResolversTypes['PlantStage']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemperatureEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperatureEventData'] = ResolversParentTypes['TemperatureEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperatureUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WaterEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WaterEventData'] = ResolversParentTypes['WaterEventData']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountUnit?: Resolver<Maybe<ResolversTypes['LiquidUnit']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperatureUnit?: Resolver<Maybe<ResolversTypes['TemperatureUnit']>, ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseEventData'] = ResolversParentTypes['BaseEventData']> = {
  __resolveType: TypeResolveFn<'ECEventData' | 'HumidityEventData' | 'LightEventData' | 'PHEventData' | 'PlantStageEventData' | 'TemperatureEventData' | 'WaterEventData', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  eventTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
};

export type EventTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTarget'] = ResolversParentTypes['EventTarget']> = {
  __resolveType: TypeResolveFn<'Plant', ParentType, ContextType>;
};

export type EventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventData'] = ResolversParentTypes['EventData']> = {
  __resolveType: TypeResolveFn<'WaterEventData' | 'PlantStageEventData' | 'TemperatureEventData' | 'HumidityEventData' | 'PHEventData' | 'ECEventData' | 'LightEventData', ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['EventData']>, ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTarget']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Event', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type BaseDbModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseDbModel'] = ResolversParentTypes['BaseDbModel']> = {
  __resolveType: TypeResolveFn<'Environment' | 'LightBulbTemplate' | 'Photo' | 'PlantStage' | 'Plant' | 'Species' | 'SpeciesPlantStage', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
};

export type LightBulbTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightBulbTemplate'] = ResolversParentTypes['LightBulbTemplate']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bulbType?: Resolver<Maybe<ResolversTypes['LightBulbType']>, ParentType, ContextType>;
  wattage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lumens?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['LightBulbColor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationAddPhotoArgs, never>>;
  addPlant?: Resolver<Maybe<ResolversTypes['Plant']>, ParentType, ContextType, RequireFields<MutationAddPlantArgs, never>>;
  addSpecies?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<MutationAddSpeciesArgs, 'name'>>;
};

export type PlantStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlantStage'] = ResolversParentTypes['PlantStage']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultTimeSpanInMinutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultEnvironment?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plant'] = ResolversParentTypes['Plant']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  coverPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  currentPlantStage?: Resolver<Maybe<ResolversTypes['PlantStage']>, ParentType, ContextType>;
  currentSpeciesPlantStage?: Resolver<Maybe<ResolversTypes['SpeciesPlantStage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  sproutToHarvestInHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  speciesPlantStages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpeciesPlantStage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesPlantStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpeciesPlantStage'] = ResolversParentTypes['SpeciesPlantStage']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  idealEnvironment?: Resolver<Maybe<ResolversTypes['Environment']>, ParentType, ContextType>;
  plantStage?: Resolver<Maybe<ResolversTypes['PlantStage']>, ParentType, ContextType>;
  plantStageTimeSpanInMinutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Timestamp?: GraphQLScalarType;
  Environment?: EnvironmentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ECEventData?: EcEventDataResolvers<ContextType>;
  HumidityEventData?: HumidityEventDataResolvers<ContextType>;
  LightEventData?: LightEventDataResolvers<ContextType>;
  PHEventData?: PhEventDataResolvers<ContextType>;
  PlantStageEventData?: PlantStageEventDataResolvers<ContextType>;
  TemperatureEventData?: TemperatureEventDataResolvers<ContextType>;
  WaterEventData?: WaterEventDataResolvers<ContextType>;
  BaseEventData?: BaseEventDataResolvers<ContextType>;
  EventTarget?: EventTargetResolvers<ContextType>;
  EventData?: EventDataResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  BaseDbModel?: BaseDbModelResolvers<ContextType>;
  LightBulbTemplate?: LightBulbTemplateResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PlantStage?: PlantStageResolvers<ContextType>;
  Plant?: PlantResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
  SpeciesPlantStage?: SpeciesPlantStageResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
