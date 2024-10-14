/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_COUNTER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
