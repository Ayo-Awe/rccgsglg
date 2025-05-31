import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "http://localhost:3000/api/openapi.json",
  output: "api-client",
  plugins: [
    ...defaultPlugins,
    { name: "@hey-api/client-axios", runtimeConfigPath: "./lib/client.ts" },
    {
      asClass: false, // default
      name: "@hey-api/sdk",
    },
  ],
});
