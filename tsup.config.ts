import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir:"dist",
  treeshake: true,
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ['esm'],
  external: ['react'],
});
