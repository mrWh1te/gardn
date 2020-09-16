# Gardn

<p align="center"><?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve" width="120">
<path style="fill:#4CAF50;" d="M468.527,6.592c-1.649-3.989-5.54-6.591-9.856-6.592C44.804,0,0.004,171.563,0.004,245.333
	c0,95.701,72.875,160,181.333,160c136.981,0,165.675-130.347,181.077-200.384c14.973-71.292,51.151-136.391,103.787-186.752
	C469.248,15.153,470.166,10.575,468.527,6.592z"/>
<path style="fill:#388E3C;" d="M10.671,469.333c-5.891,0-10.667-4.776-10.667-10.667c0-63.424,109.973-266.923,283.349-350.933
	c5.302-2.568,11.682-0.353,14.251,4.949c2.568,5.302,0.353,11.682-4.949,14.251l0,0C117.572,211.776,21.337,408.811,21.337,458.667
	C21.337,464.558,16.562,469.333,10.671,469.333z"/>
</svg>
</p>

Open-source full-stack Garden Management app using [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/), [GraphQL](https://graphql.org/), and [React](https://reactjs.org/) in a mono-repo setup with [Nx](https://nx.dev).

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

This focuses on client applications operations with GraphQL to retrieve, create or change data. It exports auto-generated code (TypeScript types for models and custom React hooks for the Queries & Mutations) based on the Schema and the Operations & Mutations of this library.

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

## Development servers

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