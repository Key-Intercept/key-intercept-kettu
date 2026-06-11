import resolve from "@rollup/plugin-node-resolve";
import swc from "rollup-plugin-swc3";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "named",
    name: "KeyInterceptPlugin",
    globals: {
      "@vendetta/patcher": "vendetta.patcher",
      "@vendetta/metro": "vendetta.metro",
      "@vendetta/storage": "vendetta.storage",
      "react": "window.React",
      "react-native": "window.ReactNative"
    }
  },
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
      ignore: ["react", "react-native", "@vendetta/patcher", "@vendetta/metro", "@vendetta/storage"]
    }),
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
      minify: false,
    }),
  ],
};