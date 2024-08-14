// import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";
// import typescript from "@rollup/plugin-typescript";
// import autoprefixer from "autoprefixer";
// import dts from "rollup-plugin-dts";
// import postcss from "rollup-plugin-postcss";
// import tailwindcss from "tailwindcss";
// import packageJson from "./package.json" assert { type: "json" };

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     css: {
//       postcss: {
//         plugins: [tailwindcss, autoprefixer],
//       },
//     },
//     plugins: [
//       resolve({
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//         skip: ["react", "react-dom"],
//       }),
//       commonjs(),
//       typescript({
//         tsconfig: "./tsconfig.json",
//         exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.tsx"],
//       }),
//       postcss({ extensions: [".css"], inject: true, extract: false }),
//     ],
//     external: ["react", "react-dom", "react/jsx-runtime"],
//   },

//   {
//     input: "dist/esm/types/src/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.css$/],
//   },
// ];
