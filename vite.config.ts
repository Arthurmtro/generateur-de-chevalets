import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgrPlugin({
      svgrOptions: {
        exportType: 'default',
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {  find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      {  find: '@assets', replacement: path.resolve(__dirname, 'src/assets')},
      {  find: '@styles', replacement: path.resolve(__dirname, 'src/styles')},
      {  find: '@store', replacement: path.resolve(__dirname, 'src/store')},
      {  find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
    ],
  },
  css: {
    postcss: {
        plugins: [
            postcssNesting
        ],
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  }
})
