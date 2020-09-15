import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './app/schema';
import { resolvers } from './app/resolvers';

const server = new ApolloServer({ typeDefs, resolvers: resolvers() as any});
 
const app = express();
server.applyMiddleware({ app });
 
const port = process.env.port || 3333;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
