import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({})],
  resolve: {
    // Hot Moudle Replacement
    alias: {
      '@gerp/ui': resolve(__dirname, '../../shared/ui/src/main.ts'),
      '@gerp/core': resolve(__dirname, '../../shared/core/src/main.ts'),
    },
  },
});
