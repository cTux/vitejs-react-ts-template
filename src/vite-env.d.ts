/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COUNTER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
