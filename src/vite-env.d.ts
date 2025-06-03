/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_V1_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
