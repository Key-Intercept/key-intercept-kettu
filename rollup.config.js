import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

export default {
  input: "key-intercept/vencord.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
    name: "KeyInterceptPlugin",
  },
  external: [
    "@metro",
    "@lib/addons/plugins",
    "@lib/api/patcher",
    "@lib/utils/logger",
    "@lib/api/storage",
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
