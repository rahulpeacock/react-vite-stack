import { readFile } from 'node:fs/promises';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { parse } from 'node-html-parser';
import { defineConfig } from 'vite';

// Get the HTML of our one entry
const index = await readFile('./index.html', 'utf8');
const root = parse(index);
const assetTags = root.querySelectorAll('link[rel="stylesheet"][href^="/src/"]');

const inputs = Object.fromEntries([
  ['index.html', './index.html'],
  ...assetTags.map((tag) => {
    const src = tag.getAttribute('href');
    if (!src) {
      throw new Error(`No href attribute found on tag ${tag}`);
    }
    const fileExtension = path.extname(src);
    const fileName = path.basename(src, fileExtension);
    return [fileName, src];
  }),
]);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: false,
      tmpDir: './node_modules/.tmp/.tanstack/tmp',
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    https: {
      key: './cert/localhost-key.pem',
      cert: './cert/localhost.pem',
    },
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: inputs,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
