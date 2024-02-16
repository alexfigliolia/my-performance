import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import { BuildSettings } from "./devtools/dev-server";

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: BuildSettings.aliases,
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    ...BuildSettings.HTTPS,
    ...BuildSettings.PROXY,
  },
  build: {
    sourcemap: BuildSettings.PRODUCTION,
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
      entry: BuildSettings.alias("Root/index.tsx"),
      template: "public/index.html",
    }),
  ],
});
