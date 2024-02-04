/* eslint-disable n/prefer-global/process */
import { URL, fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';
import type { ConfigEnv, UserConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

const CWD = process.cwd();

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const { VITE_API_DESTINATION, VITE_BASE_URL } = loadEnv(mode, CWD);

  return {
    // path resolver
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // plugins setup
    plugins: [
      Vue(),
      // auto import component
      Components({
        dts: './auto/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      // Auto import
      AutoImport({
        dts: './auto/auto-imports.d.ts',
        dirs: [
          './src/composable/core',
          './src/stores',
        ],
        imports: ['vue', 'vue-router', 'pinia'],
        vueTemplate: true,
      }),
      // Uno css
      UnoCSS(),
    ],

    // Dependencies
    optimizeDeps: {
      include: [
        'lodash-es',
      ],
    },

    // SCSS preprocessor
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "./src/assets/styles/varr.scss";',
        },
      },
    },

    // server proxy
    server: {
      port: 5500,
      host: true,
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // dist preview port
    preview: {
      port: 5000,
    },

    // deploy info
    build: {
      target: 'es2017',
      minify: 'esbuild',
      cssTarget: 'chrome79',
      chunkSizeWarningLimit: 2000,
    },
  };
});
