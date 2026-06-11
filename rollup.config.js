const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const swc = require("rollup-plugin-swc3").default;

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "named",
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
        target: "es2022",
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
