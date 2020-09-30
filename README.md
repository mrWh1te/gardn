<p align="center">
  <h1>
    gardn<img src="https://raw.githubusercontent.com/mrWh1te/gardn/master/apps/gardn/src/assets/leaf.png" alt="Gardn" width="32">
  </h1>
</p>

Open-source full-stack garden management web app using [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/), [GraphQL](https://graphql.org/), and [React](https://reactjs.org/) in a mono-repo setup with [Nx](https://nx.dev).

This project is made better with [Jest](https://jestjs.io/), [Cypress](https://www.cypress.io/), [Storybook](https://storybook.js.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [Babel](https://babeljs.io/).

It is organized by applications and libraries.

## Applications

### API

In `./apps/api` is a GraphQL NodeJS based API built with the Apollo Express Server.

### Gardn

In `./apps/gardn` is a React based web app.

## Libraries

### Data

In `./libs/data` is a library that focuses on main project data from models to client app GraphQL operations that retrieve, create or change data. It exports auto-generated code (TypeScript types for models and custom React hooks for the Queries & Mutations) based on the Schema and the Operations & Mutations of this library.

```typescript
import { Plant } from '@gardn/data'; // auto-generated TypeScript type called Plant
                                     // built from the GraphQL type called Plant
```

### UI

In `./libs/ui` is a library of common UI components.

```typescript
import { Button } from '@gardn/ui';
```

This library has a dedicated Storybook app. Run it with `nx run ui:storybook`. The stories use the [CSF format](https://storybook.js.org/docs/react/api/csf), which can be reused in unit-tests like for the Card component in this library.

### Layout

In `./libs/layout` is a library of common Layout components.

```typescript
import { Header, Navigation, Logo } from '@gardn/layout';
```

### Utility

In `./libs/utility` is a library of common components.

```typescript
import { GoBack } from '@gardn/utility';
```

### Plant
In `./libs/plant` is a domain folder (DDD) for libraries such as Smart Components, UI Components, View Components, Helpers, View-Models, etc related to the project's Plant feature.

#### Plant: Smart
In `./libs/plant/smart` is a dedicated smart components library for the Plant feature.

```typescript
import { Plant } from '@gardn/plant/smart';
```

#### Plant: UI
In `./libs/plant/ui` is a dedicated UI components library for the Plant feature. These may or may not build on the components from the main UI library.

```typescript
import { PlantCard } from '@gardn/plant/ui';
```

#### Plant: View
In `./libs/plant/view` is a dedicated View components library for the Plant feature (pages, parts of pages). These may or may not build on the components from the smart & UI libraries.

```typescript
import { PlantPage } from '@gardn/plant/view';
```

#### Plant: Helpers

In `./libs/plant/helpers` is a dedicated library to functions that facilitate with the plant feature from creating, mapping data to DOM operations, anything Plant related.

```typescript
import { createPlantFactory, mockPlant1 } from '@gardn/plant/helpers';
```

### Plants
In `./libs/plants` is a domain folder (DDD) for libraries such as Smart Components, UI Components, View Components, Helpers, View-Models, etc related to the project's Plants feature.


#### Plants: Smart
In `./libs/plants/smart` is a dedicated Smart components library for the Plants feature. These may or may not build on the generated React query hooks from the GraphQl operations and mutations.

```typescript
import { PlantsList } from '@gardn/plants/smart';
```

Smart libraries may or may not depend on UI libraries.

#### Plants: UI
In `./libs/plants/ui` is a dedicated UI components library for the Plants feature. These may or may not build on the components from the main UI library.

```typescript
import { PlantsList } from '@gardn/plants/ui';
```

### Container
In `./libs/container` is a domain folder (DDD) for libraries such as Smart Components, UI Components, View Components, Helpers, View-Models, etc related to the project's Container feature. A container, in gardn, is a physical box that can contain plants from seeds to soil.

#### Container: UI

In `./libs/container/ui` is a library of container UI components.

```typescript
import { ContainerCard } from '@gardn/container/ui';
```

### Containers
In `./libs/containers` is a domain folder (DDD) for libraries such as Smart Components, UI Components, View Components, Helpers, View-Models, etc related to the project's Containers feature.

#### Containers: UI

In `./libs/containesr/ui` is a library of containers UI components like a list of Containers.

```typescript
import { ContainersList } from '@gardn/containers/ui';
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

Current unit-tests:
 - run `nx test gardn` for react web app
 - run `nx test api` for nodejs graphql server
 - run `nx test data` for main data library
 - run `nx test ui` for main ui library
 - run `nx test layout` for main layout library
 - run `nx test utility` for utility components library
 - run `nx test plant-view` for domain plant's view library
 - run `nx test plant-smart` for domain plant's smart library
 - run `nx test plant-ui` for domain plant's ui library
 - run `nx test plant-helpers` for domain plant's helpers library
 - run `nx test plants-ui` for domain plants' ui library
 - run `nx test plants-smart` for domain plants' smart library
 - run `nx test container-ui` for domain container's ui library
 - run `nx test containers-ui` for domain containers's ui library

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

Current e2e tests:
 - run `nx e2e gardn-e2e` for react web app cypress tests

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Contributions

<div>Project Leaf Logo created by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></div>