/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "*.scss";
declare module "*.module.scss";