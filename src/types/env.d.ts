/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_DESTINATION: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_TEMP_API_DESTINATION: string;
  readonly VITE_TEMP_URL: string;
  readonly VITE_STC_API_DESTINATION: string;
  readonly VITE_STC_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
