/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ORG: string;
  readonly VITE_GITHUB_CLIENT_ID: string;
  readonly VITE_GITHUB_ORG_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
