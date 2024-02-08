import { readFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

const SRC = path.resolve("src");
const CERTS = path.resolve(__dirname, "../my-perf-gql/cert");
const PRODUCTION = process.env.NODE_ENV !== "development";

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      Components: path.join(SRC, "Components"),
      GQL: path.join(SRC, "GQL"),
      Images: path.join(SRC, "Images"),
      Icons: path.join(SRC, "Icons"),
      Layouts: path.join(SRC, "Layouts"),
      Models: path.join(SRC, "Models"),
      Pages: path.join(SRC, "Pages"),
      Root: path.join(SRC, "Root"),
      Routes: path.join(SRC, "Routes"),
      State: path.join(SRC, "State"),
      Styles: path.join(SRC, "Styles"),
      Tools: path.join(SRC, "Tools"),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    https: {
      key: readFileSync(path.join(CERTS, "server.key")),
      cert: readFileSync(path.join(CERTS, "server.cert")),
    },
    proxy: {
      "/graphql": {
        target: "https://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: PRODUCTION,
    minify: "terser",
    target: "es2015",
    outDir: "build",
  },
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy", "classProperties"],
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: path.join(SRC, "Root/index.tsx"),
      template: "public/index.html",
    }),
  ],
});
