import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/GQL/Types/graphql-schema.graphql",
  documents: ["src/**/*.gql.ts"],
  generates: {
    "./src/GQL/Types/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
