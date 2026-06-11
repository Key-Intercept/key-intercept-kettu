import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
    name: "KeyInterceptPlugin",
    // THIS IS THE CRITICAL FIX: Tell Rollup where the APIs actually live in Kettu
    globals: {
      "@vendetta/patcher": "vendetta.patcher",
      "@vendetta/metro": "vendetta.metro",
      "@vendetta/storage": "vendetta.storage",
      "react": "window.React",
      "react-native": "window.ReactNative"
    }
  },
  // Keep using the function format so we don't have to hardcode every single vendetta path
  external: (id) => {
    return (
      id.startsWith("@vendetta") || 
      id === "react" || 
      id === "react-native"
    );
  },
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