import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Plant {
    id: Int!
    name: String
  }

  type Query {
    plants: [Plant]
    plant(id: Int!): Plant
  }

  type Mutation {
    addPlant(name: String): Plant
  }
`;
