import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: { lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'] } },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [tsconfigPaths(), dts()],
});
