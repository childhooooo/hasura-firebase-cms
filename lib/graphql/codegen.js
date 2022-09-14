require("dotenv").config();

const graphQLEndpoint = process.env.GRAPHQL_ENDPOINT || null;
const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || null;

if (graphQLEndpoint && hasuraAdminSecret) {
  const schema = [{}];
  schema[0][graphQLEndpoint] = {
    headers: {
      "x-hasura-admin-secret": hasuraAdminSecret,
      "x-hasura-role": "admin",
    },
  };

  module.exports = {
    schema,
    documents: ["./queries/**/*.graphql"],
    overwrite: true,
    generates: {
      "./lib/graphql/generated/index.ts": {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-query",
        ],
        config: {
          fetcher: "graphql-request",
          isReactHook: true,
          exposeQueryKeys: false,
          addInfiniteQuery: true,
        },
      },
      "./lib/graphql/graphql.schema.json": {
        plugins: ["introspection"],
      },
    },
  };
} else {
  console.log("Error: Some required environment variables are missing.");
}
