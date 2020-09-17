import App from './app/server'

const port = process.env.port || 3333;

App.server.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${App.graphqlPath}`)
);
