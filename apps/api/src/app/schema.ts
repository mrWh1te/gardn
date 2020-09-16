import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typesArray = loadFilesSync('apps/api/src/app/schemas/**/*.graphql');

export const typeDefs = mergeTypeDefs(typesArray);