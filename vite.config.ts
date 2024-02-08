import { readFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

class BuildSettings {
  public static SRC = path.resolve("src");
  public static PRODUCTION = process.env.NODE_ENV !== "development";
  public static CERTS = path.resolve(__dirname, "../my-perf-gql/cert");

  public static alias(relative: string) {
    return path.join(this.SRC, relative);
  }

  public static get PROXY() {
    if (!this.PRODUCTION) {
      return {
        proxy: {
          "/graphql": {
            target: "https://localhost:4000",
            changeOrigin: true,
            secure: false,
          },
        },
      };
    }
    return {};
  }

  public static get HTTPS() {
    if (!this.PRODUCTION) {
      return {
        https: {
          key: readFileSync(path.join(this.CERTS, "server.key")),
          cert: readFileSync(path.join(this.CERTS, "server.cert")),
        },
      };
    }
    return {};
  }
}

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      Components: BuildSettings.alias("Components"),
      GQL: BuildSettings.alias("GQL"),
      Images: BuildSettings.alias("Images"),
      Icons: BuildSettings.alias("Icons"),
      Layouts: BuildSettings.alias("Layouts"),
      Models: BuildSettings.alias("Models"),
      Pages: BuildSettings.alias("Pages"),
      Root: BuildSettings.alias("Root"),
      Routes: BuildSettings.alias("Routes"),
      State: BuildSettings.alias("State"),
      Styles: BuildSettings.alias("Styles"),
      Tools: BuildSettings.alias("Tools"),
    },
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
