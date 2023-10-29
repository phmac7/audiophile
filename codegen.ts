import { CodegenConfig } from '@graphql-codegen/cli';
import { fetchConfig } from './fetcherConfig';
require('dotenv').config();

const config: CodegenConfig = {
  schema: [
    {
      [fetchConfig.endpoint]: fetchConfig.params,
    },
  ],
  documents: ['**/graphQL/queries.ts'],
  generates: {
    'graphQL/schema.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
