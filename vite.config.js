import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
  resolve: {
    alias: {
      '@': '/src',
      'components3': '/src/components3', // Adjust if folder is 'Component3'
      'Components4': '/src/Components4',
      'component5': '/src/component5',
      'UserDashboard': '/src/UserDashboard',
      'Pages': '/src/Pages',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});