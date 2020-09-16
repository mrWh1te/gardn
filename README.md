# Gardn

Open-source full-stack Garden Management app using TypeScript, Node, GraphQL, and React.

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="120"></p>

🔎 Monorepo setup via [Nx](https://nx.dev)

## Workspace

### Applications

Main two applications:

#### API

In `./apps/api` is a GraphQL NodeJS based API built with the Apollo Express Server.

#### Gardn

In `./apps/gardn` is a React based web app.

### Libraries

Main libraries shared in this mono-repo:

#### Data

This focuses on client applications operations with GraphQL to retrieve, create or change data. It exports auto-generates code (TypeScript types for models and custom React hooks for the Queries & Mutations) based on the Schema and the Operations & Mutations of this library.

```typescript
import { Plant } from '@gardn/data'; // auto-generated TypeScript type called Plant
                                     // built from the GraphQL type called Plant
```

#### UI

Common UI Components library (to be developed)

```typescript
import { Button } from '@gardn/ui';
```

#### Plant
Domain folder for libraries such as Smart Components, UI Components, View Components, helpful functions, view-models, etc related to an app Plant (to be developed)

```typescript
import { createPlant } from '@gardn/plant'; // helper function with safe defaults
```

## Development server

Run `nx serve api` for lifting the GraphQL API. Navigate to http://localhost:3333/graphql. The GraphQL playground will be accessible there. The API will automatically reload if you change any of the source files.

Run `nx serve gardn` for lifting the React web app. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

To install new npm dependencies, do it from the root directory. The npm dependencies are shared across apps and libraries.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@gardn/mylib`.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
