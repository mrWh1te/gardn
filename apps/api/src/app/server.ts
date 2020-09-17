import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers: resolvers() as any});
 
const app = express();
server.applyMiddleware({ app });

export default { server: app, graphqlPath: server.graphqlPath }