import resolve from "@rollup/plugin-node-resolve";
import swc from "rollup-plugin-swc3";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
    name: "KeyInterceptPlugin",
    // THIS FIXES THE EVAL CRASH - It forces the IIFE to return the object
    footer: "KeyInterceptPlugin;", 
    globals: {
      "@vendetta/patcher": "window.vendetta.patcher",
      "@vendetta/metro": "window.vendetta.metro",
      "@vendetta/storage": "window.vendetta.storage",
      "react": "window.React",
      "react-native": "window.ReactNative"
    }
  },
  external: (id) => {
    return (
      id.startsWith("@vendetta") || 
      id === "react" || 
      id === "react-native" ||
      id === "ws" // <-- Prevents Node.js WebSocket code from breaking Hermes
    );
  },
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
        },
        target: "es2020",
      },
      module: {
        type: "es6",
      },
      minify: false,
    }),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  }
};