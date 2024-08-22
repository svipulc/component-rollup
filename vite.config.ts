// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      staticImport: true,
      outDir: "dist/types",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "evoke-ui",
      formats: ["es", "cjs"],
      fileName: format => `${format}/index.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "class-variance-authority": "classVarianceAuthority",
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
