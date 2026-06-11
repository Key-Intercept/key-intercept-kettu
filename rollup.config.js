import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
    name: "KeyInterceptPlugin",
  },
  external: [
    "@vendetta/patcher",
    "@vendetta/metro",
    "@vendetta/storage",
    "react",
    "react-native",
  ],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: false,
          dynamicImport: true,
        },
        target: "es2020",
        transform: {
          react: {
            runtime: "automatic",
          },
        },
      },
      module: {
        type: "es6",
      },
      minify: true,
    }),
  ],
};
